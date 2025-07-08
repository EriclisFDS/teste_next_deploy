/* Amplify Params - DO NOT EDIT
	API_TEETIMETRAINER_GRAPHQLAPIIDOUTPUT
	API_TEETIMETRAINER_USERSKILLTABLE_ARN
	API_TEETIMETRAINER_USERSKILLTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const { Items } = await db
    .scan({
      TableName: process.env.API_TEETIMETRAINER_USERSKILLTABLE_NAME,
    })
    .promise();

  console.log(Items);

  await Promise.all(
    Items.map(async (item) => {
      await db
        .update({
          TableName: process.env.API_TEETIMETRAINER_USERSKILLTABLE_NAME,
          Key: {
            id: item.id,
          },
          UpdateExpression: 'set skill = :skill',
          ExpressionAttributeValues: {
            ':skill': 0,
          },
        })
        .promise();
    })
  );

  console.log('Updated all users streaks to 0');

  return {
    statusCode: 200,
    body: JSON.stringify('Updated all users streaks to 0'),
  };
};
