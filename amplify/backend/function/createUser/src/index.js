/* Amplify Params - DO NOT EDIT
	API_TEETIMETRAINER_GRAPHQLAPIIDOUTPUT
	API_TEETIMETRAINER_USERTABLE_ARN
	API_TEETIMETRAINER_USERTABLE_NAME
	AUTH_TEETIMETRAINER9CD69C10_USERPOOLID
	ENV
	REGION
	STORAGE_TEETIMETRAINER_BUCKETNAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const cognito = new AWS.CognitoIdentityServiceProvider();

const {
  API_TEETIMETRAINER_USERTABLE_NAME,
  AUTH_TEETIMETRAINER9CD69C10_USERPOOLID,
  ADAPTY_API_KEY,
  FREE_TRIAL_DAYS,
} = process.env;

const getExpirationDate = () => {
  const now = new Date();
  now.setDate(now.getDate() + Number(FREE_TRIAL_DAYS));

  return now.toISOString().replace('Z', '+0000');
};

const addFreeTrial = async (userId) => {
  console.log('preparing to request adapty api');
  const url = `https://api.adapty.io/api/v1/sdk/profiles/${userId}/paid-access-levels/premium/grant/`;

  const data = {
    expires_at: getExpirationDate(),
  };

  console.log('adapty api payload', data);

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Api-Key ${ADAPTY_API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    console.log('adapty request response', resp);
    return true;
  } catch (e) {
    console.log('something went wrong with the request to adapty api', e);
    return false;
  }
};
const getUserData = async (Sub) => {
  const params = {
    UserPoolId: AUTH_TEETIMETRAINER9CD69C10_USERPOOLID,
    Filter: `sub = "${Sub}"`,
  };

  const result = await cognito.listUsers(params).promise();

  return result.Users[0];
};

const setCreated = async (Username) => {
  const params = {
    UserPoolId: AUTH_TEETIMETRAINER9CD69C10_USERPOOLID,
    Username,
    UserAttributes: [
      {
        Name: 'custom:created',
        Value: 'true',
      },
    ],
  };

  await cognito.adminUpdateUserAttributes(params).promise();
};

const createUser = async (id, username, featureFlags) => {
  const params = {
    TableName: API_TEETIMETRAINER_USERTABLE_NAME,
    Item: {
      id,
      featureFlags,
      __typename: 'User',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      owner: `${id}::${username}`,
    },
  };

  await db.put(params).promise();
};

const checkUserExists = async (userId) => {
  const params = {
    TableName: API_TEETIMETRAINER_USERTABLE_NAME,
    Key: {
      id: userId,
    },
  };

  const result = await db.get(params).promise();

  return !!result.Item;
};

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  try {
    const userId = event.arguments.id;

    const { Username } = await getUserData(userId);

    console.log('Username', { Username });

    const userExists = await checkUserExists(userId);

    console.log(`User exists: ${userExists}`);

    if (userExists) {
      await setCreated(Username);

      return 'User already exists';
    }

    const featureFlags = [
      {
        name: 'showDispersionTutorial',
        value: true,
      },
      {
        name: 'showFaceStrikeTutorial',
        value: true,
      },
      {
        name: 'showApproachTutorial',
        value: true,
      },
      {
        name: 'showDriverSweepTutorial',
        value: true,
      },
      {
        name: 'showShortPuttingTutorial',
        value: true,
      },
      {
        name: 'showLagPuttingTutorial',
        value: true,
      },
      {
        name: 'showStartingDrillsAlert',
        value: true,
      },
      {
        name: 'showSelectDrillsAlert',
        value: true,
      },
      {
        name: 'showCreateUsernameAlert',
        value: true,
      },
    ];

    await createUser(userId, Username, featureFlags);
    await setCreated(Username);
    if (FREE_TRIAL_DAYS && FREE_TRIAL_DAYS > 0) {
      await addFreeTrial(userId);
    }
    return userId;
  } catch (error) {
    console.error(error);

    return error.message;
  }
};
