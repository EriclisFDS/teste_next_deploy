/* Amplify Params - DO NOT EDIT
	API_TEETIMETRAINER_GRAPHQLAPIIDOUTPUT
	API_TEETIMETRAINER_SESSIONDRILLTABLE_ARN
	API_TEETIMETRAINER_SESSIONDRILLTABLE_NAME
	API_TEETIMETRAINER_SESSIONTABLE_ARN
	API_TEETIMETRAINER_SESSIONTABLE_NAME
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
  API_TEETIMETRAINER_SESSIONDRILLTABLE_NAME,
  API_TEETIMETRAINER_SESSIONTABLE_NAME,
} = process.env;

const getSession = async (sessionId) => {
  const params = {
    TableName: API_TEETIMETRAINER_SESSIONTABLE_NAME,
    Key: {
      id: sessionId,
    },
  };

  const result = await db.get(params).promise();

  return result.Item;
};

const getSessionDrillsIds = async (sessionId) => {
  const params = {
    TableName: API_TEETIMETRAINER_SESSIONDRILLTABLE_NAME,
    FilterExpression: 'sessionId = :sessionId',
    ExpressionAttributeValues: {
      ':sessionId': sessionId,
    },
  };

  const result = await db.scan(params).promise();

  return result.Items.map((item) => item.drillId);
};

const createSession = async (userId, parentId, name, duration, mode) => {
  const params = {
    TableName: API_TEETIMETRAINER_SESSIONTABLE_NAME,
    Item: {
      id: uuidv4(),
      owner: userId,
      userId,
      name,
      parentId,
      duration,
      mode,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __typename: 'Session',
    },
  };

  await db.put(params).promise();

  return params.Item.id;
};

const createSessionDrills = async (userId, sessionId, drillsIds) => {
  const sessionDrills = drillsIds.map((drillId) => ({
    PutRequest: {
      Item: {
        id: uuidv4(),
        sessionId,
        drillId,
        isCompleted: false,
        owner: userId,
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

  const session = await getSession(event.arguments.sessionId);

  const sessionId = await createSession(
    event.arguments.userId,
    event.arguments.sessionId,
    session.name || null,
    session.duration || null,
    session.mode || null
  );

  console.log(`Session ID: ${sessionId}`);

  try {
    const drillsIds = await getSessionDrillsIds(event.arguments.sessionId);
    console.log(`Drills IDs: ${JSON.stringify(drillsIds)}`);

    const sessionDrills = await createSessionDrills(
      event.arguments.userId,
      sessionId,
      drillsIds
    );

    console.log(`Session Drills: ${JSON.stringify(sessionDrills)}`);

    return {
      id: sessionId,
      owner: event.arguments.userId,
      userId: event.arguments.userId,
      name: session.name || null,
      sessionDrills,
      parentId: event.arguments.sessionId,
      duration: session.duration || null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __typename: 'Session',
    };
  } catch (error) {
    await deleteSession(sessionId);
    console.error(error);
    throw error;
  }
};
