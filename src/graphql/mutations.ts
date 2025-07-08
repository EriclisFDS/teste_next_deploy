/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const updateFeedback = /* GraphQL */ `mutation UpdateFeedback(
  $input: UpdateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  updateFeedback(input: $input, condition: $condition) {
    id
    score
    details
    screen
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    userFeedbacksId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeedbackMutationVariables,
  APITypes.UpdateFeedbackMutation
>;
export const deleteFeedback = /* GraphQL */ `mutation DeleteFeedback(
  $input: DeleteFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  deleteFeedback(input: $input, condition: $condition) {
    id
    score
    details
    screen
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    userFeedbacksId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeedbackMutationVariables,
  APITypes.DeleteFeedbackMutation
>;
export const updateVote = /* GraphQL */ `mutation UpdateVote(
  $input: UpdateVoteInput!
  $condition: ModelVoteConditionInput
) {
  updateVote(input: $input, condition: $condition) {
    id
    feature
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    userVoteId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateVoteMutationVariables,
  APITypes.UpdateVoteMutation
>;
export const deleteVote = /* GraphQL */ `mutation DeleteVote(
  $input: DeleteVoteInput!
  $condition: ModelVoteConditionInput
) {
  deleteVote(input: $input, condition: $condition) {
    id
    feature
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    userVoteId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteVoteMutationVariables,
  APITypes.DeleteVoteMutation
>;
export const createSkill = /* GraphQL */ `mutation CreateSkill(
  $input: CreateSkillInput!
  $condition: ModelSkillConditionInput
) {
  createSkill(input: $input, condition: $condition) {
    id
    name
    trackingName
    description
    drills {
      nextToken
      __typename
    }
    userSkills {
      nextToken
      __typename
    }
    games
    challengeDrills {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSkillMutationVariables,
  APITypes.CreateSkillMutation
>;
export const updateSkill = /* GraphQL */ `mutation UpdateSkill(
  $input: UpdateSkillInput!
  $condition: ModelSkillConditionInput
) {
  updateSkill(input: $input, condition: $condition) {
    id
    name
    trackingName
    description
    drills {
      nextToken
      __typename
    }
    userSkills {
      nextToken
      __typename
    }
    games
    challengeDrills {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSkillMutationVariables,
  APITypes.UpdateSkillMutation
>;
export const deleteSkill = /* GraphQL */ `mutation DeleteSkill(
  $input: DeleteSkillInput!
  $condition: ModelSkillConditionInput
) {
  deleteSkill(input: $input, condition: $condition) {
    id
    name
    trackingName
    description
    drills {
      nextToken
      __typename
    }
    userSkills {
      nextToken
      __typename
    }
    games
    challengeDrills {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSkillMutationVariables,
  APITypes.DeleteSkillMutation
>;
export const createUserSkill = /* GraphQL */ `mutation CreateUserSkill(
  $input: CreateUserSkillInput!
  $condition: ModelUserSkillConditionInput
) {
  createUserSkill(input: $input, condition: $condition) {
    id
    level
    greenZone
    redZone
    yellowZone
    holeZone
    outZone
    leftYellowZone
    rightYellowZone
    leftRedZone
    rightRedZone
    streak
    skillId
    skill {
      id
      name
      trackingName
      description
      games
      createdAt
      updatedAt
      __typename
    }
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    userUserSkillsId
    skillUserSkillsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserSkillMutationVariables,
  APITypes.CreateUserSkillMutation
>;
export const deleteUserSkill = /* GraphQL */ `mutation DeleteUserSkill(
  $input: DeleteUserSkillInput!
  $condition: ModelUserSkillConditionInput
) {
  deleteUserSkill(input: $input, condition: $condition) {
    id
    level
    greenZone
    redZone
    yellowZone
    holeZone
    outZone
    leftYellowZone
    rightYellowZone
    leftRedZone
    rightRedZone
    streak
    skillId
    skill {
      id
      name
      trackingName
      description
      games
      createdAt
      updatedAt
      __typename
    }
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    userUserSkillsId
    skillUserSkillsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserSkillMutationVariables,
  APITypes.DeleteUserSkillMutation
>;
export const createDrill = /* GraphQL */ `mutation CreateDrill(
  $input: CreateDrillInput!
  $condition: ModelDrillConditionInput
) {
  createDrill(input: $input, condition: $condition) {
    id
    name
    trackingName
    description
    goal
    videoId
    duration
    skillId
    skill {
      id
      name
      trackingName
      description
      games
      createdAt
      updatedAt
      __typename
    }
    sessionDrills {
      nextToken
      __typename
    }
    hidden
    tries
    level
    club
    title
    challenge
    users {
      nextToken
      __typename
    }
    isDynamic
    thirdOption
    dynamicDifficulties {
      beginner
      medium
      advanced
      pro
      __typename
    }
    challengeDrills {
      nextToken
      __typename
    }
    type
    coachNotes {
      nextToken
      __typename
    }
    coachSessionDrills {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    skillDrillsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDrillMutationVariables,
  APITypes.CreateDrillMutation
>;
export const updateDrill = /* GraphQL */ `mutation UpdateDrill(
  $input: UpdateDrillInput!
  $condition: ModelDrillConditionInput
) {
  updateDrill(input: $input, condition: $condition) {
    id
    name
    trackingName
    description
    goal
    videoId
    duration
    skillId
    skill {
      id
      name
      trackingName
      description
      games
      createdAt
      updatedAt
      __typename
    }
    sessionDrills {
      nextToken
      __typename
    }
    hidden
    tries
    level
    club
    title
    challenge
    users {
      nextToken
      __typename
    }
    isDynamic
    thirdOption
    dynamicDifficulties {
      beginner
      medium
      advanced
      pro
      __typename
    }
    challengeDrills {
      nextToken
      __typename
    }
    type
    coachNotes {
      nextToken
      __typename
    }
    coachSessionDrills {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    skillDrillsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDrillMutationVariables,
  APITypes.UpdateDrillMutation
>;
export const deleteDrill = /* GraphQL */ `mutation DeleteDrill(
  $input: DeleteDrillInput!
  $condition: ModelDrillConditionInput
) {
  deleteDrill(input: $input, condition: $condition) {
    id
    name
    trackingName
    description
    goal
    videoId
    duration
    skillId
    skill {
      id
      name
      trackingName
      description
      games
      createdAt
      updatedAt
      __typename
    }
    sessionDrills {
      nextToken
      __typename
    }
    hidden
    tries
    level
    club
    title
    challenge
    users {
      nextToken
      __typename
    }
    isDynamic
    thirdOption
    dynamicDifficulties {
      beginner
      medium
      advanced
      pro
      __typename
    }
    challengeDrills {
      nextToken
      __typename
    }
    type
    coachNotes {
      nextToken
      __typename
    }
    coachSessionDrills {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    skillDrillsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDrillMutationVariables,
  APITypes.DeleteDrillMutation
>;
export const createCourse = /* GraphQL */ `mutation CreateCourse(
  $input: CreateCourseInput!
  $condition: ModelCourseConditionInput
) {
  createCourse(input: $input, condition: $condition) {
    id
    name
    description
    holes {
      nextToken
      __typename
    }
    courseSessions {
      nextToken
      __typename
    }
    image {
      bucket
      key
      region
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCourseMutationVariables,
  APITypes.CreateCourseMutation
>;
export const updateCourse = /* GraphQL */ `mutation UpdateCourse(
  $input: UpdateCourseInput!
  $condition: ModelCourseConditionInput
) {
  updateCourse(input: $input, condition: $condition) {
    id
    name
    description
    holes {
      nextToken
      __typename
    }
    courseSessions {
      nextToken
      __typename
    }
    image {
      bucket
      key
      region
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCourseMutationVariables,
  APITypes.UpdateCourseMutation
>;
export const deleteCourse = /* GraphQL */ `mutation DeleteCourse(
  $input: DeleteCourseInput!
  $condition: ModelCourseConditionInput
) {
  deleteCourse(input: $input, condition: $condition) {
    id
    name
    description
    holes {
      nextToken
      __typename
    }
    courseSessions {
      nextToken
      __typename
    }
    image {
      bucket
      key
      region
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCourseMutationVariables,
  APITypes.DeleteCourseMutation
>;
export const createHole = /* GraphQL */ `mutation CreateHole(
  $input: CreateHoleInput!
  $condition: ModelHoleConditionInput
) {
  createHole(input: $input, condition: $condition) {
    id
    number
    par
    distance
    flagDistance
    courseId
    course {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    image {
      bucket
      key
      region
      __typename
    }
    coverImage {
      bucket
      key
      region
      __typename
    }
    sessionHoles {
      nextToken
      __typename
    }
    water
    bunker
    woods
    flag
    green
    createdAt
    updatedAt
    courseHolesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateHoleMutationVariables,
  APITypes.CreateHoleMutation
>;
export const updateHole = /* GraphQL */ `mutation UpdateHole(
  $input: UpdateHoleInput!
  $condition: ModelHoleConditionInput
) {
  updateHole(input: $input, condition: $condition) {
    id
    number
    par
    distance
    flagDistance
    courseId
    course {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    image {
      bucket
      key
      region
      __typename
    }
    coverImage {
      bucket
      key
      region
      __typename
    }
    sessionHoles {
      nextToken
      __typename
    }
    water
    bunker
    woods
    flag
    green
    createdAt
    updatedAt
    courseHolesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateHoleMutationVariables,
  APITypes.UpdateHoleMutation
>;
export const deleteHole = /* GraphQL */ `mutation DeleteHole(
  $input: DeleteHoleInput!
  $condition: ModelHoleConditionInput
) {
  deleteHole(input: $input, condition: $condition) {
    id
    number
    par
    distance
    flagDistance
    courseId
    course {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    image {
      bucket
      key
      region
      __typename
    }
    coverImage {
      bucket
      key
      region
      __typename
    }
    sessionHoles {
      nextToken
      __typename
    }
    water
    bunker
    woods
    flag
    green
    createdAt
    updatedAt
    courseHolesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteHoleMutationVariables,
  APITypes.DeleteHoleMutation
>;
export const createAppInfo = /* GraphQL */ `mutation CreateAppInfo(
  $input: CreateAppInfoInput!
  $condition: ModelAppInfoConditionInput
) {
  createAppInfo(input: $input, condition: $condition) {
    paywallVideoId
    env
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAppInfoMutationVariables,
  APITypes.CreateAppInfoMutation
>;
export const updateAppInfo = /* GraphQL */ `mutation UpdateAppInfo(
  $input: UpdateAppInfoInput!
  $condition: ModelAppInfoConditionInput
) {
  updateAppInfo(input: $input, condition: $condition) {
    paywallVideoId
    env
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAppInfoMutationVariables,
  APITypes.UpdateAppInfoMutation
>;
export const deleteAppInfo = /* GraphQL */ `mutation DeleteAppInfo(
  $input: DeleteAppInfoInput!
  $condition: ModelAppInfoConditionInput
) {
  deleteAppInfo(input: $input, condition: $condition) {
    paywallVideoId
    env
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAppInfoMutationVariables,
  APITypes.DeleteAppInfoMutation
>;
export const createArticle = /* GraphQL */ `mutation CreateArticle(
  $input: CreateArticleInput!
  $condition: ModelArticleConditionInput
) {
  createArticle(input: $input, condition: $condition) {
    videoId
    title
    text
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateArticleMutationVariables,
  APITypes.CreateArticleMutation
>;
export const updateArticle = /* GraphQL */ `mutation UpdateArticle(
  $input: UpdateArticleInput!
  $condition: ModelArticleConditionInput
) {
  updateArticle(input: $input, condition: $condition) {
    videoId
    title
    text
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateArticleMutationVariables,
  APITypes.UpdateArticleMutation
>;
export const deleteArticle = /* GraphQL */ `mutation DeleteArticle(
  $input: DeleteArticleInput!
  $condition: ModelArticleConditionInput
) {
  deleteArticle(input: $input, condition: $condition) {
    videoId
    title
    text
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteArticleMutationVariables,
  APITypes.DeleteArticleMutation
>;
export const createChallengeDrills = /* GraphQL */ `mutation CreateChallengeDrills(
  $input: CreateChallengeDrillsInput!
  $condition: ModelChallengeDrillsConditionInput
) {
  createChallengeDrills(input: $input, condition: $condition) {
    id
    hidden
    skillId
    skill {
      id
      name
      trackingName
      description
      games
      createdAt
      updatedAt
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    isFirstStep
    createdAt
    updatedAt
    skillChallengeDrillsId
    drillChallengeDrillsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChallengeDrillsMutationVariables,
  APITypes.CreateChallengeDrillsMutation
>;
export const updateChallengeDrills = /* GraphQL */ `mutation UpdateChallengeDrills(
  $input: UpdateChallengeDrillsInput!
  $condition: ModelChallengeDrillsConditionInput
) {
  updateChallengeDrills(input: $input, condition: $condition) {
    id
    hidden
    skillId
    skill {
      id
      name
      trackingName
      description
      games
      createdAt
      updatedAt
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    isFirstStep
    createdAt
    updatedAt
    skillChallengeDrillsId
    drillChallengeDrillsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChallengeDrillsMutationVariables,
  APITypes.UpdateChallengeDrillsMutation
>;
export const deleteChallengeDrills = /* GraphQL */ `mutation DeleteChallengeDrills(
  $input: DeleteChallengeDrillsInput!
  $condition: ModelChallengeDrillsConditionInput
) {
  deleteChallengeDrills(input: $input, condition: $condition) {
    id
    hidden
    skillId
    skill {
      id
      name
      trackingName
      description
      games
      createdAt
      updatedAt
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    isFirstStep
    createdAt
    updatedAt
    skillChallengeDrillsId
    drillChallengeDrillsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChallengeDrillsMutationVariables,
  APITypes.DeleteChallengeDrillsMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    username
    gender
    age
    handicap
    objectives
    evaluation {
      name
      score
      __typename
    }
    mySessions {
      nextToken
      __typename
    }
    myDrills {
      nextToken
      __typename
    }
    featureFlags {
      name
      value
      __typename
    }
    feedbacks {
      nextToken
      __typename
    }
    userSkills {
      nextToken
      __typename
    }
    vote {
      nextToken
      __typename
    }
    courseSessions {
      nextToken
      __typename
    }
    bullseyeSessions {
      nextToken
      __typename
    }
    bullseye {
      nextToken
      __typename
    }
    targetSets {
      nextToken
      __typename
    }
    gridGameSessions {
      nextToken
      __typename
    }
    gridGameHighScore {
      nextToken
      __typename
    }
    deleted
    coachUserId
    myCoach {
      id
      userId
      coachId
      status
      createdAt
      updatedAt
      coachStudentsId
      owner
      __typename
    }
    myCoachSessions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    username
    gender
    age
    handicap
    objectives
    evaluation {
      name
      score
      __typename
    }
    mySessions {
      nextToken
      __typename
    }
    myDrills {
      nextToken
      __typename
    }
    featureFlags {
      name
      value
      __typename
    }
    feedbacks {
      nextToken
      __typename
    }
    userSkills {
      nextToken
      __typename
    }
    vote {
      nextToken
      __typename
    }
    courseSessions {
      nextToken
      __typename
    }
    bullseyeSessions {
      nextToken
      __typename
    }
    bullseye {
      nextToken
      __typename
    }
    targetSets {
      nextToken
      __typename
    }
    gridGameSessions {
      nextToken
      __typename
    }
    gridGameHighScore {
      nextToken
      __typename
    }
    deleted
    coachUserId
    myCoach {
      id
      userId
      coachId
      status
      createdAt
      updatedAt
      coachStudentsId
      owner
      __typename
    }
    myCoachSessions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createUserDrills = /* GraphQL */ `mutation CreateUserDrills(
  $input: CreateUserDrillsInput!
  $condition: ModelUserDrillsConditionInput
) {
  createUserDrills(input: $input, condition: $condition) {
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    notes
    currentLevel
    lastNumberOfHits
    id
    createdAt
    updatedAt
    userMyDrillsId
    drillUsersId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserDrillsMutationVariables,
  APITypes.CreateUserDrillsMutation
>;
export const updateUserDrills = /* GraphQL */ `mutation UpdateUserDrills(
  $input: UpdateUserDrillsInput!
  $condition: ModelUserDrillsConditionInput
) {
  updateUserDrills(input: $input, condition: $condition) {
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    notes
    currentLevel
    lastNumberOfHits
    id
    createdAt
    updatedAt
    userMyDrillsId
    drillUsersId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserDrillsMutationVariables,
  APITypes.UpdateUserDrillsMutation
>;
export const deleteUserDrills = /* GraphQL */ `mutation DeleteUserDrills(
  $input: DeleteUserDrillsInput!
  $condition: ModelUserDrillsConditionInput
) {
  deleteUserDrills(input: $input, condition: $condition) {
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    notes
    currentLevel
    lastNumberOfHits
    id
    createdAt
    updatedAt
    userMyDrillsId
    drillUsersId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserDrillsMutationVariables,
  APITypes.DeleteUserDrillsMutation
>;
export const createFeedback = /* GraphQL */ `mutation CreateFeedback(
  $input: CreateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  createFeedback(input: $input, condition: $condition) {
    id
    score
    details
    screen
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    userFeedbacksId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeedbackMutationVariables,
  APITypes.CreateFeedbackMutation
>;
export const createVote = /* GraphQL */ `mutation CreateVote(
  $input: CreateVoteInput!
  $condition: ModelVoteConditionInput
) {
  createVote(input: $input, condition: $condition) {
    id
    feature
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    userVoteId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateVoteMutationVariables,
  APITypes.CreateVoteMutation
>;
export const updateUserSkill = /* GraphQL */ `mutation UpdateUserSkill(
  $input: UpdateUserSkillInput!
  $condition: ModelUserSkillConditionInput
) {
  updateUserSkill(input: $input, condition: $condition) {
    id
    level
    greenZone
    redZone
    yellowZone
    holeZone
    outZone
    leftYellowZone
    rightYellowZone
    leftRedZone
    rightRedZone
    streak
    skillId
    skill {
      id
      name
      trackingName
      description
      games
      createdAt
      updatedAt
      __typename
    }
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    userUserSkillsId
    skillUserSkillsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserSkillMutationVariables,
  APITypes.UpdateUserSkillMutation
>;
export const createSession = /* GraphQL */ `mutation CreateSession(
  $input: CreateSessionInput!
  $condition: ModelSessionConditionInput
) {
  createSession(input: $input, condition: $condition) {
    id
    parentId
    name
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    sessionDrills {
      nextToken
      __typename
    }
    duration
    isCompleted
    saved
    mode
    scenario
    createdAt
    updatedAt
    userMySessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSessionMutationVariables,
  APITypes.CreateSessionMutation
>;
export const updateSession = /* GraphQL */ `mutation UpdateSession(
  $input: UpdateSessionInput!
  $condition: ModelSessionConditionInput
) {
  updateSession(input: $input, condition: $condition) {
    id
    parentId
    name
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    sessionDrills {
      nextToken
      __typename
    }
    duration
    isCompleted
    saved
    mode
    scenario
    createdAt
    updatedAt
    userMySessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSessionMutationVariables,
  APITypes.UpdateSessionMutation
>;
export const deleteSession = /* GraphQL */ `mutation DeleteSession(
  $input: DeleteSessionInput!
  $condition: ModelSessionConditionInput
) {
  deleteSession(input: $input, condition: $condition) {
    id
    parentId
    name
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    sessionDrills {
      nextToken
      __typename
    }
    duration
    isCompleted
    saved
    mode
    scenario
    createdAt
    updatedAt
    userMySessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSessionMutationVariables,
  APITypes.DeleteSessionMutation
>;
export const createSessionDrill = /* GraphQL */ `mutation CreateSessionDrill(
  $input: CreateSessionDrillInput!
  $condition: ModelSessionDrillConditionInput
) {
  createSessionDrill(input: $input, condition: $condition) {
    id
    isCompleted
    sessionId
    session {
      id
      parentId
      name
      userId
      duration
      isCompleted
      saved
      mode
      scenario
      createdAt
      updatedAt
      userMySessionsId
      owner
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    results {
      coordinates
      level
      zone
      isMiss
      __typename
    }
    mode
    playingCareer
    createdAt
    updatedAt
    drillSessionDrillsId
    sessionSessionDrillsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSessionDrillMutationVariables,
  APITypes.CreateSessionDrillMutation
>;
export const updateSessionDrill = /* GraphQL */ `mutation UpdateSessionDrill(
  $input: UpdateSessionDrillInput!
  $condition: ModelSessionDrillConditionInput
) {
  updateSessionDrill(input: $input, condition: $condition) {
    id
    isCompleted
    sessionId
    session {
      id
      parentId
      name
      userId
      duration
      isCompleted
      saved
      mode
      scenario
      createdAt
      updatedAt
      userMySessionsId
      owner
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    results {
      coordinates
      level
      zone
      isMiss
      __typename
    }
    mode
    playingCareer
    createdAt
    updatedAt
    drillSessionDrillsId
    sessionSessionDrillsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSessionDrillMutationVariables,
  APITypes.UpdateSessionDrillMutation
>;
export const deleteSessionDrill = /* GraphQL */ `mutation DeleteSessionDrill(
  $input: DeleteSessionDrillInput!
  $condition: ModelSessionDrillConditionInput
) {
  deleteSessionDrill(input: $input, condition: $condition) {
    id
    isCompleted
    sessionId
    session {
      id
      parentId
      name
      userId
      duration
      isCompleted
      saved
      mode
      scenario
      createdAt
      updatedAt
      userMySessionsId
      owner
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    results {
      coordinates
      level
      zone
      isMiss
      __typename
    }
    mode
    playingCareer
    createdAt
    updatedAt
    drillSessionDrillsId
    sessionSessionDrillsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSessionDrillMutationVariables,
  APITypes.DeleteSessionDrillMutation
>;
export const updateCourseSession = /* GraphQL */ `mutation UpdateCourseSession(
  $input: UpdateCourseSessionInput!
  $condition: ModelCourseSessionConditionInput
) {
  updateCourseSession(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    sessionHoles {
      nextToken
      __typename
    }
    isCompleted
    courseId
    course {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    playingCareer
    createdAt
    updatedAt
    userCourseSessionsId
    courseCourseSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCourseSessionMutationVariables,
  APITypes.UpdateCourseSessionMutation
>;
export const deleteCourseSession = /* GraphQL */ `mutation DeleteCourseSession(
  $input: DeleteCourseSessionInput!
  $condition: ModelCourseSessionConditionInput
) {
  deleteCourseSession(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    sessionHoles {
      nextToken
      __typename
    }
    isCompleted
    courseId
    course {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    playingCareer
    createdAt
    updatedAt
    userCourseSessionsId
    courseCourseSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCourseSessionMutationVariables,
  APITypes.DeleteCourseSessionMutation
>;
export const createSessionHole = /* GraphQL */ `mutation CreateSessionHole(
  $input: CreateSessionHoleInput!
  $condition: ModelSessionHoleConditionInput
) {
  createSessionHole(input: $input, condition: $condition) {
    id
    isCompleted
    courseSessionId
    courseSession {
      id
      userId
      isCompleted
      courseId
      playingCareer
      createdAt
      updatedAt
      userCourseSessionsId
      courseCourseSessionsId
      owner
      __typename
    }
    holeId
    hole {
      id
      number
      par
      distance
      flagDistance
      courseId
      water
      bunker
      woods
      flag
      green
      createdAt
      updatedAt
      courseHolesId
      __typename
    }
    results {
      coordinates
      level
      zone
      isMiss
      __typename
    }
    createdAt
    updatedAt
    holeSessionHolesId
    courseSessionSessionHolesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSessionHoleMutationVariables,
  APITypes.CreateSessionHoleMutation
>;
export const updateSessionHole = /* GraphQL */ `mutation UpdateSessionHole(
  $input: UpdateSessionHoleInput!
  $condition: ModelSessionHoleConditionInput
) {
  updateSessionHole(input: $input, condition: $condition) {
    id
    isCompleted
    courseSessionId
    courseSession {
      id
      userId
      isCompleted
      courseId
      playingCareer
      createdAt
      updatedAt
      userCourseSessionsId
      courseCourseSessionsId
      owner
      __typename
    }
    holeId
    hole {
      id
      number
      par
      distance
      flagDistance
      courseId
      water
      bunker
      woods
      flag
      green
      createdAt
      updatedAt
      courseHolesId
      __typename
    }
    results {
      coordinates
      level
      zone
      isMiss
      __typename
    }
    createdAt
    updatedAt
    holeSessionHolesId
    courseSessionSessionHolesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSessionHoleMutationVariables,
  APITypes.UpdateSessionHoleMutation
>;
export const deleteSessionHole = /* GraphQL */ `mutation DeleteSessionHole(
  $input: DeleteSessionHoleInput!
  $condition: ModelSessionHoleConditionInput
) {
  deleteSessionHole(input: $input, condition: $condition) {
    id
    isCompleted
    courseSessionId
    courseSession {
      id
      userId
      isCompleted
      courseId
      playingCareer
      createdAt
      updatedAt
      userCourseSessionsId
      courseCourseSessionsId
      owner
      __typename
    }
    holeId
    hole {
      id
      number
      par
      distance
      flagDistance
      courseId
      water
      bunker
      woods
      flag
      green
      createdAt
      updatedAt
      courseHolesId
      __typename
    }
    results {
      coordinates
      level
      zone
      isMiss
      __typename
    }
    createdAt
    updatedAt
    holeSessionHolesId
    courseSessionSessionHolesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSessionHoleMutationVariables,
  APITypes.DeleteSessionHoleMutation
>;
export const createBullseyeSession = /* GraphQL */ `mutation CreateBullseyeSession(
  $input: CreateBullseyeSessionInput!
  $condition: ModelBullseyeSessionConditionInput
) {
  createBullseyeSession(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    targets {
      color
      distance
      __typename
    }
    isCompleted
    difficulty
    scenario
    results {
      distance
      __typename
    }
    playingCareer
    createdAt
    updatedAt
    userBullseyeSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBullseyeSessionMutationVariables,
  APITypes.CreateBullseyeSessionMutation
>;
export const updateBullseyeSession = /* GraphQL */ `mutation UpdateBullseyeSession(
  $input: UpdateBullseyeSessionInput!
  $condition: ModelBullseyeSessionConditionInput
) {
  updateBullseyeSession(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    targets {
      color
      distance
      __typename
    }
    isCompleted
    difficulty
    scenario
    results {
      distance
      __typename
    }
    playingCareer
    createdAt
    updatedAt
    userBullseyeSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBullseyeSessionMutationVariables,
  APITypes.UpdateBullseyeSessionMutation
>;
export const deleteBullseyeSession = /* GraphQL */ `mutation DeleteBullseyeSession(
  $input: DeleteBullseyeSessionInput!
  $condition: ModelBullseyeSessionConditionInput
) {
  deleteBullseyeSession(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    targets {
      color
      distance
      __typename
    }
    isCompleted
    difficulty
    scenario
    results {
      distance
      __typename
    }
    playingCareer
    createdAt
    updatedAt
    userBullseyeSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBullseyeSessionMutationVariables,
  APITypes.DeleteBullseyeSessionMutation
>;
export const createTargetSet = /* GraphQL */ `mutation CreateTargetSet(
  $input: CreateTargetSetInput!
  $condition: ModelTargetSetConditionInput
) {
  createTargetSet(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    targets {
      color
      distance
      __typename
    }
    name
    createdAt
    updatedAt
    userTargetSetsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTargetSetMutationVariables,
  APITypes.CreateTargetSetMutation
>;
export const updateTargetSet = /* GraphQL */ `mutation UpdateTargetSet(
  $input: UpdateTargetSetInput!
  $condition: ModelTargetSetConditionInput
) {
  updateTargetSet(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    targets {
      color
      distance
      __typename
    }
    name
    createdAt
    updatedAt
    userTargetSetsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTargetSetMutationVariables,
  APITypes.UpdateTargetSetMutation
>;
export const deleteTargetSet = /* GraphQL */ `mutation DeleteTargetSet(
  $input: DeleteTargetSetInput!
  $condition: ModelTargetSetConditionInput
) {
  deleteTargetSet(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    targets {
      color
      distance
      __typename
    }
    name
    createdAt
    updatedAt
    userTargetSetsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTargetSetMutationVariables,
  APITypes.DeleteTargetSetMutation
>;
export const createUserBullseye = /* GraphQL */ `mutation CreateUserBullseye(
  $input: CreateUserBullseyeInput!
  $condition: ModelUserBullseyeConditionInput
) {
  createUserBullseye(input: $input, condition: $condition) {
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    notes
    scores {
      difficulty
      score
      __typename
    }
    id
    createdAt
    updatedAt
    userBullseyeId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserBullseyeMutationVariables,
  APITypes.CreateUserBullseyeMutation
>;
export const updateUserBullseye = /* GraphQL */ `mutation UpdateUserBullseye(
  $input: UpdateUserBullseyeInput!
  $condition: ModelUserBullseyeConditionInput
) {
  updateUserBullseye(input: $input, condition: $condition) {
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    notes
    scores {
      difficulty
      score
      __typename
    }
    id
    createdAt
    updatedAt
    userBullseyeId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserBullseyeMutationVariables,
  APITypes.UpdateUserBullseyeMutation
>;
export const deleteUserBullseye = /* GraphQL */ `mutation DeleteUserBullseye(
  $input: DeleteUserBullseyeInput!
  $condition: ModelUserBullseyeConditionInput
) {
  deleteUserBullseye(input: $input, condition: $condition) {
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    notes
    scores {
      difficulty
      score
      __typename
    }
    id
    createdAt
    updatedAt
    userBullseyeId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserBullseyeMutationVariables,
  APITypes.DeleteUserBullseyeMutation
>;
export const createGridGameSession = /* GraphQL */ `mutation CreateGridGameSession(
  $input: CreateGridGameSessionInput!
  $condition: ModelGridGameSessionConditionInput
) {
  createGridGameSession(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    targetDistance
    shots
    distances {
      distance
      shots
      __typename
    }
    isCompleted
    createdAt
    updatedAt
    userGridGameSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGridGameSessionMutationVariables,
  APITypes.CreateGridGameSessionMutation
>;
export const updateGridGameSession = /* GraphQL */ `mutation UpdateGridGameSession(
  $input: UpdateGridGameSessionInput!
  $condition: ModelGridGameSessionConditionInput
) {
  updateGridGameSession(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    targetDistance
    shots
    distances {
      distance
      shots
      __typename
    }
    isCompleted
    createdAt
    updatedAt
    userGridGameSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGridGameSessionMutationVariables,
  APITypes.UpdateGridGameSessionMutation
>;
export const deleteGridGameSession = /* GraphQL */ `mutation DeleteGridGameSession(
  $input: DeleteGridGameSessionInput!
  $condition: ModelGridGameSessionConditionInput
) {
  deleteGridGameSession(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    targetDistance
    shots
    distances {
      distance
      shots
      __typename
    }
    isCompleted
    createdAt
    updatedAt
    userGridGameSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGridGameSessionMutationVariables,
  APITypes.DeleteGridGameSessionMutation
>;
export const createGridGameHighScore = /* GraphQL */ `mutation CreateGridGameHighScore(
  $input: CreateGridGameHighScoreInput!
  $condition: ModelGridGameHighScoreConditionInput
) {
  createGridGameHighScore(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    gridGameSessionId
    targetDistance
    shots
    createdAt
    updatedAt
    userGridGameHighScoreId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGridGameHighScoreMutationVariables,
  APITypes.CreateGridGameHighScoreMutation
>;
export const updateGridGameHighScore = /* GraphQL */ `mutation UpdateGridGameHighScore(
  $input: UpdateGridGameHighScoreInput!
  $condition: ModelGridGameHighScoreConditionInput
) {
  updateGridGameHighScore(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    gridGameSessionId
    targetDistance
    shots
    createdAt
    updatedAt
    userGridGameHighScoreId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGridGameHighScoreMutationVariables,
  APITypes.UpdateGridGameHighScoreMutation
>;
export const deleteGridGameHighScore = /* GraphQL */ `mutation DeleteGridGameHighScore(
  $input: DeleteGridGameHighScoreInput!
  $condition: ModelGridGameHighScoreConditionInput
) {
  deleteGridGameHighScore(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    gridGameSessionId
    targetDistance
    shots
    createdAt
    updatedAt
    userGridGameHighScoreId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGridGameHighScoreMutationVariables,
  APITypes.DeleteGridGameHighScoreMutation
>;
export const createCoach = /* GraphQL */ `mutation CreateCoach(
  $input: CreateCoachInput!
  $condition: ModelCoachConditionInput
) {
  createCoach(input: $input, condition: $condition) {
    id
    cognitoId
    profileImage {
      bucket
      key
      region
      __typename
    }
    name
    lastName
    phoneNumber
    email
    bio
    school
    zipCode
    address
    state
    city
    country
    students {
      nextToken
      __typename
    }
    coachDrillNotes {
      nextToken
      __typename
    }
    coachSessions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCoachMutationVariables,
  APITypes.CreateCoachMutation
>;
export const updateCoach = /* GraphQL */ `mutation UpdateCoach(
  $input: UpdateCoachInput!
  $condition: ModelCoachConditionInput
) {
  updateCoach(input: $input, condition: $condition) {
    id
    cognitoId
    profileImage {
      bucket
      key
      region
      __typename
    }
    name
    lastName
    phoneNumber
    email
    bio
    school
    zipCode
    address
    state
    city
    country
    students {
      nextToken
      __typename
    }
    coachDrillNotes {
      nextToken
      __typename
    }
    coachSessions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCoachMutationVariables,
  APITypes.UpdateCoachMutation
>;
export const deleteCoach = /* GraphQL */ `mutation DeleteCoach(
  $input: DeleteCoachInput!
  $condition: ModelCoachConditionInput
) {
  deleteCoach(input: $input, condition: $condition) {
    id
    cognitoId
    profileImage {
      bucket
      key
      region
      __typename
    }
    name
    lastName
    phoneNumber
    email
    bio
    school
    zipCode
    address
    state
    city
    country
    students {
      nextToken
      __typename
    }
    coachDrillNotes {
      nextToken
      __typename
    }
    coachSessions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCoachMutationVariables,
  APITypes.DeleteCoachMutation
>;
export const createCoachUser = /* GraphQL */ `mutation CreateCoachUser(
  $input: CreateCoachUserInput!
  $condition: ModelCoachUserConditionInput
) {
  createCoachUser(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    coachId
    coach {
      id
      cognitoId
      name
      lastName
      phoneNumber
      email
      bio
      school
      zipCode
      address
      state
      city
      country
      createdAt
      updatedAt
      owner
      __typename
    }
    notes {
      nextToken
      __typename
    }
    status
    createdAt
    updatedAt
    coachStudentsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCoachUserMutationVariables,
  APITypes.CreateCoachUserMutation
>;
export const updateCoachUser = /* GraphQL */ `mutation UpdateCoachUser(
  $input: UpdateCoachUserInput!
  $condition: ModelCoachUserConditionInput
) {
  updateCoachUser(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    coachId
    coach {
      id
      cognitoId
      name
      lastName
      phoneNumber
      email
      bio
      school
      zipCode
      address
      state
      city
      country
      createdAt
      updatedAt
      owner
      __typename
    }
    notes {
      nextToken
      __typename
    }
    status
    createdAt
    updatedAt
    coachStudentsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCoachUserMutationVariables,
  APITypes.UpdateCoachUserMutation
>;
export const deleteCoachUser = /* GraphQL */ `mutation DeleteCoachUser(
  $input: DeleteCoachUserInput!
  $condition: ModelCoachUserConditionInput
) {
  deleteCoachUser(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    coachId
    coach {
      id
      cognitoId
      name
      lastName
      phoneNumber
      email
      bio
      school
      zipCode
      address
      state
      city
      country
      createdAt
      updatedAt
      owner
      __typename
    }
    notes {
      nextToken
      __typename
    }
    status
    createdAt
    updatedAt
    coachStudentsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCoachUserMutationVariables,
  APITypes.DeleteCoachUserMutation
>;
export const createCoachSession = /* GraphQL */ `mutation CreateCoachSession(
  $input: CreateCoachSessionInput!
  $condition: ModelCoachSessionConditionInput
) {
  createCoachSession(input: $input, condition: $condition) {
    id
    coachId
    coach {
      id
      cognitoId
      name
      lastName
      phoneNumber
      email
      bio
      school
      zipCode
      address
      state
      city
      country
      createdAt
      updatedAt
      owner
      __typename
    }
    name
    students {
      nextToken
      __typename
    }
    drills {
      nextToken
      __typename
    }
    duration
    createdAt
    updatedAt
    coachCoachSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCoachSessionMutationVariables,
  APITypes.CreateCoachSessionMutation
>;
export const updateCoachSession = /* GraphQL */ `mutation UpdateCoachSession(
  $input: UpdateCoachSessionInput!
  $condition: ModelCoachSessionConditionInput
) {
  updateCoachSession(input: $input, condition: $condition) {
    id
    coachId
    coach {
      id
      cognitoId
      name
      lastName
      phoneNumber
      email
      bio
      school
      zipCode
      address
      state
      city
      country
      createdAt
      updatedAt
      owner
      __typename
    }
    name
    students {
      nextToken
      __typename
    }
    drills {
      nextToken
      __typename
    }
    duration
    createdAt
    updatedAt
    coachCoachSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCoachSessionMutationVariables,
  APITypes.UpdateCoachSessionMutation
>;
export const deleteCoachSession = /* GraphQL */ `mutation DeleteCoachSession(
  $input: DeleteCoachSessionInput!
  $condition: ModelCoachSessionConditionInput
) {
  deleteCoachSession(input: $input, condition: $condition) {
    id
    coachId
    coach {
      id
      cognitoId
      name
      lastName
      phoneNumber
      email
      bio
      school
      zipCode
      address
      state
      city
      country
      createdAt
      updatedAt
      owner
      __typename
    }
    name
    students {
      nextToken
      __typename
    }
    drills {
      nextToken
      __typename
    }
    duration
    createdAt
    updatedAt
    coachCoachSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCoachSessionMutationVariables,
  APITypes.DeleteCoachSessionMutation
>;
export const createCoachSessionUser = /* GraphQL */ `mutation CreateCoachSessionUser(
  $input: CreateCoachSessionUserInput!
  $condition: ModelCoachSessionUserConditionInput
) {
  createCoachSessionUser(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    coachId
    coach {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    coachSessionId
    coachSession {
      id
      coachId
      name
      duration
      createdAt
      updatedAt
      coachCoachSessionsId
      owner
      __typename
    }
    timesPlayed
    lastCompleted
    createdAt
    updatedAt
    userMyCoachSessionsId
    coachSessionStudentsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCoachSessionUserMutationVariables,
  APITypes.CreateCoachSessionUserMutation
>;
export const updateCoachSessionUser = /* GraphQL */ `mutation UpdateCoachSessionUser(
  $input: UpdateCoachSessionUserInput!
  $condition: ModelCoachSessionUserConditionInput
) {
  updateCoachSessionUser(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    coachId
    coach {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    coachSessionId
    coachSession {
      id
      coachId
      name
      duration
      createdAt
      updatedAt
      coachCoachSessionsId
      owner
      __typename
    }
    timesPlayed
    lastCompleted
    createdAt
    updatedAt
    userMyCoachSessionsId
    coachSessionStudentsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCoachSessionUserMutationVariables,
  APITypes.UpdateCoachSessionUserMutation
>;
export const deleteCoachSessionUser = /* GraphQL */ `mutation DeleteCoachSessionUser(
  $input: DeleteCoachSessionUserInput!
  $condition: ModelCoachSessionUserConditionInput
) {
  deleteCoachSessionUser(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    coachId
    coach {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    coachSessionId
    coachSession {
      id
      coachId
      name
      duration
      createdAt
      updatedAt
      coachCoachSessionsId
      owner
      __typename
    }
    timesPlayed
    lastCompleted
    createdAt
    updatedAt
    userMyCoachSessionsId
    coachSessionStudentsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCoachSessionUserMutationVariables,
  APITypes.DeleteCoachSessionUserMutation
>;
export const createCoachUserNotes = /* GraphQL */ `mutation CreateCoachUserNotes(
  $input: CreateCoachUserNotesInput!
  $condition: ModelCoachUserNotesConditionInput
) {
  createCoachUserNotes(input: $input, condition: $condition) {
    id
    coachUserId
    notes
    createdAt
    updatedAt
    coachUserNotesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCoachUserNotesMutationVariables,
  APITypes.CreateCoachUserNotesMutation
>;
export const updateCoachUserNotes = /* GraphQL */ `mutation UpdateCoachUserNotes(
  $input: UpdateCoachUserNotesInput!
  $condition: ModelCoachUserNotesConditionInput
) {
  updateCoachUserNotes(input: $input, condition: $condition) {
    id
    coachUserId
    notes
    createdAt
    updatedAt
    coachUserNotesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCoachUserNotesMutationVariables,
  APITypes.UpdateCoachUserNotesMutation
>;
export const deleteCoachUserNotes = /* GraphQL */ `mutation DeleteCoachUserNotes(
  $input: DeleteCoachUserNotesInput!
  $condition: ModelCoachUserNotesConditionInput
) {
  deleteCoachUserNotes(input: $input, condition: $condition) {
    id
    coachUserId
    notes
    createdAt
    updatedAt
    coachUserNotesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCoachUserNotesMutationVariables,
  APITypes.DeleteCoachUserNotesMutation
>;
export const createCoachSessionDrill = /* GraphQL */ `mutation CreateCoachSessionDrill(
  $input: CreateCoachSessionDrillInput!
  $condition: ModelCoachSessionDrillConditionInput
) {
  createCoachSessionDrill(input: $input, condition: $condition) {
    id
    coachSessionId
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    createdAt
    updatedAt
    coachSessionDrillsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCoachSessionDrillMutationVariables,
  APITypes.CreateCoachSessionDrillMutation
>;
export const updateCoachSessionDrill = /* GraphQL */ `mutation UpdateCoachSessionDrill(
  $input: UpdateCoachSessionDrillInput!
  $condition: ModelCoachSessionDrillConditionInput
) {
  updateCoachSessionDrill(input: $input, condition: $condition) {
    id
    coachSessionId
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    createdAt
    updatedAt
    coachSessionDrillsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCoachSessionDrillMutationVariables,
  APITypes.UpdateCoachSessionDrillMutation
>;
export const deleteCoachSessionDrill = /* GraphQL */ `mutation DeleteCoachSessionDrill(
  $input: DeleteCoachSessionDrillInput!
  $condition: ModelCoachSessionDrillConditionInput
) {
  deleteCoachSessionDrill(input: $input, condition: $condition) {
    id
    coachSessionId
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    createdAt
    updatedAt
    coachSessionDrillsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCoachSessionDrillMutationVariables,
  APITypes.DeleteCoachSessionDrillMutation
>;
export const createCoachDrillNotes = /* GraphQL */ `mutation CreateCoachDrillNotes(
  $input: CreateCoachDrillNotesInput!
  $condition: ModelCoachDrillNotesConditionInput
) {
  createCoachDrillNotes(input: $input, condition: $condition) {
    id
    coachId
    coach {
      id
      cognitoId
      name
      lastName
      phoneNumber
      email
      bio
      school
      zipCode
      address
      state
      city
      country
      createdAt
      updatedAt
      owner
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    notes
    share
    createdAt
    updatedAt
    drillCoachNotesId
    coachCoachDrillNotesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCoachDrillNotesMutationVariables,
  APITypes.CreateCoachDrillNotesMutation
>;
export const updateCoachDrillNotes = /* GraphQL */ `mutation UpdateCoachDrillNotes(
  $input: UpdateCoachDrillNotesInput!
  $condition: ModelCoachDrillNotesConditionInput
) {
  updateCoachDrillNotes(input: $input, condition: $condition) {
    id
    coachId
    coach {
      id
      cognitoId
      name
      lastName
      phoneNumber
      email
      bio
      school
      zipCode
      address
      state
      city
      country
      createdAt
      updatedAt
      owner
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    notes
    share
    createdAt
    updatedAt
    drillCoachNotesId
    coachCoachDrillNotesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCoachDrillNotesMutationVariables,
  APITypes.UpdateCoachDrillNotesMutation
>;
export const deleteCoachDrillNotes = /* GraphQL */ `mutation DeleteCoachDrillNotes(
  $input: DeleteCoachDrillNotesInput!
  $condition: ModelCoachDrillNotesConditionInput
) {
  deleteCoachDrillNotes(input: $input, condition: $condition) {
    id
    coachId
    coach {
      id
      cognitoId
      name
      lastName
      phoneNumber
      email
      bio
      school
      zipCode
      address
      state
      city
      country
      createdAt
      updatedAt
      owner
      __typename
    }
    drillId
    drill {
      id
      name
      trackingName
      description
      goal
      videoId
      duration
      skillId
      hidden
      tries
      level
      club
      title
      challenge
      isDynamic
      thirdOption
      type
      createdAt
      updatedAt
      skillDrillsId
      __typename
    }
    notes
    share
    createdAt
    updatedAt
    drillCoachNotesId
    coachCoachDrillNotesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCoachDrillNotesMutationVariables,
  APITypes.DeleteCoachDrillNotesMutation
>;
export const createTrainingSession = /* GraphQL */ `mutation CreateTrainingSession(
  $userId: ID!
  $drillsIds: [ID]
  $time: Int
  $balls: Int
  $mode: SessionMode
  $name: String
) {
  createTrainingSession(
    userId: $userId
    drillsIds: $drillsIds
    time: $time
    balls: $balls
    mode: $mode
    name: $name
  ) {
    id
    parentId
    name
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    sessionDrills {
      nextToken
      __typename
    }
    duration
    isCompleted
    saved
    mode
    scenario
    createdAt
    updatedAt
    userMySessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTrainingSessionMutationVariables,
  APITypes.CreateTrainingSessionMutation
>;
export const cloneTrainingSession = /* GraphQL */ `mutation CloneTrainingSession($userId: ID!, $sessionId: ID!) {
  cloneTrainingSession(userId: $userId, sessionId: $sessionId) {
    id
    parentId
    name
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    sessionDrills {
      nextToken
      __typename
    }
    duration
    isCompleted
    saved
    mode
    scenario
    createdAt
    updatedAt
    userMySessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CloneTrainingSessionMutationVariables,
  APITypes.CloneTrainingSessionMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser($id: ID!) {
  createUser(id: $id)
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUsername = /* GraphQL */ `mutation UpdateUsername($userId: ID!, $username: String) {
  updateUsername(userId: $userId, username: $username) {
    id
    name
    username
    gender
    age
    handicap
    objectives
    evaluation {
      name
      score
      __typename
    }
    mySessions {
      nextToken
      __typename
    }
    myDrills {
      nextToken
      __typename
    }
    featureFlags {
      name
      value
      __typename
    }
    feedbacks {
      nextToken
      __typename
    }
    userSkills {
      nextToken
      __typename
    }
    vote {
      nextToken
      __typename
    }
    courseSessions {
      nextToken
      __typename
    }
    bullseyeSessions {
      nextToken
      __typename
    }
    bullseye {
      nextToken
      __typename
    }
    targetSets {
      nextToken
      __typename
    }
    gridGameSessions {
      nextToken
      __typename
    }
    gridGameHighScore {
      nextToken
      __typename
    }
    deleted
    coachUserId
    myCoach {
      id
      userId
      coachId
      status
      createdAt
      updatedAt
      coachStudentsId
      owner
      __typename
    }
    myCoachSessions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUsernameMutationVariables,
  APITypes.UpdateUsernameMutation
>;
export const createCourseSession = /* GraphQL */ `mutation CreateCourseSession(
  $userId: ID!
  $courseId: ID!
  $playingCareer: Boolean
) {
  createCourseSession(
    userId: $userId
    courseId: $courseId
    playingCareer: $playingCareer
  ) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    sessionHoles {
      nextToken
      __typename
    }
    isCompleted
    courseId
    course {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    playingCareer
    createdAt
    updatedAt
    userCourseSessionsId
    courseCourseSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCourseSessionMutationVariables,
  APITypes.CreateCourseSessionMutation
>;
export const removeUser = /* GraphQL */ `mutation RemoveUser {
  removeUser
}
` as GeneratedMutation<
  APITypes.RemoveUserMutationVariables,
  APITypes.RemoveUserMutation
>;
export const completeGridGame = /* GraphQL */ `mutation CompleteGridGame(
  $userId: ID!
  $id: ID!
  $targetDistance: Int!
  $shots: Int!
  $distances: [DistanceScoreInput]
  $isCompleted: Boolean!
) {
  completeGridGame(
    userId: $userId
    id: $id
    targetDistance: $targetDistance
    shots: $shots
    distances: $distances
    isCompleted: $isCompleted
  ) {
    id
    userId
    user {
      id
      name
      username
      gender
      age
      handicap
      objectives
      deleted
      coachUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    targetDistance
    shots
    distances {
      distance
      shots
      __typename
    }
    isCompleted
    createdAt
    updatedAt
    userGridGameSessionsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CompleteGridGameMutationVariables,
  APITypes.CompleteGridGameMutation
>;
