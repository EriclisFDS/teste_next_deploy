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
	API_TEETIMETRAINER_USERDRILLSTABLE_ARN
	API_TEETIMETRAINER_USERDRILLSTABLE_NAME
	API_TEETIMETRAINER_USERSKILLTABLE_ARN
	API_TEETIMETRAINER_USERSKILLTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const axios = require('axios');
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

const {
  TINYBIRD_TOKEN,
  API_TEETIMETRAINER_SKILLTABLE_NAME,
  API_TEETIMETRAINER_USERSKILLTABLE_NAME,
  API_TEETIMETRAINER_DRILLTABLE_NAME,
  API_TEETIMETRAINER_USERDRILLSTABLE_NAME,
  AMPLITUDE_API_KEY,
} = process.env;

const track = (name, properties, userId) => {
  return axios.post(
    'https://api2.amplitude.com/2/httpapi',
    {
      api_key: AMPLITUDE_API_KEY,
      events: [
        {
          user_id: userId,
          event_type: name,
          event_properties: properties,
        },
      ],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
    }
  );
};

const tinybird = axios.create({
  baseURL: 'https://api.us-east.aws.tinybird.co/v0',
  headers: {
    Authorization: `Bearer ${TINYBIRD_TOKEN}`,
  },
});

const importSession = async (session) => {
  try {
    tinybird.post('/events?name=sessions', session);
  } catch (e) {
    console.error('Error importing session to Tinybird: ', e);
  }
};

const importSessionDrills = async (results) => {
  delete results.playingCareer;
  delete results.mode;
  results.results = results.results.map(({ coordinates, level, isMiss }) => ({
    coordinates,
    level,
    isMiss,
  }));

  try {
    await tinybird.post('/events?name=results', results);
  } catch (e) {
    console.error('Error importing results to Tinybird: ', e);
  }
};

const importUser = (user) => tinybird.post('/events?name=users', user);

const updateUserStats = async (userDrill) => {
  try {
    console.log('UserDrill: ', userDrill);

    const { Item: drill } = await db
      .get({
        TableName: API_TEETIMETRAINER_DRILLTABLE_NAME,
        Key: {
          id: userDrill.drillId,
        },
        ProjectionExpression: 'skillId',
      })
      .promise();

    console.log('Drill: ', drill);

    const { Items: drills } = await db
      .scan({
        TableName: API_TEETIMETRAINER_DRILLTABLE_NAME,
        FilterExpression:
          'skillId = :skillId AND (attribute_not_exists(#hidden) OR #hidden = :hidden)',
        ExpressionAttributeNames: {
          '#hidden': 'hidden',
        },
        ExpressionAttributeValues: {
          ':skillId': drill.skillId,
          ':hidden': false,
        },
      })
      .promise();
    console.log('Drills: ', drills);

    const drillIds = drills.map((drill) => drill.id);
    console.log('drillIds: ', drillIds);

    const filterExpressions = drillIds
      .map((_, index) => `contains(drillId, :drillId${index})`)
      .join(' OR ');
    const expressionAttributeValues = drillIds.reduce(
      (acc, drillId, index) => {
        acc[`:drillId${index}`] = drillId;
        return acc;
      },
      { ':userId': userDrill.userId }
    );

    const { Items: userDrills } = await db
      .scan({
        TableName: API_TEETIMETRAINER_USERDRILLSTABLE_NAME,
        FilterExpression: `userId = :userId AND (${filterExpressions})`,
        ExpressionAttributeValues: expressionAttributeValues,
        ProjectionExpression: 'currentLevel',
      })
      .promise();

    console.log('UserDrills:', userDrills);

    const meanLevel = userDrills.reduce(
      (acc, userDrill) => acc + (userDrill.currentLevel || 0),
      0
    );

    const level = Math.round(meanLevel / userDrills.length);

    console.log('Level: ', level);

    return db
      .update({
        TableName: API_TEETIMETRAINER_USERSKILLTABLE_NAME,
        Key: {
          id: `${drill.skillId}-${userDrill.userId}`,
        },
        UpdateExpression:
          'set #level = :level, userId = :userId, skillId = :skillId, #owner = :userId',
        ExpressionAttributeNames: {
          '#level': 'level',
          '#owner': 'owner',
        },
        ExpressionAttributeValues: {
          ':level': level,
          ':userId': userDrill.userId,
          ':skillId': drill.skillId,
        },
        ReturnValues: 'ALL_NEW',
      })
      .promise();
  } catch (error) {
    console.error('Error updating user stats: ', error);
  }
};

const handleSession = async (session) => {
  console.log('Session: ', session);

  return importSession(session);
};

const updateZonesAndStreak = async (sessionDrill) => {
  try {
    if (!sessionDrill.playingCareer) {
      return;
    }

    const drill = await db
      .get({
        TableName: API_TEETIMETRAINER_DRILLTABLE_NAME,
        Key: {
          id: sessionDrill.drillId,
        },
        ProjectionExpression: 'skillId, trackingName',
      })
      .promise();
    console.log('Drill: ', drill.Item);

    const skill = await db
      .get({
        TableName: API_TEETIMETRAINER_SKILLTABLE_NAME,
        Key: {
          id: drill.Item?.skillId,
        },
        ProjectionExpression: 'trackingName',
      })
      .promise();
    console.log('Skill: ', skill.Item);

    const userSkill = await db
      .get({
        TableName: API_TEETIMETRAINER_USERSKILLTABLE_NAME,
        Key: {
          id: `${drill.Item?.skillId}-${sessionDrill.userId}`,
        },
      })
      .promise();
    console.log('userSkill: ', userSkill);

    const zoneCounts = sessionDrill.results.reduce(
      (acc, result) => {
        if (result.zone === 'GREEN') acc.greenZone += 1;
        if (result.zone === 'RED') acc.redZone += 1;
        if (result.zone === 'YELLOW') acc.yellowZone += 1;
        if (result.zone === 'HOLE') acc.holeZone += 1;
        if (result.zone === 'OUT') acc.outZone += 1;
        if (result.zone === 'LEFT_YELLOW') acc.leftYellowZone += 1;
        if (result.zone === 'RIGHT_YELLOW') acc.rightYellowZone += 1;
        if (result.zone === 'LEFT_RED') acc.leftRedZone += 1;
        if (result.zone === 'RIGHT_RED') acc.rightRedZone += 1;
        return acc;
      },
      {
        greenZone: userSkill?.Item?.greenZone || 0,
        redZone: userSkill?.Item?.redZone || 0,
        yellowZone: userSkill?.Item?.yellowZone || 0,
        holeZone: userSkill?.Item?.holeZone || 0,
        outZone: userSkill?.Item?.outZone || 0,
        leftYellowZone: userSkill?.Item?.leftYellowZone || 0,
        rightYellowZone: userSkill?.Item?.rightYellowZone || 0,
        leftRedZone: userSkill?.Item?.leftRedZone || 0,
        rightRedZone: userSkill?.Item?.rightRedZone || 0,
      }
    );
    console.log('ZoneCounts: ', zoneCounts);

    const streak =
      sessionDrill.mode === 'CHALLENGE'
        ? 0
        : (userSkill?.Item?.streak || 0) + 1;

    if (streak === 3) {
      await track(
        'challengeAvailable',
        {
          gameMode: 'CAREER',
          sessionMode: 'PRACTICE',
          skill: skill.Item?.trackingName,
          drill: drill.Item?.trackingName,
        },
        sessionDrill.userId
      );
    }

    await db
      .update({
        TableName: API_TEETIMETRAINER_USERSKILLTABLE_NAME,
        Key: {
          id: `${drill.Item.skillId}-${sessionDrill.userId}`,
        },
        UpdateExpression:
          'set streak = :streak, greenZone = :greenZone, redZone = :redZone, yellowZone = :yellowZone, holeZone = :holeZone, outZone = :outZone, leftYellowZone = :leftYellowZone, rightYellowZone = :rightYellowZone, leftRedZone = :leftRedZone, rightRedZone = :rightRedZone, userId = :userId, skillId = :skillId, #owner = :userId',
        ExpressionAttributeNames: {
          '#owner': 'owner',
        },
        ExpressionAttributeValues: {
          ':streak': streak,
          ':greenZone': zoneCounts.greenZone,
          ':redZone': zoneCounts.redZone,
          ':yellowZone': zoneCounts.yellowZone,
          ':outZone': zoneCounts.outZone,
          ':holeZone': zoneCounts.holeZone,
          ':leftYellowZone': zoneCounts.leftYellowZone,
          ':rightYellowZone': zoneCounts.rightYellowZone,
          ':leftRedZone': zoneCounts.leftRedZone,
          ':rightRedZone': zoneCounts.rightRedZone,
          ':userId': sessionDrill.userId,
          ':skillId': drill.Item.skillId,
        },
      })
      .promise();
  } catch (error) {
    console.error('Error updating zones and streak: ', error);
  }
};

const handleSessionDrills = async (sessionDrill) => {
  console.log('SessionDrill: ', sessionDrill);

  await updateZonesAndStreak(sessionDrill);
  return importSessionDrills(sessionDrill);
};

const handleGame = async (userId, gameType) => {
  try {
    console.log('Game: ', userId, gameType);

    const { Items } = await db
      .scan({
        TableName: API_TEETIMETRAINER_SKILLTABLE_NAME,
      })
      .promise();

    console.log('Skills: ', Items);

    const skillsToUpdate = Items.filter(
      (skill) => skill.games && skill.games.includes(gameType)
    );

    console.log('SkillsToUpdate: ', skillsToUpdate);

    await Promise.all(
      skillsToUpdate.map(async (skill) => {
        try {
          const userSkill = await db
            .get({
              TableName: API_TEETIMETRAINER_USERSKILLTABLE_NAME,
              Key: {
                id: `${skill.id}-${userId}`,
              },
            })
            .promise();
          console.log('UserSkill: ', userSkill);
          console.log('UserSkill not created: ', !userSkill.Item);

          if (!userSkill.Item) {
            return db
              .put({
                TableName: API_TEETIMETRAINER_USERSKILLTABLE_NAME,
                Item: {
                  id: `${skill.id}-${userId}`,
                  skillId: skill.id,
                  userId: userId,
                  streak: 1,
                },
              })
              .promise();
          }

          const streak = userSkill.Item.streak + 1;

          if (streak === 3) {
            const game =
              gameType === 'PLAYACOURSE' ? 'PLAY A COURSE' : gameType;

            await track(
              'challengeAvailable',
              {
                gameMode: 'CAREER',
                game: game,
                skill: skill.name,
              },
              userId
            );
          }

          return db
            .update({
              TableName: API_TEETIMETRAINER_USERSKILLTABLE_NAME,
              Key: {
                id: `${skill.id}-${userId}`,
              },
              UpdateExpression: 'set streak = :streak',
              ExpressionAttributeValues: {
                ':streak': streak,
              },
            })
            .promise();
        } catch (error) {
          console.error('Error updating streak: ', error);
        }
      })
    );
  } catch (error) {
    console.error('Error handle game: ', error);
  }
};

/**
 * @type {import("@types/aws-lambda").APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);

    if (record.dynamodb.NewImage && record.dynamodb.NewImage.__typename) {
      if (
        record.eventName === 'INSERT' &&
        record.dynamodb.NewImage.__typename.S === 'Session'
      ) {
        const session = {
          id: record.dynamodb.NewImage.id.S,
          userId: record.dynamodb.NewImage.userId.S,
          mode: record.dynamodb.NewImage.mode.S,
          createdAt: record.dynamodb.NewImage.createdAt.S,
        };

        await handleSession(session);
      }

      if (
        record.eventName === 'MODIFY' &&
        record.dynamodb.NewImage.__typename.S === 'SessionDrill' &&
        record.dynamodb.NewImage.isCompleted.BOOL &&
        record.dynamodb.NewImage.results.L.length
      ) {
        const sessionDrill = {
          id: record.dynamodb.NewImage.id.S,
          createdAt: record.dynamodb.NewImage.createdAt.S,
          userId: record.dynamodb.NewImage.owner.S,
          sessionId: record.dynamodb.NewImage.sessionId.S,
          drillId: record.dynamodb.NewImage.drillId.S,
          results: record.dynamodb.NewImage.results.L.map((result) => ({
            coordinates: result.M.coordinates.L[0]
              ? Number(result.M.coordinates.L[0].N)
              : 0,
            level: Number(result.M.level.N),
            zone: result.M.zone.S,
            isMiss: Number(result.M.isMiss.BOOL),
          })),
          playingCareer: record.dynamodb.NewImage.playingCareer.BOOL,
          mode: record.dynamodb.NewImage.mode.S,
        };

        await handleSessionDrills(sessionDrill);
      }
    }

    if (
      record.eventName === 'MODIFY' &&
      record.dynamodb.NewImage.__typename.S === 'UserDrills'
    ) {
      await updateUserStats({
        userId: record.dynamodb.NewImage.userId.S,
        drillId: record.dynamodb.NewImage.drillId.S,
      });
    }

    if (
      record.eventName === 'MODIFY' &&
      record.dynamodb.NewImage.__typename.S === 'BullseyeSession' &&
      record.dynamodb.NewImage.playingCareer.BOOL
    ) {
      await handleGame(record.dynamodb.NewImage.userId.S, 'BULLSEYE');
    }

    if (
      record.eventName === 'MODIFY' &&
      record.dynamodb.NewImage.__typename.S === 'CourseSession' &&
      record.dynamodb.NewImage.playingCareer.BOOL
    ) {
      await handleGame(record.dynamodb.NewImage.userId.S, 'PLAYACOURSE');
    }

    if (
      record.eventName === 'MODIFY' &&
      record.dynamodb.NewImage &&
      record.dynamodb.NewImage.evaluation &&
      record.dynamodb.NewImage.evaluation.L.length
    ) {
      const user = {
        id: record.dynamodb.NewImage.id.S,
        createdAt: record.dynamodb.NewImage.createdAt.S,
        handicap: record.dynamodb.NewImage.handicap.S,
        evaluation: record.dynamodb.NewImage.evaluation.L.map((evaluation) => ({
          name: evaluation.M.name.S,
          score: Number(evaluation.M.score.N),
        })),
      };

      console.log('User: ', user);

      try {
        await importUser(user);
      } catch (e) {
        console.error('Error importing user to Tinybird: ', e);
      }
    }
  }

  return Promise.resolve('Successfully processed DynamoDB record');
};
