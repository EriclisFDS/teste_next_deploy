/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const usersByUsername = /* GraphQL */ `query UsersByUsername(
  $username: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByUsername(
    username: $username
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByUsernameQueryVariables,
  APITypes.UsersByUsernameQuery
>;
export const usersByCoachUserId = /* GraphQL */ `query UsersByCoachUserId(
  $coachUserId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByCoachUserId(
    coachUserId: $coachUserId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByCoachUserIdQueryVariables,
  APITypes.UsersByCoachUserIdQuery
>;
export const getUserDrills = /* GraphQL */ `query GetUserDrills($id: ID!) {
  getUserDrills(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserDrillsQueryVariables,
  APITypes.GetUserDrillsQuery
>;
export const listUserDrills = /* GraphQL */ `query ListUserDrills(
  $filter: ModelUserDrillsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserDrills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      drillId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserDrillsQueryVariables,
  APITypes.ListUserDrillsQuery
>;
export const userDrillsByUserId = /* GraphQL */ `query UserDrillsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserDrillsFilterInput
  $limit: Int
  $nextToken: String
) {
  userDrillsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      userId
      drillId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserDrillsByUserIdQueryVariables,
  APITypes.UserDrillsByUserIdQuery
>;
export const userDrillsByDrillId = /* GraphQL */ `query UserDrillsByDrillId(
  $drillId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserDrillsFilterInput
  $limit: Int
  $nextToken: String
) {
  userDrillsByDrillId(
    drillId: $drillId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      userId
      drillId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserDrillsByDrillIdQueryVariables,
  APITypes.UserDrillsByDrillIdQuery
>;
export const getFeedback = /* GraphQL */ `query GetFeedback($id: ID!) {
  getFeedback(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFeedbackQueryVariables,
  APITypes.GetFeedbackQuery
>;
export const listFeedbacks = /* GraphQL */ `query ListFeedbacks(
  $filter: ModelFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      score
      details
      screen
      userId
      createdAt
      updatedAt
      userFeedbacksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeedbacksQueryVariables,
  APITypes.ListFeedbacksQuery
>;
export const feedbacksByUserId = /* GraphQL */ `query FeedbacksByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  feedbacksByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      score
      details
      screen
      userId
      createdAt
      updatedAt
      userFeedbacksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FeedbacksByUserIdQueryVariables,
  APITypes.FeedbacksByUserIdQuery
>;
export const getVote = /* GraphQL */ `query GetVote($id: ID!) {
  getVote(id: $id) {
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
` as GeneratedQuery<APITypes.GetVoteQueryVariables, APITypes.GetVoteQuery>;
export const listVotes = /* GraphQL */ `query ListVotes(
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      feature
      userId
      createdAt
      updatedAt
      userVoteId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListVotesQueryVariables, APITypes.ListVotesQuery>;
export const votesByUserId = /* GraphQL */ `query VotesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  votesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      feature
      userId
      createdAt
      updatedAt
      userVoteId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VotesByUserIdQueryVariables,
  APITypes.VotesByUserIdQuery
>;
export const getSkill = /* GraphQL */ `query GetSkill($id: ID!) {
  getSkill(id: $id) {
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
` as GeneratedQuery<APITypes.GetSkillQueryVariables, APITypes.GetSkillQuery>;
export const listSkills = /* GraphQL */ `query ListSkills(
  $filter: ModelSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      trackingName
      description
      games
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSkillsQueryVariables,
  APITypes.ListSkillsQuery
>;
export const getUserSkill = /* GraphQL */ `query GetUserSkill($id: ID!) {
  getUserSkill(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserSkillQueryVariables,
  APITypes.GetUserSkillQuery
>;
export const listUserSkills = /* GraphQL */ `query ListUserSkills(
  $filter: ModelUserSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      userId
      createdAt
      updatedAt
      userUserSkillsId
      skillUserSkillsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserSkillsQueryVariables,
  APITypes.ListUserSkillsQuery
>;
export const userSkillsBySkillId = /* GraphQL */ `query UserSkillsBySkillId(
  $skillId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  userSkillsBySkillId(
    skillId: $skillId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      userId
      createdAt
      updatedAt
      userUserSkillsId
      skillUserSkillsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserSkillsBySkillIdQueryVariables,
  APITypes.UserSkillsBySkillIdQuery
>;
export const userSkillsByUserId = /* GraphQL */ `query UserSkillsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  userSkillsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      userId
      createdAt
      updatedAt
      userUserSkillsId
      skillUserSkillsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserSkillsByUserIdQueryVariables,
  APITypes.UserSkillsByUserIdQuery
>;
export const getDrill = /* GraphQL */ `query GetDrill($id: ID!) {
  getDrill(id: $id) {
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
` as GeneratedQuery<APITypes.GetDrillQueryVariables, APITypes.GetDrillQuery>;
export const listDrills = /* GraphQL */ `query ListDrills(
  $filter: ModelDrillFilterInput
  $limit: Int
  $nextToken: String
) {
  listDrills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDrillsQueryVariables,
  APITypes.ListDrillsQuery
>;
export const drillsBySkillId = /* GraphQL */ `query DrillsBySkillId(
  $skillId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDrillFilterInput
  $limit: Int
  $nextToken: String
) {
  drillsBySkillId(
    skillId: $skillId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DrillsBySkillIdQueryVariables,
  APITypes.DrillsBySkillIdQuery
>;
export const getSession = /* GraphQL */ `query GetSession($id: ID!) {
  getSession(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSessionQueryVariables,
  APITypes.GetSessionQuery
>;
export const listSessions = /* GraphQL */ `query ListSessions(
  $filter: ModelSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSessionsQueryVariables,
  APITypes.ListSessionsQuery
>;
export const sessionsByUserId = /* GraphQL */ `query SessionsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  sessionsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SessionsByUserIdQueryVariables,
  APITypes.SessionsByUserIdQuery
>;
export const getSessionDrill = /* GraphQL */ `query GetSessionDrill($id: ID!) {
  getSessionDrill(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSessionDrillQueryVariables,
  APITypes.GetSessionDrillQuery
>;
export const listSessionDrills = /* GraphQL */ `query ListSessionDrills(
  $filter: ModelSessionDrillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSessionDrills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      isCompleted
      sessionId
      drillId
      mode
      playingCareer
      createdAt
      updatedAt
      drillSessionDrillsId
      sessionSessionDrillsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSessionDrillsQueryVariables,
  APITypes.ListSessionDrillsQuery
>;
export const sessionDrillsBySessionId = /* GraphQL */ `query SessionDrillsBySessionId(
  $sessionId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSessionDrillFilterInput
  $limit: Int
  $nextToken: String
) {
  sessionDrillsBySessionId(
    sessionId: $sessionId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      isCompleted
      sessionId
      drillId
      mode
      playingCareer
      createdAt
      updatedAt
      drillSessionDrillsId
      sessionSessionDrillsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SessionDrillsBySessionIdQueryVariables,
  APITypes.SessionDrillsBySessionIdQuery
>;
export const sessionDrillsByDrillId = /* GraphQL */ `query SessionDrillsByDrillId(
  $drillId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSessionDrillFilterInput
  $limit: Int
  $nextToken: String
) {
  sessionDrillsByDrillId(
    drillId: $drillId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      isCompleted
      sessionId
      drillId
      mode
      playingCareer
      createdAt
      updatedAt
      drillSessionDrillsId
      sessionSessionDrillsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SessionDrillsByDrillIdQueryVariables,
  APITypes.SessionDrillsByDrillIdQuery
>;
export const getCourse = /* GraphQL */ `query GetCourse($id: ID!) {
  getCourse(id: $id) {
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
` as GeneratedQuery<APITypes.GetCourseQueryVariables, APITypes.GetCourseQuery>;
export const listCourses = /* GraphQL */ `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoursesQueryVariables,
  APITypes.ListCoursesQuery
>;
export const getHole = /* GraphQL */ `query GetHole($id: ID!) {
  getHole(id: $id) {
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
` as GeneratedQuery<APITypes.GetHoleQueryVariables, APITypes.GetHoleQuery>;
export const listHoles = /* GraphQL */ `query ListHoles(
  $filter: ModelHoleFilterInput
  $limit: Int
  $nextToken: String
) {
  listHoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListHolesQueryVariables, APITypes.ListHolesQuery>;
export const holesByCourseId = /* GraphQL */ `query HolesByCourseId(
  $courseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelHoleFilterInput
  $limit: Int
  $nextToken: String
) {
  holesByCourseId(
    courseId: $courseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.HolesByCourseIdQueryVariables,
  APITypes.HolesByCourseIdQuery
>;
export const getCourseSession = /* GraphQL */ `query GetCourseSession($id: ID!) {
  getCourseSession(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCourseSessionQueryVariables,
  APITypes.GetCourseSessionQuery
>;
export const listCourseSessions = /* GraphQL */ `query ListCourseSessions(
  $filter: ModelCourseSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseSessionsQueryVariables,
  APITypes.ListCourseSessionsQuery
>;
export const courseSessionsByUserId = /* GraphQL */ `query CourseSessionsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  courseSessionsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseSessionsByUserIdQueryVariables,
  APITypes.CourseSessionsByUserIdQuery
>;
export const courseSessionsByCourseId = /* GraphQL */ `query CourseSessionsByCourseId(
  $courseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  courseSessionsByCourseId(
    courseId: $courseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CourseSessionsByCourseIdQueryVariables,
  APITypes.CourseSessionsByCourseIdQuery
>;
export const getSessionHole = /* GraphQL */ `query GetSessionHole($id: ID!) {
  getSessionHole(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSessionHoleQueryVariables,
  APITypes.GetSessionHoleQuery
>;
export const listSessionHoles = /* GraphQL */ `query ListSessionHoles(
  $filter: ModelSessionHoleFilterInput
  $limit: Int
  $nextToken: String
) {
  listSessionHoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      isCompleted
      courseSessionId
      holeId
      createdAt
      updatedAt
      holeSessionHolesId
      courseSessionSessionHolesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSessionHolesQueryVariables,
  APITypes.ListSessionHolesQuery
>;
export const sessionHolesByCourseSessionId = /* GraphQL */ `query SessionHolesByCourseSessionId(
  $courseSessionId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSessionHoleFilterInput
  $limit: Int
  $nextToken: String
) {
  sessionHolesByCourseSessionId(
    courseSessionId: $courseSessionId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      isCompleted
      courseSessionId
      holeId
      createdAt
      updatedAt
      holeSessionHolesId
      courseSessionSessionHolesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SessionHolesByCourseSessionIdQueryVariables,
  APITypes.SessionHolesByCourseSessionIdQuery
>;
export const sessionHolesByHoleId = /* GraphQL */ `query SessionHolesByHoleId(
  $holeId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSessionHoleFilterInput
  $limit: Int
  $nextToken: String
) {
  sessionHolesByHoleId(
    holeId: $holeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      isCompleted
      courseSessionId
      holeId
      createdAt
      updatedAt
      holeSessionHolesId
      courseSessionSessionHolesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SessionHolesByHoleIdQueryVariables,
  APITypes.SessionHolesByHoleIdQuery
>;
export const getBullseyeSession = /* GraphQL */ `query GetBullseyeSession($id: ID!) {
  getBullseyeSession(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBullseyeSessionQueryVariables,
  APITypes.GetBullseyeSessionQuery
>;
export const listBullseyeSessions = /* GraphQL */ `query ListBullseyeSessions(
  $filter: ModelBullseyeSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listBullseyeSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      isCompleted
      difficulty
      scenario
      playingCareer
      createdAt
      updatedAt
      userBullseyeSessionsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBullseyeSessionsQueryVariables,
  APITypes.ListBullseyeSessionsQuery
>;
export const bullseyeSessionsByUserId = /* GraphQL */ `query BullseyeSessionsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBullseyeSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  bullseyeSessionsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      isCompleted
      difficulty
      scenario
      playingCareer
      createdAt
      updatedAt
      userBullseyeSessionsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BullseyeSessionsByUserIdQueryVariables,
  APITypes.BullseyeSessionsByUserIdQuery
>;
export const getTargetSet = /* GraphQL */ `query GetTargetSet($id: ID!) {
  getTargetSet(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTargetSetQueryVariables,
  APITypes.GetTargetSetQuery
>;
export const listTargetSets = /* GraphQL */ `query ListTargetSets(
  $filter: ModelTargetSetFilterInput
  $limit: Int
  $nextToken: String
) {
  listTargetSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      name
      createdAt
      updatedAt
      userTargetSetsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTargetSetsQueryVariables,
  APITypes.ListTargetSetsQuery
>;
export const targetSetsByUserId = /* GraphQL */ `query TargetSetsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTargetSetFilterInput
  $limit: Int
  $nextToken: String
) {
  targetSetsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      name
      createdAt
      updatedAt
      userTargetSetsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TargetSetsByUserIdQueryVariables,
  APITypes.TargetSetsByUserIdQuery
>;
export const getUserBullseye = /* GraphQL */ `query GetUserBullseye($id: ID!) {
  getUserBullseye(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserBullseyeQueryVariables,
  APITypes.GetUserBullseyeQuery
>;
export const listUserBullseyes = /* GraphQL */ `query ListUserBullseyes(
  $filter: ModelUserBullseyeFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserBullseyes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      notes
      id
      createdAt
      updatedAt
      userBullseyeId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserBullseyesQueryVariables,
  APITypes.ListUserBullseyesQuery
>;
export const userBullseyesByUserId = /* GraphQL */ `query UserBullseyesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserBullseyeFilterInput
  $limit: Int
  $nextToken: String
) {
  userBullseyesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      userId
      notes
      id
      createdAt
      updatedAt
      userBullseyeId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserBullseyesByUserIdQueryVariables,
  APITypes.UserBullseyesByUserIdQuery
>;
export const getGridGameSession = /* GraphQL */ `query GetGridGameSession($id: ID!) {
  getGridGameSession(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGridGameSessionQueryVariables,
  APITypes.GetGridGameSessionQuery
>;
export const listGridGameSessions = /* GraphQL */ `query ListGridGameSessions(
  $filter: ModelGridGameSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listGridGameSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      targetDistance
      shots
      isCompleted
      createdAt
      updatedAt
      userGridGameSessionsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGridGameSessionsQueryVariables,
  APITypes.ListGridGameSessionsQuery
>;
export const gridGameSessionsByUserId = /* GraphQL */ `query GridGameSessionsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGridGameSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  gridGameSessionsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      targetDistance
      shots
      isCompleted
      createdAt
      updatedAt
      userGridGameSessionsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GridGameSessionsByUserIdQueryVariables,
  APITypes.GridGameSessionsByUserIdQuery
>;
export const getGridGameHighScore = /* GraphQL */ `query GetGridGameHighScore($id: ID!) {
  getGridGameHighScore(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGridGameHighScoreQueryVariables,
  APITypes.GetGridGameHighScoreQuery
>;
export const listGridGameHighScores = /* GraphQL */ `query ListGridGameHighScores(
  $filter: ModelGridGameHighScoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listGridGameHighScores(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      gridGameSessionId
      targetDistance
      shots
      createdAt
      updatedAt
      userGridGameHighScoreId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGridGameHighScoresQueryVariables,
  APITypes.ListGridGameHighScoresQuery
>;
export const gridGameHighScoresByUserId = /* GraphQL */ `query GridGameHighScoresByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGridGameHighScoreFilterInput
  $limit: Int
  $nextToken: String
) {
  gridGameHighScoresByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      gridGameSessionId
      targetDistance
      shots
      createdAt
      updatedAt
      userGridGameHighScoreId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GridGameHighScoresByUserIdQueryVariables,
  APITypes.GridGameHighScoresByUserIdQuery
>;
export const gridGameHighScoresByGridGameSessionId = /* GraphQL */ `query GridGameHighScoresByGridGameSessionId(
  $gridGameSessionId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGridGameHighScoreFilterInput
  $limit: Int
  $nextToken: String
) {
  gridGameHighScoresByGridGameSessionId(
    gridGameSessionId: $gridGameSessionId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      gridGameSessionId
      targetDistance
      shots
      createdAt
      updatedAt
      userGridGameHighScoreId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GridGameHighScoresByGridGameSessionIdQueryVariables,
  APITypes.GridGameHighScoresByGridGameSessionIdQuery
>;
export const getAppInfo = /* GraphQL */ `query GetAppInfo($id: ID!) {
  getAppInfo(id: $id) {
    paywallVideoId
    env
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAppInfoQueryVariables,
  APITypes.GetAppInfoQuery
>;
export const listAppInfos = /* GraphQL */ `query ListAppInfos(
  $filter: ModelAppInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      paywallVideoId
      env
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAppInfosQueryVariables,
  APITypes.ListAppInfosQuery
>;
export const getArticle = /* GraphQL */ `query GetArticle($id: ID!) {
  getArticle(id: $id) {
    videoId
    title
    text
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetArticleQueryVariables,
  APITypes.GetArticleQuery
>;
export const listArticles = /* GraphQL */ `query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      videoId
      title
      text
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticlesQueryVariables,
  APITypes.ListArticlesQuery
>;
export const getChallengeDrills = /* GraphQL */ `query GetChallengeDrills($id: ID!) {
  getChallengeDrills(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetChallengeDrillsQueryVariables,
  APITypes.GetChallengeDrillsQuery
>;
export const listChallengeDrills = /* GraphQL */ `query ListChallengeDrills(
  $filter: ModelChallengeDrillsFilterInput
  $limit: Int
  $nextToken: String
) {
  listChallengeDrills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      hidden
      skillId
      drillId
      isFirstStep
      createdAt
      updatedAt
      skillChallengeDrillsId
      drillChallengeDrillsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChallengeDrillsQueryVariables,
  APITypes.ListChallengeDrillsQuery
>;
export const challengeDrillsBySkillId = /* GraphQL */ `query ChallengeDrillsBySkillId(
  $skillId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChallengeDrillsFilterInput
  $limit: Int
  $nextToken: String
) {
  challengeDrillsBySkillId(
    skillId: $skillId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      hidden
      skillId
      drillId
      isFirstStep
      createdAt
      updatedAt
      skillChallengeDrillsId
      drillChallengeDrillsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChallengeDrillsBySkillIdQueryVariables,
  APITypes.ChallengeDrillsBySkillIdQuery
>;
export const challengeDrillsByDrillId = /* GraphQL */ `query ChallengeDrillsByDrillId(
  $drillId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChallengeDrillsFilterInput
  $limit: Int
  $nextToken: String
) {
  challengeDrillsByDrillId(
    drillId: $drillId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      hidden
      skillId
      drillId
      isFirstStep
      createdAt
      updatedAt
      skillChallengeDrillsId
      drillChallengeDrillsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChallengeDrillsByDrillIdQueryVariables,
  APITypes.ChallengeDrillsByDrillIdQuery
>;
export const getCoach = /* GraphQL */ `query GetCoach($id: ID!) {
  getCoach(id: $id) {
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
` as GeneratedQuery<APITypes.GetCoachQueryVariables, APITypes.GetCoachQuery>;
export const listCoaches = /* GraphQL */ `query ListCoaches(
  $filter: ModelCoachFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoachesQueryVariables,
  APITypes.ListCoachesQuery
>;
export const coachesByCognitoId = /* GraphQL */ `query CoachesByCognitoId(
  $cognitoId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachFilterInput
  $limit: Int
  $nextToken: String
) {
  coachesByCognitoId(
    cognitoId: $cognitoId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachesByCognitoIdQueryVariables,
  APITypes.CoachesByCognitoIdQuery
>;
export const getCoachUser = /* GraphQL */ `query GetCoachUser($id: ID!) {
  getCoachUser(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCoachUserQueryVariables,
  APITypes.GetCoachUserQuery
>;
export const listCoachUsers = /* GraphQL */ `query ListCoachUsers(
  $filter: ModelCoachUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoachUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoachUsersQueryVariables,
  APITypes.ListCoachUsersQuery
>;
export const coachUsersByUserId = /* GraphQL */ `query CoachUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachUserFilterInput
  $limit: Int
  $nextToken: String
) {
  coachUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachUsersByUserIdQueryVariables,
  APITypes.CoachUsersByUserIdQuery
>;
export const coachUsersByCoachId = /* GraphQL */ `query CoachUsersByCoachId(
  $coachId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachUserFilterInput
  $limit: Int
  $nextToken: String
) {
  coachUsersByCoachId(
    coachId: $coachId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachUsersByCoachIdQueryVariables,
  APITypes.CoachUsersByCoachIdQuery
>;
export const searchCoachUsers = /* GraphQL */ `query SearchCoachUsers(
  $filter: SearchableCoachUserFilterInput
  $sort: [SearchableCoachUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableCoachUserAggregationInput]
) {
  searchCoachUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchCoachUsersQueryVariables,
  APITypes.SearchCoachUsersQuery
>;
export const getCoachSession = /* GraphQL */ `query GetCoachSession($id: ID!) {
  getCoachSession(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCoachSessionQueryVariables,
  APITypes.GetCoachSessionQuery
>;
export const listCoachSessions = /* GraphQL */ `query ListCoachSessions(
  $filter: ModelCoachSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoachSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoachSessionsQueryVariables,
  APITypes.ListCoachSessionsQuery
>;
export const coachSessionsByCoachId = /* GraphQL */ `query CoachSessionsByCoachId(
  $coachId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  coachSessionsByCoachId(
    coachId: $coachId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachSessionsByCoachIdQueryVariables,
  APITypes.CoachSessionsByCoachIdQuery
>;
export const getCoachSessionUser = /* GraphQL */ `query GetCoachSessionUser($id: ID!) {
  getCoachSessionUser(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCoachSessionUserQueryVariables,
  APITypes.GetCoachSessionUserQuery
>;
export const listCoachSessionUsers = /* GraphQL */ `query ListCoachSessionUsers(
  $filter: ModelCoachSessionUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoachSessionUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      coachId
      coachSessionId
      timesPlayed
      lastCompleted
      createdAt
      updatedAt
      userMyCoachSessionsId
      coachSessionStudentsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoachSessionUsersQueryVariables,
  APITypes.ListCoachSessionUsersQuery
>;
export const coachSessionUsersByUserId = /* GraphQL */ `query CoachSessionUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachSessionUserFilterInput
  $limit: Int
  $nextToken: String
) {
  coachSessionUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      coachId
      coachSessionId
      timesPlayed
      lastCompleted
      createdAt
      updatedAt
      userMyCoachSessionsId
      coachSessionStudentsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachSessionUsersByUserIdQueryVariables,
  APITypes.CoachSessionUsersByUserIdQuery
>;
export const coachSessionUsersByCoachId = /* GraphQL */ `query CoachSessionUsersByCoachId(
  $coachId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachSessionUserFilterInput
  $limit: Int
  $nextToken: String
) {
  coachSessionUsersByCoachId(
    coachId: $coachId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      coachId
      coachSessionId
      timesPlayed
      lastCompleted
      createdAt
      updatedAt
      userMyCoachSessionsId
      coachSessionStudentsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachSessionUsersByCoachIdQueryVariables,
  APITypes.CoachSessionUsersByCoachIdQuery
>;
export const coachSessionUsersByCoachSessionId = /* GraphQL */ `query CoachSessionUsersByCoachSessionId(
  $coachSessionId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachSessionUserFilterInput
  $limit: Int
  $nextToken: String
) {
  coachSessionUsersByCoachSessionId(
    coachSessionId: $coachSessionId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      coachId
      coachSessionId
      timesPlayed
      lastCompleted
      createdAt
      updatedAt
      userMyCoachSessionsId
      coachSessionStudentsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachSessionUsersByCoachSessionIdQueryVariables,
  APITypes.CoachSessionUsersByCoachSessionIdQuery
>;
export const getCoachUserNotes = /* GraphQL */ `query GetCoachUserNotes($id: ID!) {
  getCoachUserNotes(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCoachUserNotesQueryVariables,
  APITypes.GetCoachUserNotesQuery
>;
export const listCoachUserNotes = /* GraphQL */ `query ListCoachUserNotes(
  $filter: ModelCoachUserNotesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoachUserNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      coachUserId
      notes
      createdAt
      updatedAt
      coachUserNotesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoachUserNotesQueryVariables,
  APITypes.ListCoachUserNotesQuery
>;
export const coachUserNotesByCoachUserId = /* GraphQL */ `query CoachUserNotesByCoachUserId(
  $coachUserId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachUserNotesFilterInput
  $limit: Int
  $nextToken: String
) {
  coachUserNotesByCoachUserId(
    coachUserId: $coachUserId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      coachUserId
      notes
      createdAt
      updatedAt
      coachUserNotesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachUserNotesByCoachUserIdQueryVariables,
  APITypes.CoachUserNotesByCoachUserIdQuery
>;
export const getCoachSessionDrill = /* GraphQL */ `query GetCoachSessionDrill($id: ID!) {
  getCoachSessionDrill(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCoachSessionDrillQueryVariables,
  APITypes.GetCoachSessionDrillQuery
>;
export const listCoachSessionDrills = /* GraphQL */ `query ListCoachSessionDrills(
  $filter: ModelCoachSessionDrillFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoachSessionDrills(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      coachSessionId
      drillId
      createdAt
      updatedAt
      coachSessionDrillsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoachSessionDrillsQueryVariables,
  APITypes.ListCoachSessionDrillsQuery
>;
export const coachSessionDrillsByCoachSessionId = /* GraphQL */ `query CoachSessionDrillsByCoachSessionId(
  $coachSessionId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachSessionDrillFilterInput
  $limit: Int
  $nextToken: String
) {
  coachSessionDrillsByCoachSessionId(
    coachSessionId: $coachSessionId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      coachSessionId
      drillId
      createdAt
      updatedAt
      coachSessionDrillsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachSessionDrillsByCoachSessionIdQueryVariables,
  APITypes.CoachSessionDrillsByCoachSessionIdQuery
>;
export const coachSessionDrillsByDrillId = /* GraphQL */ `query CoachSessionDrillsByDrillId(
  $drillId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachSessionDrillFilterInput
  $limit: Int
  $nextToken: String
) {
  coachSessionDrillsByDrillId(
    drillId: $drillId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      coachSessionId
      drillId
      createdAt
      updatedAt
      coachSessionDrillsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachSessionDrillsByDrillIdQueryVariables,
  APITypes.CoachSessionDrillsByDrillIdQuery
>;
export const getCoachDrillNotes = /* GraphQL */ `query GetCoachDrillNotes($id: ID!) {
  getCoachDrillNotes(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCoachDrillNotesQueryVariables,
  APITypes.GetCoachDrillNotesQuery
>;
export const listCoachDrillNotes = /* GraphQL */ `query ListCoachDrillNotes(
  $filter: ModelCoachDrillNotesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoachDrillNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      coachId
      drillId
      notes
      share
      createdAt
      updatedAt
      drillCoachNotesId
      coachCoachDrillNotesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoachDrillNotesQueryVariables,
  APITypes.ListCoachDrillNotesQuery
>;
export const coachDrillNotesByCoachId = /* GraphQL */ `query CoachDrillNotesByCoachId(
  $coachId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachDrillNotesFilterInput
  $limit: Int
  $nextToken: String
) {
  coachDrillNotesByCoachId(
    coachId: $coachId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      coachId
      drillId
      notes
      share
      createdAt
      updatedAt
      drillCoachNotesId
      coachCoachDrillNotesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachDrillNotesByCoachIdQueryVariables,
  APITypes.CoachDrillNotesByCoachIdQuery
>;
export const coachDrillNotesByDrillId = /* GraphQL */ `query CoachDrillNotesByDrillId(
  $drillId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCoachDrillNotesFilterInput
  $limit: Int
  $nextToken: String
) {
  coachDrillNotesByDrillId(
    drillId: $drillId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      coachId
      drillId
      notes
      share
      createdAt
      updatedAt
      drillCoachNotesId
      coachCoachDrillNotesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoachDrillNotesByDrillIdQueryVariables,
  APITypes.CoachDrillNotesByDrillIdQuery
>;
