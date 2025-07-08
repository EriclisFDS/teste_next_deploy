/* Amplify Params - DO NOT EDIT
	API_TEETIMETRAINER_COURSESESSIONTABLE_ARN
	API_TEETIMETRAINER_COURSESESSIONTABLE_NAME
	API_TEETIMETRAINER_GRAPHQLAPIIDOUTPUT
	API_TEETIMETRAINER_HOLETABLE_ARN
	API_TEETIMETRAINER_HOLETABLE_NAME
	API_TEETIMETRAINER_SESSIONHOLETABLE_ARN
	API_TEETIMETRAINER_SESSIONHOLETABLE_NAME
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
  API_TEETIMETRAINER_HOLETABLE_NAME,
  API_TEETIMETRAINER_SESSIONHOLETABLE_NAME,
  API_TEETIMETRAINER_COURSESESSIONTABLE_NAME,
} = process.env;

const getHolesIds = async (courseId) => {
  const params = {
    TableName: API_TEETIMETRAINER_HOLETABLE_NAME,
    IndexName: 'byCourseHole',
    KeyConditionExpression: 'courseId = :courseId',
    ExpressionAttributeValues: {
      ':courseId': courseId,
    },
  };

  const holes = await db.query(params).promise();

  return holes.Items.map((drill) => drill.id);
};

const createCourseSession = async (userId, courseId, playingCareer) => {
  const params = {
    TableName: API_TEETIMETRAINER_COURSESESSIONTABLE_NAME,
    Item: {
      id: uuidv4(),
      owner: userId,
      userId,
      courseId,
      playingCareer,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __typename: 'CourseSession',
    },
  };

  await db.put(params).promise();

  return params.Item.id;
};

const createSessionHoles = async (userId, courseSessionId, holesIds) => {
  const sessionHoles = holesIds.map((holeId) => ({
    PutRequest: {
      Item: {
        id: uuidv4(),
        courseSessionId,
        holeId,
        note: '',
        isCompleted: false,
        owner: userId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __typename: 'SessionHole',
      },
    },
  }));

  const params = {
    RequestItems: {
      [API_TEETIMETRAINER_SESSIONHOLETABLE_NAME]: sessionHoles,
    },
  };

  await db.batchWrite(params).promise();

  console.log(
    `Session holes: ${JSON.stringify({
      items: sessionHoles.map((hole) => hole.PutRequest.Item),
      nextToken: null,
    })}`
  );

  return {
    items: sessionHoles.map((hole) => hole.PutRequest.Item),
    nextToken: null,
  };
};

const deleteCourseSession = async (sessionId) => {
  const params = {
    TableName: API_TEETIMETRAINER_COURSESESSIONTABLE_NAME,
    Key: {
      id: sessionId,
    },
  };

  await db.delete(params).promise();
};

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  if (!event.arguments.courseId || !event.arguments.userId) {
    throw new Error('Missing arguments');
  }

  const holesIds = await getHolesIds(event.arguments.courseId);

  const courseSessionId = await createCourseSession(
    event.arguments.userId,
    event.arguments.courseId,
    event.arguments.playingCareer || false
  );

  try {
    const sessionHoles = await createSessionHoles(
      event.arguments.userId,
      courseSessionId,
      holesIds
    );
    return {
      id: courseSessionId,
      owner: event.arguments.userId,
      userId: event.arguments.userId,
      courseId: event.arguments.courseId,
      sessionHoles,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __typename: 'CourseSession',
    };
  } catch (error) {
    await deleteCourseSession(courseSessionId);
    throw error;
  }
};
