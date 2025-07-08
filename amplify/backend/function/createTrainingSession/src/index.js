/* Amplify Params - DO NOT EDIT
	API_TEETIMETRAINER_DRILLTABLE_ARN
	API_TEETIMETRAINER_DRILLTABLE_NAME
	API_TEETIMETRAINER_GRAPHQLAPIIDOUTPUT
	API_TEETIMETRAINER_SESSIONDRILLTABLE_ARN
	API_TEETIMETRAINER_SESSIONDRILLTABLE_NAME
	API_TEETIMETRAINER_SESSIONTABLE_ARN
	API_TEETIMETRAINER_SESSIONTABLE_NAME
	API_TEETIMETRAINER_SKILLTABLE_ARN
	API_TEETIMETRAINER_SKILLTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const db = new AWS.DynamoDB.DocumentClient();

const {
  API_TEETIMETRAINER_DRILLTABLE_NAME,
  API_TEETIMETRAINER_SESSIONDRILLTABLE_NAME,
  API_TEETIMETRAINER_SESSIONTABLE_NAME,
} = process.env;

const getRandomDrillsIds = async (balls = 0) => {
  const params = {
    TableName: API_TEETIMETRAINER_DRILLTABLE_NAME,
    Select: 'ALL_ATTRIBUTES',
  };

  const drills = await db.scan(params).promise();
  const skillIds = [...new Set(drills.Items.map((item) => item.skill))];

  // TODO:
  // The IDS of Putting should be dynamic from the database
  let totalTries = 0;
  const excludedSkillIds = [
    '9dbc85ce-29a1-4159-b89e-868f9549ce03',
    '28bd4a72-3cbd-4959-a2fa-7d84df5489f1',
  ];
  const filteredDrillsIds = drills.Items.reduce((acc, drill) => {
    if (
      totalTries + drill.tries <= balls &&
      !excludedSkillIds.includes(drill.skillId)
    ) {
      totalTries += drill.tries;
      acc.push(drill.id);
    }
    return acc;
  }, []);

  return filteredDrillsIds;
};

const getDrillsDuration = async (drillsIds) => {
  const params = {
    RequestItems: {
      [API_TEETIMETRAINER_DRILLTABLE_NAME]: {
        Keys: drillsIds.map((drillId) => ({ id: drillId })),
      },
    },
  };

  const drills = await db.batchGet(params).promise();

  const drillsDuration = drills.Responses[
    API_TEETIMETRAINER_DRILLTABLE_NAME
  ].reduce((acc, drill) => acc + drill.duration, 0);

  return drillsDuration;
};

const createSession = async (userId, duration, mode, name) => {
  const params = {
    TableName: API_TEETIMETRAINER_SESSIONTABLE_NAME,
    Item: {
      id: uuidv4(),
      owner: userId,
      userId,
      duration,
      mode,
      name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __typename: 'Session',
    },
  };

  await db.put(params).promise();

  return params.Item.id;
};

const createSessionDrills = async (userId, sessionId, drillsIds, mode) => {
  const sessionDrills = drillsIds.map((drillId) => ({
    PutRequest: {
      Item: {
        id: uuidv4(),
        sessionId,
        drillId,
        note: '',
        isCompleted: false,
        owner: userId,
        mode,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __typename: 'SessionDrill',
      },
    },
  }));

  const params = {
    RequestItems: {
      [API_TEETIMETRAINER_SESSIONDRILLTABLE_NAME]: sessionDrills,
    },
  };

  await db.batchWrite(params).promise();

  return sessionDrills;
};

const deleteSession = async (sessionId) => {
  const params = {
    TableName: API_TEETIMETRAINER_SESSIONTABLE_NAME,
    Key: {
      id: sessionId,
    },
  };

  await db.delete(params).promise();
};

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const drillsIds =
    event.arguments.drillsIds && event.arguments.drillsIds.length > 0
      ? event.arguments.drillsIds
      : await getRandomDrillsIds(event.arguments.balls);

  const duration = await getDrillsDuration(drillsIds);

  const sessionId = await createSession(
    event.arguments.userId,
    duration,
    event.arguments.mode,
    event.arguments.name
  );

  try {
    const sessionDrills = await createSessionDrills(
      event.arguments.userId,
      sessionId,
      drillsIds
    );
    return {
      id: sessionId,
      owner: event.arguments.userId,
      userId: event.arguments.userId,
      sessionDrills,
      duration,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __typename: 'Session',
    };
  } catch (error) {
    await deleteSession(sessionId);
    throw error;
  }
};
