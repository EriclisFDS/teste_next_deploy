/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_TEETIMETRAINER_USERTABLE_NAME
	API_TEETIMETRAINER_USERTABLE_ARN
	API_TEETIMETRAINER_GRAPHQLAPIIDOUTPUT
	ADAPTY_KEY
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

const { API_TEETIMETRAINER_USERTABLE_NAME, ADAPTY_KEY } = process.env;

const updateUser = async (id) => {
  const params = {
    TableName: API_TEETIMETRAINER_USERTABLE_NAME,
    Key: {
      id,
    },
    UpdateExpression:
      'set #name = :name, updatedAt = :updatedAt, #deleted = :deleted',
    ExpressionAttributeValues: {
      ':name': '',
      ':updatedAt': new Date().toISOString(),
      ':deleted': true,
    },
    ExpressionAttributeNames: {
      '#name': 'name',
      '#deleted': 'deleted',
    },
  };

  await db.update(params).promise();
};

const removeProfile = async (id) => {
  const url = `https://api.adapty.io/api/v1/sdk/profiles/${id}/delete`;
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Api-Key ${ADAPTY_KEY}`,
    },
  };

  await fetch(url, options);
};

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  try {
    const userId = event.identity.claims.sub;

    await updateUser(userId);
    await removeProfile(userId);

    return userId;
  } catch (error) {
    console.error(error);

    return error.message;
  }
};
