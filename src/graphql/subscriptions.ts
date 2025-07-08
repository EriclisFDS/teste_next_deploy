/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserDrills = /* GraphQL */ `subscription OnCreateUserDrills(
  $filter: ModelSubscriptionUserDrillsFilterInput
  $owner: String
) {
  onCreateUserDrills(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserDrillsSubscriptionVariables,
  APITypes.OnCreateUserDrillsSubscription
>;
export const onUpdateUserDrills = /* GraphQL */ `subscription OnUpdateUserDrills(
  $filter: ModelSubscriptionUserDrillsFilterInput
  $owner: String
) {
  onUpdateUserDrills(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserDrillsSubscriptionVariables,
  APITypes.OnUpdateUserDrillsSubscription
>;
export const onDeleteUserDrills = /* GraphQL */ `subscription OnDeleteUserDrills(
  $filter: ModelSubscriptionUserDrillsFilterInput
  $owner: String
) {
  onDeleteUserDrills(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserDrillsSubscriptionVariables,
  APITypes.OnDeleteUserDrillsSubscription
>;
export const onCreateFeedback = /* GraphQL */ `subscription OnCreateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onCreateFeedback(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFeedbackSubscriptionVariables,
  APITypes.OnCreateFeedbackSubscription
>;
export const onUpdateFeedback = /* GraphQL */ `subscription OnUpdateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onUpdateFeedback(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeedbackSubscriptionVariables,
  APITypes.OnUpdateFeedbackSubscription
>;
export const onDeleteFeedback = /* GraphQL */ `subscription OnDeleteFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onDeleteFeedback(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeedbackSubscriptionVariables,
  APITypes.OnDeleteFeedbackSubscription
>;
export const onCreateVote = /* GraphQL */ `subscription OnCreateVote($filter: ModelSubscriptionVoteFilterInput) {
  onCreateVote(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateVoteSubscriptionVariables,
  APITypes.OnCreateVoteSubscription
>;
export const onUpdateVote = /* GraphQL */ `subscription OnUpdateVote($filter: ModelSubscriptionVoteFilterInput) {
  onUpdateVote(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVoteSubscriptionVariables,
  APITypes.OnUpdateVoteSubscription
>;
export const onDeleteVote = /* GraphQL */ `subscription OnDeleteVote($filter: ModelSubscriptionVoteFilterInput) {
  onDeleteVote(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteVoteSubscriptionVariables,
  APITypes.OnDeleteVoteSubscription
>;
export const onCreateSkill = /* GraphQL */ `subscription OnCreateSkill($filter: ModelSubscriptionSkillFilterInput) {
  onCreateSkill(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSkillSubscriptionVariables,
  APITypes.OnCreateSkillSubscription
>;
export const onUpdateSkill = /* GraphQL */ `subscription OnUpdateSkill($filter: ModelSubscriptionSkillFilterInput) {
  onUpdateSkill(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSkillSubscriptionVariables,
  APITypes.OnUpdateSkillSubscription
>;
export const onDeleteSkill = /* GraphQL */ `subscription OnDeleteSkill($filter: ModelSubscriptionSkillFilterInput) {
  onDeleteSkill(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSkillSubscriptionVariables,
  APITypes.OnDeleteSkillSubscription
>;
export const onCreateUserSkill = /* GraphQL */ `subscription OnCreateUserSkill(
  $filter: ModelSubscriptionUserSkillFilterInput
  $owner: String
) {
  onCreateUserSkill(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSkillSubscriptionVariables,
  APITypes.OnCreateUserSkillSubscription
>;
export const onUpdateUserSkill = /* GraphQL */ `subscription OnUpdateUserSkill(
  $filter: ModelSubscriptionUserSkillFilterInput
  $owner: String
) {
  onUpdateUserSkill(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSkillSubscriptionVariables,
  APITypes.OnUpdateUserSkillSubscription
>;
export const onDeleteUserSkill = /* GraphQL */ `subscription OnDeleteUserSkill(
  $filter: ModelSubscriptionUserSkillFilterInput
  $owner: String
) {
  onDeleteUserSkill(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSkillSubscriptionVariables,
  APITypes.OnDeleteUserSkillSubscription
>;
export const onCreateDrill = /* GraphQL */ `subscription OnCreateDrill($filter: ModelSubscriptionDrillFilterInput) {
  onCreateDrill(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDrillSubscriptionVariables,
  APITypes.OnCreateDrillSubscription
>;
export const onUpdateDrill = /* GraphQL */ `subscription OnUpdateDrill($filter: ModelSubscriptionDrillFilterInput) {
  onUpdateDrill(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDrillSubscriptionVariables,
  APITypes.OnUpdateDrillSubscription
>;
export const onDeleteDrill = /* GraphQL */ `subscription OnDeleteDrill($filter: ModelSubscriptionDrillFilterInput) {
  onDeleteDrill(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDrillSubscriptionVariables,
  APITypes.OnDeleteDrillSubscription
>;
export const onCreateSession = /* GraphQL */ `subscription OnCreateSession(
  $filter: ModelSubscriptionSessionFilterInput
  $owner: String
) {
  onCreateSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSessionSubscriptionVariables,
  APITypes.OnCreateSessionSubscription
>;
export const onUpdateSession = /* GraphQL */ `subscription OnUpdateSession(
  $filter: ModelSubscriptionSessionFilterInput
  $owner: String
) {
  onUpdateSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSessionSubscriptionVariables,
  APITypes.OnUpdateSessionSubscription
>;
export const onDeleteSession = /* GraphQL */ `subscription OnDeleteSession(
  $filter: ModelSubscriptionSessionFilterInput
  $owner: String
) {
  onDeleteSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSessionSubscriptionVariables,
  APITypes.OnDeleteSessionSubscription
>;
export const onCreateSessionDrill = /* GraphQL */ `subscription OnCreateSessionDrill(
  $filter: ModelSubscriptionSessionDrillFilterInput
  $owner: String
) {
  onCreateSessionDrill(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSessionDrillSubscriptionVariables,
  APITypes.OnCreateSessionDrillSubscription
>;
export const onUpdateSessionDrill = /* GraphQL */ `subscription OnUpdateSessionDrill(
  $filter: ModelSubscriptionSessionDrillFilterInput
  $owner: String
) {
  onUpdateSessionDrill(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSessionDrillSubscriptionVariables,
  APITypes.OnUpdateSessionDrillSubscription
>;
export const onDeleteSessionDrill = /* GraphQL */ `subscription OnDeleteSessionDrill(
  $filter: ModelSubscriptionSessionDrillFilterInput
  $owner: String
) {
  onDeleteSessionDrill(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSessionDrillSubscriptionVariables,
  APITypes.OnDeleteSessionDrillSubscription
>;
export const onCreateCourse = /* GraphQL */ `subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onCreateCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCourseSubscriptionVariables,
  APITypes.OnCreateCourseSubscription
>;
export const onUpdateCourse = /* GraphQL */ `subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onUpdateCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSubscriptionVariables,
  APITypes.OnUpdateCourseSubscription
>;
export const onDeleteCourse = /* GraphQL */ `subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
  onDeleteCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSubscriptionVariables,
  APITypes.OnDeleteCourseSubscription
>;
export const onCreateHole = /* GraphQL */ `subscription OnCreateHole($filter: ModelSubscriptionHoleFilterInput) {
  onCreateHole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateHoleSubscriptionVariables,
  APITypes.OnCreateHoleSubscription
>;
export const onUpdateHole = /* GraphQL */ `subscription OnUpdateHole($filter: ModelSubscriptionHoleFilterInput) {
  onUpdateHole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateHoleSubscriptionVariables,
  APITypes.OnUpdateHoleSubscription
>;
export const onDeleteHole = /* GraphQL */ `subscription OnDeleteHole($filter: ModelSubscriptionHoleFilterInput) {
  onDeleteHole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteHoleSubscriptionVariables,
  APITypes.OnDeleteHoleSubscription
>;
export const onUpdateCourseSession = /* GraphQL */ `subscription OnUpdateCourseSession(
  $filter: ModelSubscriptionCourseSessionFilterInput
  $owner: String
) {
  onUpdateCourseSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSessionSubscriptionVariables,
  APITypes.OnUpdateCourseSessionSubscription
>;
export const onDeleteCourseSession = /* GraphQL */ `subscription OnDeleteCourseSession(
  $filter: ModelSubscriptionCourseSessionFilterInput
  $owner: String
) {
  onDeleteCourseSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSessionSubscriptionVariables,
  APITypes.OnDeleteCourseSessionSubscription
>;
export const onCreateSessionHole = /* GraphQL */ `subscription OnCreateSessionHole(
  $filter: ModelSubscriptionSessionHoleFilterInput
  $owner: String
) {
  onCreateSessionHole(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSessionHoleSubscriptionVariables,
  APITypes.OnCreateSessionHoleSubscription
>;
export const onUpdateSessionHole = /* GraphQL */ `subscription OnUpdateSessionHole(
  $filter: ModelSubscriptionSessionHoleFilterInput
  $owner: String
) {
  onUpdateSessionHole(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSessionHoleSubscriptionVariables,
  APITypes.OnUpdateSessionHoleSubscription
>;
export const onDeleteSessionHole = /* GraphQL */ `subscription OnDeleteSessionHole(
  $filter: ModelSubscriptionSessionHoleFilterInput
  $owner: String
) {
  onDeleteSessionHole(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSessionHoleSubscriptionVariables,
  APITypes.OnDeleteSessionHoleSubscription
>;
export const onCreateBullseyeSession = /* GraphQL */ `subscription OnCreateBullseyeSession(
  $filter: ModelSubscriptionBullseyeSessionFilterInput
  $owner: String
) {
  onCreateBullseyeSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBullseyeSessionSubscriptionVariables,
  APITypes.OnCreateBullseyeSessionSubscription
>;
export const onUpdateBullseyeSession = /* GraphQL */ `subscription OnUpdateBullseyeSession(
  $filter: ModelSubscriptionBullseyeSessionFilterInput
  $owner: String
) {
  onUpdateBullseyeSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBullseyeSessionSubscriptionVariables,
  APITypes.OnUpdateBullseyeSessionSubscription
>;
export const onDeleteBullseyeSession = /* GraphQL */ `subscription OnDeleteBullseyeSession(
  $filter: ModelSubscriptionBullseyeSessionFilterInput
  $owner: String
) {
  onDeleteBullseyeSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBullseyeSessionSubscriptionVariables,
  APITypes.OnDeleteBullseyeSessionSubscription
>;
export const onCreateTargetSet = /* GraphQL */ `subscription OnCreateTargetSet(
  $filter: ModelSubscriptionTargetSetFilterInput
  $owner: String
) {
  onCreateTargetSet(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTargetSetSubscriptionVariables,
  APITypes.OnCreateTargetSetSubscription
>;
export const onUpdateTargetSet = /* GraphQL */ `subscription OnUpdateTargetSet(
  $filter: ModelSubscriptionTargetSetFilterInput
  $owner: String
) {
  onUpdateTargetSet(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTargetSetSubscriptionVariables,
  APITypes.OnUpdateTargetSetSubscription
>;
export const onDeleteTargetSet = /* GraphQL */ `subscription OnDeleteTargetSet(
  $filter: ModelSubscriptionTargetSetFilterInput
  $owner: String
) {
  onDeleteTargetSet(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTargetSetSubscriptionVariables,
  APITypes.OnDeleteTargetSetSubscription
>;
export const onCreateUserBullseye = /* GraphQL */ `subscription OnCreateUserBullseye(
  $filter: ModelSubscriptionUserBullseyeFilterInput
  $owner: String
) {
  onCreateUserBullseye(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserBullseyeSubscriptionVariables,
  APITypes.OnCreateUserBullseyeSubscription
>;
export const onUpdateUserBullseye = /* GraphQL */ `subscription OnUpdateUserBullseye(
  $filter: ModelSubscriptionUserBullseyeFilterInput
  $owner: String
) {
  onUpdateUserBullseye(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserBullseyeSubscriptionVariables,
  APITypes.OnUpdateUserBullseyeSubscription
>;
export const onDeleteUserBullseye = /* GraphQL */ `subscription OnDeleteUserBullseye(
  $filter: ModelSubscriptionUserBullseyeFilterInput
  $owner: String
) {
  onDeleteUserBullseye(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserBullseyeSubscriptionVariables,
  APITypes.OnDeleteUserBullseyeSubscription
>;
export const onCreateGridGameSession = /* GraphQL */ `subscription OnCreateGridGameSession(
  $filter: ModelSubscriptionGridGameSessionFilterInput
  $owner: String
) {
  onCreateGridGameSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGridGameSessionSubscriptionVariables,
  APITypes.OnCreateGridGameSessionSubscription
>;
export const onUpdateGridGameSession = /* GraphQL */ `subscription OnUpdateGridGameSession(
  $filter: ModelSubscriptionGridGameSessionFilterInput
  $owner: String
) {
  onUpdateGridGameSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGridGameSessionSubscriptionVariables,
  APITypes.OnUpdateGridGameSessionSubscription
>;
export const onDeleteGridGameSession = /* GraphQL */ `subscription OnDeleteGridGameSession(
  $filter: ModelSubscriptionGridGameSessionFilterInput
  $owner: String
) {
  onDeleteGridGameSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGridGameSessionSubscriptionVariables,
  APITypes.OnDeleteGridGameSessionSubscription
>;
export const onCreateGridGameHighScore = /* GraphQL */ `subscription OnCreateGridGameHighScore(
  $filter: ModelSubscriptionGridGameHighScoreFilterInput
  $owner: String
) {
  onCreateGridGameHighScore(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGridGameHighScoreSubscriptionVariables,
  APITypes.OnCreateGridGameHighScoreSubscription
>;
export const onUpdateGridGameHighScore = /* GraphQL */ `subscription OnUpdateGridGameHighScore(
  $filter: ModelSubscriptionGridGameHighScoreFilterInput
  $owner: String
) {
  onUpdateGridGameHighScore(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGridGameHighScoreSubscriptionVariables,
  APITypes.OnUpdateGridGameHighScoreSubscription
>;
export const onDeleteGridGameHighScore = /* GraphQL */ `subscription OnDeleteGridGameHighScore(
  $filter: ModelSubscriptionGridGameHighScoreFilterInput
  $owner: String
) {
  onDeleteGridGameHighScore(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGridGameHighScoreSubscriptionVariables,
  APITypes.OnDeleteGridGameHighScoreSubscription
>;
export const onCreateAppInfo = /* GraphQL */ `subscription OnCreateAppInfo($filter: ModelSubscriptionAppInfoFilterInput) {
  onCreateAppInfo(filter: $filter) {
    paywallVideoId
    env
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAppInfoSubscriptionVariables,
  APITypes.OnCreateAppInfoSubscription
>;
export const onUpdateAppInfo = /* GraphQL */ `subscription OnUpdateAppInfo($filter: ModelSubscriptionAppInfoFilterInput) {
  onUpdateAppInfo(filter: $filter) {
    paywallVideoId
    env
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAppInfoSubscriptionVariables,
  APITypes.OnUpdateAppInfoSubscription
>;
export const onDeleteAppInfo = /* GraphQL */ `subscription OnDeleteAppInfo($filter: ModelSubscriptionAppInfoFilterInput) {
  onDeleteAppInfo(filter: $filter) {
    paywallVideoId
    env
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAppInfoSubscriptionVariables,
  APITypes.OnDeleteAppInfoSubscription
>;
export const onCreateArticle = /* GraphQL */ `subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onCreateArticle(filter: $filter) {
    videoId
    title
    text
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateArticleSubscriptionVariables,
  APITypes.OnCreateArticleSubscription
>;
export const onUpdateArticle = /* GraphQL */ `subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onUpdateArticle(filter: $filter) {
    videoId
    title
    text
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateArticleSubscriptionVariables,
  APITypes.OnUpdateArticleSubscription
>;
export const onDeleteArticle = /* GraphQL */ `subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
  onDeleteArticle(filter: $filter) {
    videoId
    title
    text
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteArticleSubscriptionVariables,
  APITypes.OnDeleteArticleSubscription
>;
export const onCreateChallengeDrills = /* GraphQL */ `subscription OnCreateChallengeDrills(
  $filter: ModelSubscriptionChallengeDrillsFilterInput
) {
  onCreateChallengeDrills(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChallengeDrillsSubscriptionVariables,
  APITypes.OnCreateChallengeDrillsSubscription
>;
export const onUpdateChallengeDrills = /* GraphQL */ `subscription OnUpdateChallengeDrills(
  $filter: ModelSubscriptionChallengeDrillsFilterInput
) {
  onUpdateChallengeDrills(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChallengeDrillsSubscriptionVariables,
  APITypes.OnUpdateChallengeDrillsSubscription
>;
export const onDeleteChallengeDrills = /* GraphQL */ `subscription OnDeleteChallengeDrills(
  $filter: ModelSubscriptionChallengeDrillsFilterInput
) {
  onDeleteChallengeDrills(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChallengeDrillsSubscriptionVariables,
  APITypes.OnDeleteChallengeDrillsSubscription
>;
export const onCreateCoach = /* GraphQL */ `subscription OnCreateCoach(
  $filter: ModelSubscriptionCoachFilterInput
  $owner: String
) {
  onCreateCoach(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCoachSubscriptionVariables,
  APITypes.OnCreateCoachSubscription
>;
export const onUpdateCoach = /* GraphQL */ `subscription OnUpdateCoach(
  $filter: ModelSubscriptionCoachFilterInput
  $owner: String
) {
  onUpdateCoach(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCoachSubscriptionVariables,
  APITypes.OnUpdateCoachSubscription
>;
export const onDeleteCoach = /* GraphQL */ `subscription OnDeleteCoach(
  $filter: ModelSubscriptionCoachFilterInput
  $owner: String
) {
  onDeleteCoach(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCoachSubscriptionVariables,
  APITypes.OnDeleteCoachSubscription
>;
export const onCreateCoachUser = /* GraphQL */ `subscription OnCreateCoachUser(
  $filter: ModelSubscriptionCoachUserFilterInput
  $owner: String
) {
  onCreateCoachUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCoachUserSubscriptionVariables,
  APITypes.OnCreateCoachUserSubscription
>;
export const onUpdateCoachUser = /* GraphQL */ `subscription OnUpdateCoachUser(
  $filter: ModelSubscriptionCoachUserFilterInput
  $owner: String
) {
  onUpdateCoachUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCoachUserSubscriptionVariables,
  APITypes.OnUpdateCoachUserSubscription
>;
export const onDeleteCoachUser = /* GraphQL */ `subscription OnDeleteCoachUser(
  $filter: ModelSubscriptionCoachUserFilterInput
  $owner: String
) {
  onDeleteCoachUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCoachUserSubscriptionVariables,
  APITypes.OnDeleteCoachUserSubscription
>;
export const onCreateCoachSession = /* GraphQL */ `subscription OnCreateCoachSession(
  $filter: ModelSubscriptionCoachSessionFilterInput
  $owner: String
) {
  onCreateCoachSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCoachSessionSubscriptionVariables,
  APITypes.OnCreateCoachSessionSubscription
>;
export const onUpdateCoachSession = /* GraphQL */ `subscription OnUpdateCoachSession(
  $filter: ModelSubscriptionCoachSessionFilterInput
  $owner: String
) {
  onUpdateCoachSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCoachSessionSubscriptionVariables,
  APITypes.OnUpdateCoachSessionSubscription
>;
export const onDeleteCoachSession = /* GraphQL */ `subscription OnDeleteCoachSession(
  $filter: ModelSubscriptionCoachSessionFilterInput
  $owner: String
) {
  onDeleteCoachSession(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCoachSessionSubscriptionVariables,
  APITypes.OnDeleteCoachSessionSubscription
>;
export const onCreateCoachSessionUser = /* GraphQL */ `subscription OnCreateCoachSessionUser(
  $filter: ModelSubscriptionCoachSessionUserFilterInput
  $owner: String
) {
  onCreateCoachSessionUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCoachSessionUserSubscriptionVariables,
  APITypes.OnCreateCoachSessionUserSubscription
>;
export const onUpdateCoachSessionUser = /* GraphQL */ `subscription OnUpdateCoachSessionUser(
  $filter: ModelSubscriptionCoachSessionUserFilterInput
  $owner: String
) {
  onUpdateCoachSessionUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCoachSessionUserSubscriptionVariables,
  APITypes.OnUpdateCoachSessionUserSubscription
>;
export const onDeleteCoachSessionUser = /* GraphQL */ `subscription OnDeleteCoachSessionUser(
  $filter: ModelSubscriptionCoachSessionUserFilterInput
  $owner: String
) {
  onDeleteCoachSessionUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCoachSessionUserSubscriptionVariables,
  APITypes.OnDeleteCoachSessionUserSubscription
>;
export const onCreateCoachUserNotes = /* GraphQL */ `subscription OnCreateCoachUserNotes(
  $filter: ModelSubscriptionCoachUserNotesFilterInput
  $owner: String
) {
  onCreateCoachUserNotes(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCoachUserNotesSubscriptionVariables,
  APITypes.OnCreateCoachUserNotesSubscription
>;
export const onUpdateCoachUserNotes = /* GraphQL */ `subscription OnUpdateCoachUserNotes(
  $filter: ModelSubscriptionCoachUserNotesFilterInput
  $owner: String
) {
  onUpdateCoachUserNotes(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCoachUserNotesSubscriptionVariables,
  APITypes.OnUpdateCoachUserNotesSubscription
>;
export const onDeleteCoachUserNotes = /* GraphQL */ `subscription OnDeleteCoachUserNotes(
  $filter: ModelSubscriptionCoachUserNotesFilterInput
  $owner: String
) {
  onDeleteCoachUserNotes(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCoachUserNotesSubscriptionVariables,
  APITypes.OnDeleteCoachUserNotesSubscription
>;
export const onCreateCoachSessionDrill = /* GraphQL */ `subscription OnCreateCoachSessionDrill(
  $filter: ModelSubscriptionCoachSessionDrillFilterInput
) {
  onCreateCoachSessionDrill(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCoachSessionDrillSubscriptionVariables,
  APITypes.OnCreateCoachSessionDrillSubscription
>;
export const onUpdateCoachSessionDrill = /* GraphQL */ `subscription OnUpdateCoachSessionDrill(
  $filter: ModelSubscriptionCoachSessionDrillFilterInput
) {
  onUpdateCoachSessionDrill(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCoachSessionDrillSubscriptionVariables,
  APITypes.OnUpdateCoachSessionDrillSubscription
>;
export const onDeleteCoachSessionDrill = /* GraphQL */ `subscription OnDeleteCoachSessionDrill(
  $filter: ModelSubscriptionCoachSessionDrillFilterInput
) {
  onDeleteCoachSessionDrill(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCoachSessionDrillSubscriptionVariables,
  APITypes.OnDeleteCoachSessionDrillSubscription
>;
export const onCreateCoachDrillNotes = /* GraphQL */ `subscription OnCreateCoachDrillNotes(
  $filter: ModelSubscriptionCoachDrillNotesFilterInput
  $owner: String
) {
  onCreateCoachDrillNotes(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCoachDrillNotesSubscriptionVariables,
  APITypes.OnCreateCoachDrillNotesSubscription
>;
export const onUpdateCoachDrillNotes = /* GraphQL */ `subscription OnUpdateCoachDrillNotes(
  $filter: ModelSubscriptionCoachDrillNotesFilterInput
  $owner: String
) {
  onUpdateCoachDrillNotes(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCoachDrillNotesSubscriptionVariables,
  APITypes.OnUpdateCoachDrillNotesSubscription
>;
export const onDeleteCoachDrillNotes = /* GraphQL */ `subscription OnDeleteCoachDrillNotes(
  $filter: ModelSubscriptionCoachDrillNotesFilterInput
  $owner: String
) {
  onDeleteCoachDrillNotes(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCoachDrillNotesSubscriptionVariables,
  APITypes.OnDeleteCoachDrillNotesSubscription
>;
