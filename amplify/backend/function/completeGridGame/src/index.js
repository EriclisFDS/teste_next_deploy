/* Amplify Params - DO NOT EDIT
	API_TEETIMETRAINER_GRAPHQLAPIIDOUTPUT
	API_TEETIMETRAINER_GRIDGAMEHIGHSCORETABLE_ARN
	API_TEETIMETRAINER_GRIDGAMEHIGHSCORETABLE_NAME
	API_TEETIMETRAINER_GRIDGAMESESSIONTABLE_ARN
	API_TEETIMETRAINER_GRIDGAMESESSIONTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const { randomUUID } = require('crypto');

const {
  API_TEETIMETRAINER_GRIDGAMEHIGHSCORETABLE_NAME,
  API_TEETIMETRAINER_GRIDGAMESESSIONTABLE_NAME,
} = process.env;

const updateHighScore = async (args) => {
  const {
    userId,
    id: gridGameSessionId,
    isCompleted,
    targetDistance,
    shots,
  } = args;

  if (!isCompleted) {
    return { message: 'Game not completed, high score not updated.' };
  }

  const timestamp = new Date().toISOString();

  const queryParams = {
    TableName: API_TEETIMETRAINER_GRIDGAMEHIGHSCORETABLE_NAME,
    IndexName: 'byUserGridGameHighScore',
    KeyConditionExpression: 'userId = :userId',
    FilterExpression: 'targetDistance = :targetDistance',
    ExpressionAttributeValues: {
      ':userId': userId,
      ':targetDistance': targetDistance,
    },
  };

  const result = await db.query(queryParams).promise();
  let updatedRecord = null;

  if (result.Items && result.Items.length > 0) {
    const currentRecord = result.Items[0];

    if (shots < currentRecord.shots) {
      const updateParams = {
        TableName: API_TEETIMETRAINER_GRIDGAMEHIGHSCORETABLE_NAME,
        Key: { id: currentRecord.id },
        UpdateExpression:
          'set shots = :shots, gridGameSessionId = :gridGameSessionId, updatedAt = :updatedAt',
        ExpressionAttributeValues: {
          ':shots': shots,
          ':gridGameSessionId': gridGameSessionId,
          ':updatedAt': timestamp,
        },
        ReturnValues: 'ALL_NEW',
      };
      const updateResult = await db.update(updateParams).promise();
      updatedRecord = updateResult.Attributes;
    } else {
      updatedRecord = currentRecord;
    }
  } else {
    const newRecord = {
      id: randomUUID(),
      userId,
      gridGameSessionId,
      targetDistance,
      shots,
      owner: userId,
      __typename: 'GridGameHighScore',
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    const putParams = {
      TableName: API_TEETIMETRAINER_GRIDGAMEHIGHSCORETABLE_NAME,
      Item: newRecord,
    };

    await db.put(putParams).promise();
    updatedRecord = newRecord;
  }

  return updatedRecord;
};

const updateGameSession = async (args) => {
  const { userId, id, targetDistance, shots, distances, isCompleted } = args;

  if (!id) {
    throw new Error(
      'Session ID is required to update an existing game session.'
    );
  }

  const timestamp = new Date().toISOString();

  const updateParams = {
    TableName: API_TEETIMETRAINER_GRIDGAMESESSIONTABLE_NAME,
    Key: { id },
    UpdateExpression: `
      SET
        userId = :userId,
        targetDistance = :targetDistance,
        shots = :shots,
        distances = :distances,
        isCompleted = :isCompleted,
        updatedAt = :updatedAt
    `,
    ExpressionAttributeValues: {
      ':userId': userId,
      ':targetDistance': targetDistance,
      ':shots': shots,
      ':distances': distances,
      ':isCompleted': isCompleted,
      ':updatedAt': timestamp,
    },
    ReturnValues: 'ALL_NEW',
  };

  const result = await db.update(updateParams).promise();
  return result.Attributes;
};

exports.handler = async (event) => {
  try {
    await updateHighScore(event.arguments);
    await updateGameSession(event.arguments);
    return { id: event.arguments.id };
  } catch (error) {
    console.error('Lambda error:', error);
    throw new Error(error.message);
  }
};
