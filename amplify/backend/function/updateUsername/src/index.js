/* Amplify Params - DO NOT EDIT
	API_TEETIMETRAINER_GRAPHQLAPIIDOUTPUT
	API_TEETIMETRAINER_USERTABLE_ARN
	API_TEETIMETRAINER_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();

const { API_TEETIMETRAINER_USERTABLE_NAME } = process.env;

const checkUsernameUniqueness = async (username) => {
  const params = {
    TableName: API_TEETIMETRAINER_USERTABLE_NAME,
    IndexName: "byUsername",
    KeyConditionExpression: "username = :username",
    ExpressionAttributeValues: { ":username": username },
  };

  const result = await db.query(params).promise();
  return result.Items.length === 0;
};

const updateUsername = async (args) => {
  const { userId, username } = args;

  const isUnique = await checkUsernameUniqueness(username);
  if (!isUnique) {
    throw new Error("Username already exists");
  }

  const params = {
    TableName: API_TEETIMETRAINER_USERTABLE_NAME,
    Key: { id: userId },
    UpdateExpression: "set username = :username",
    ExpressionAttributeValues: { ":username": username },
    ReturnValues: "ALL_NEW",
  };

  const result = await db.update(params).promise();

  if (!result.Attributes || !result.Attributes.id) {
    throw new Error("Failed to retrieve updated user");
  }

  return result.Attributes;
};

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  try {
    const response = await updateUsername(event.arguments);
    return response;
  } catch (error) {
    console.log("Lambda error:", error);
    throw new Error(error.message);
  }
};
