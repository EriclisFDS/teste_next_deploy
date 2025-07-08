/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UpdateFeedbackInput = {
  id: string,
  score?: number | null,
  details?: string | null,
  screen?: string | null,
  userId?: string | null,
  userFeedbacksId?: string | null,
};

export type ModelFeedbackConditionInput = {
  score?: ModelIntInput | null,
  details?: ModelStringInput | null,
  screen?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelFeedbackConditionInput | null > | null,
  or?: Array< ModelFeedbackConditionInput | null > | null,
  not?: ModelFeedbackConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userFeedbacksId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Feedback = {
  __typename: "Feedback",
  id: string,
  score?: number | null,
  details?: string | null,
  screen?: string | null,
  userId: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userFeedbacksId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  username?: string | null,
  gender?: string | null,
  age?: string | null,
  handicap?: string | null,
  objectives?: Array< string | null > | null,
  evaluation?:  Array<Evaluation | null > | null,
  mySessions?: ModelSessionConnection | null,
  myDrills?: ModelUserDrillsConnection | null,
  featureFlags?:  Array<FeatureFlag | null > | null,
  feedbacks?: ModelFeedbackConnection | null,
  userSkills?: ModelUserSkillConnection | null,
  vote?: ModelVoteConnection | null,
  courseSessions?: ModelCourseSessionConnection | null,
  bullseyeSessions?: ModelBullseyeSessionConnection | null,
  bullseye?: ModelUserBullseyeConnection | null,
  targetSets?: ModelTargetSetConnection | null,
  gridGameSessions?: ModelGridGameSessionConnection | null,
  gridGameHighScore?: ModelGridGameHighScoreConnection | null,
  deleted?: boolean | null,
  coachUserId?: string | null,
  myCoach?: CoachUser | null,
  myCoachSessions?: ModelCoachSessionUserConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Evaluation = {
  __typename: "Evaluation",
  name: string,
  score: number,
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection",
  items:  Array<Session | null >,
  nextToken?: string | null,
};

export type Session = {
  __typename: "Session",
  id: string,
  parentId?: string | null,
  name?: string | null,
  userId: string,
  user?: User | null,
  sessionDrills?: ModelSessionDrillConnection | null,
  duration?: number | null,
  isCompleted?: boolean | null,
  saved?: boolean | null,
  mode?: SessionMode | null,
  scenario?: SessionScenario | null,
  createdAt: string,
  updatedAt: string,
  userMySessionsId?: string | null,
  owner?: string | null,
};

export type ModelSessionDrillConnection = {
  __typename: "ModelSessionDrillConnection",
  items:  Array<SessionDrill | null >,
  nextToken?: string | null,
};

export type SessionDrill = {
  __typename: "SessionDrill",
  id: string,
  isCompleted: boolean,
  sessionId: string,
  session?: Session | null,
  drillId: string,
  drill?: Drill | null,
  results?:  Array<Result | null > | null,
  mode?: SessionMode | null,
  playingCareer?: boolean | null,
  createdAt: string,
  updatedAt: string,
  drillSessionDrillsId?: string | null,
  sessionSessionDrillsId?: string | null,
  owner?: string | null,
};

export type Drill = {
  __typename: "Drill",
  id: string,
  name: string,
  trackingName?: string | null,
  description: string,
  goal: string,
  videoId: string,
  duration: number,
  skillId: string,
  skill?: Skill | null,
  sessionDrills?: ModelSessionDrillConnection | null,
  hidden?: boolean | null,
  tries?: number | null,
  level?: number | null,
  club?: string | null,
  title?: string | null,
  challenge: string,
  users?: ModelUserDrillsConnection | null,
  isDynamic?: boolean | null,
  thirdOption?: boolean | null,
  dynamicDifficulties?: DynamicDrillDifficulty | null,
  challengeDrills?: ModelChallengeDrillsConnection | null,
  type?: DrillType | null,
  coachNotes?: ModelCoachDrillNotesConnection | null,
  coachSessionDrills?: ModelCoachSessionDrillConnection | null,
  createdAt: string,
  updatedAt: string,
  skillDrillsId?: string | null,
};

export type Skill = {
  __typename: "Skill",
  id: string,
  name: string,
  trackingName?: string | null,
  description?: string | null,
  drills?: ModelDrillConnection | null,
  userSkills?: ModelUserSkillConnection | null,
  games?: Array< string | null > | null,
  challengeDrills?: ModelChallengeDrillsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDrillConnection = {
  __typename: "ModelDrillConnection",
  items:  Array<Drill | null >,
  nextToken?: string | null,
};

export type ModelUserSkillConnection = {
  __typename: "ModelUserSkillConnection",
  items:  Array<UserSkill | null >,
  nextToken?: string | null,
};

export type UserSkill = {
  __typename: "UserSkill",
  id: string,
  level?: number | null,
  greenZone?: number | null,
  redZone?: number | null,
  yellowZone?: number | null,
  holeZone?: number | null,
  outZone?: number | null,
  leftYellowZone?: number | null,
  rightYellowZone?: number | null,
  leftRedZone?: number | null,
  rightRedZone?: number | null,
  streak?: number | null,
  skillId: string,
  skill?: Skill | null,
  userId: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userUserSkillsId?: string | null,
  skillUserSkillsId?: string | null,
  owner?: string | null,
};

export type ModelChallengeDrillsConnection = {
  __typename: "ModelChallengeDrillsConnection",
  items:  Array<ChallengeDrills | null >,
  nextToken?: string | null,
};

export type ChallengeDrills = {
  __typename: "ChallengeDrills",
  id: string,
  hidden: boolean,
  skillId: string,
  skill?: Skill | null,
  drillId: string,
  drill?: Drill | null,
  isFirstStep: boolean,
  createdAt: string,
  updatedAt: string,
  skillChallengeDrillsId?: string | null,
  drillChallengeDrillsId?: string | null,
};

export type ModelUserDrillsConnection = {
  __typename: "ModelUserDrillsConnection",
  items:  Array<UserDrills | null >,
  nextToken?: string | null,
};

export type UserDrills = {
  __typename: "UserDrills",
  userId: string,
  user?: User | null,
  drillId: string,
  drill?: Drill | null,
  notes?: string | null,
  currentLevel?: number | null,
  lastNumberOfHits?: number | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  userMyDrillsId?: string | null,
  drillUsersId?: string | null,
  owner?: string | null,
};

export type DynamicDrillDifficulty = {
  __typename: "DynamicDrillDifficulty",
  beginner: string,
  medium: string,
  advanced: string,
  pro: string,
};

export enum DrillType {
  PRACTICAL = "PRACTICAL",
  TECHNICAL = "TECHNICAL",
}


export type ModelCoachDrillNotesConnection = {
  __typename: "ModelCoachDrillNotesConnection",
  items:  Array<CoachDrillNotes | null >,
  nextToken?: string | null,
};

export type CoachDrillNotes = {
  __typename: "CoachDrillNotes",
  id: string,
  coachId: string,
  coach?: Coach | null,
  drillId: string,
  drill?: Drill | null,
  notes?: string | null,
  share?: boolean | null,
  createdAt: string,
  updatedAt: string,
  drillCoachNotesId?: string | null,
  coachCoachDrillNotesId?: string | null,
  owner?: string | null,
};

export type Coach = {
  __typename: "Coach",
  id: string,
  cognitoId: string,
  profileImage?: S3Object | null,
  name: string,
  lastName: string,
  phoneNumber?: string | null,
  email?: string | null,
  bio?: string | null,
  school?: string | null,
  zipCode?: string | null,
  address?: string | null,
  state?: string | null,
  city?: string | null,
  country?: string | null,
  students?: ModelCoachUserConnection | null,
  coachDrillNotes?: ModelCoachDrillNotesConnection | null,
  coachSessions?: ModelCoachSessionConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  key: string,
  region: string,
};

export type ModelCoachUserConnection = {
  __typename: "ModelCoachUserConnection",
  items:  Array<CoachUser | null >,
  nextToken?: string | null,
};

export type CoachUser = {
  __typename: "CoachUser",
  id: string,
  userId?: string | null,
  user?: User | null,
  coachId?: string | null,
  coach?: Coach | null,
  notes?: ModelCoachUserNotesConnection | null,
  status?: CoachUserStatus | null,
  createdAt: string,
  updatedAt: string,
  coachStudentsId?: string | null,
  owner?: string | null,
};

export type ModelCoachUserNotesConnection = {
  __typename: "ModelCoachUserNotesConnection",
  items:  Array<CoachUserNotes | null >,
  nextToken?: string | null,
};

export type CoachUserNotes = {
  __typename: "CoachUserNotes",
  id: string,
  coachUserId: string,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
  coachUserNotesId?: string | null,
  owner?: string | null,
};

export enum CoachUserStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  DENIED = "DENIED",
}


export type ModelCoachSessionConnection = {
  __typename: "ModelCoachSessionConnection",
  items:  Array<CoachSession | null >,
  nextToken?: string | null,
};

export type CoachSession = {
  __typename: "CoachSession",
  id: string,
  coachId?: string | null,
  coach?: Coach | null,
  name?: string | null,
  students?: ModelCoachSessionUserConnection | null,
  drills?: ModelCoachSessionDrillConnection | null,
  duration?: number | null,
  createdAt: string,
  updatedAt: string,
  coachCoachSessionsId?: string | null,
  owner?: string | null,
};

export type ModelCoachSessionUserConnection = {
  __typename: "ModelCoachSessionUserConnection",
  items:  Array<CoachSessionUser | null >,
  nextToken?: string | null,
};

export type CoachSessionUser = {
  __typename: "CoachSessionUser",
  id: string,
  userId: string,
  user?: User | null,
  coachId: string,
  coach?: User | null,
  coachSessionId?: string | null,
  coachSession?: CoachSession | null,
  timesPlayed?: number | null,
  lastCompleted?: string | null,
  createdAt: string,
  updatedAt: string,
  userMyCoachSessionsId?: string | null,
  coachSessionStudentsId?: string | null,
  owner?: string | null,
};

export type ModelCoachSessionDrillConnection = {
  __typename: "ModelCoachSessionDrillConnection",
  items:  Array<CoachSessionDrill | null >,
  nextToken?: string | null,
};

export type CoachSessionDrill = {
  __typename: "CoachSessionDrill",
  id: string,
  coachSessionId?: string | null,
  drillId: string,
  drill?: Drill | null,
  createdAt: string,
  updatedAt: string,
  coachSessionDrillsId?: string | null,
};

export type Result = {
  __typename: "Result",
  coordinates?: Array< number | null > | null,
  level?: number | null,
  zone?: Zones | null,
  isMiss: boolean,
};

export enum Zones {
  GREEN = "GREEN",
  YELLOW = "YELLOW",
  RED = "RED",
  HOLE = "HOLE",
  OUT = "OUT",
  LEFT_YELLOW = "LEFT_YELLOW",
  RIGHT_YELLOW = "RIGHT_YELLOW",
  LEFT_RED = "LEFT_RED",
  RIGHT_RED = "RIGHT_RED",
}


export enum SessionMode {
  CALLIBRATION = "CALLIBRATION",
  CHALLENGE = "CHALLENGE",
  PRACTICE = "PRACTICE",
}


export enum SessionScenario {
  SIMULATOR = "SIMULATOR",
  DRIVING_RANGE = "DRIVING_RANGE",
}


export type FeatureFlag = {
  __typename: "FeatureFlag",
  name: string,
  value: boolean,
};

export type ModelFeedbackConnection = {
  __typename: "ModelFeedbackConnection",
  items:  Array<Feedback | null >,
  nextToken?: string | null,
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection",
  items:  Array<Vote | null >,
  nextToken?: string | null,
};

export type Vote = {
  __typename: "Vote",
  id: string,
  feature: string,
  userId: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userVoteId?: string | null,
};

export type ModelCourseSessionConnection = {
  __typename: "ModelCourseSessionConnection",
  items:  Array<CourseSession | null >,
  nextToken?: string | null,
};

export type CourseSession = {
  __typename: "CourseSession",
  id: string,
  userId: string,
  user?: User | null,
  sessionHoles?: ModelSessionHoleConnection | null,
  isCompleted?: boolean | null,
  courseId: string,
  course?: Course | null,
  playingCareer?: boolean | null,
  createdAt: string,
  updatedAt: string,
  userCourseSessionsId?: string | null,
  courseCourseSessionsId?: string | null,
  owner?: string | null,
};

export type ModelSessionHoleConnection = {
  __typename: "ModelSessionHoleConnection",
  items:  Array<SessionHole | null >,
  nextToken?: string | null,
};

export type SessionHole = {
  __typename: "SessionHole",
  id: string,
  isCompleted: boolean,
  courseSessionId: string,
  courseSession?: CourseSession | null,
  holeId: string,
  hole?: Hole | null,
  results?:  Array<Result | null > | null,
  createdAt: string,
  updatedAt: string,
  holeSessionHolesId?: string | null,
  courseSessionSessionHolesId?: string | null,
  owner?: string | null,
};

export type Hole = {
  __typename: "Hole",
  id: string,
  number: number,
  par: number,
  distance: number,
  flagDistance: number,
  courseId: string,
  course?: Course | null,
  image: S3Object,
  coverImage: S3Object,
  sessionHoles?: ModelSessionHoleConnection | null,
  water?: Array< number | null > | null,
  bunker?: Array< number | null > | null,
  woods?: Array< number | null > | null,
  flag: number,
  green?: Array< number | null > | null,
  createdAt: string,
  updatedAt: string,
  courseHolesId?: string | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  name: string,
  description?: string | null,
  holes?: ModelHoleConnection | null,
  courseSessions?: ModelCourseSessionConnection | null,
  image: S3Object,
  createdAt: string,
  updatedAt: string,
};

export type ModelHoleConnection = {
  __typename: "ModelHoleConnection",
  items:  Array<Hole | null >,
  nextToken?: string | null,
};

export type ModelBullseyeSessionConnection = {
  __typename: "ModelBullseyeSessionConnection",
  items:  Array<BullseyeSession | null >,
  nextToken?: string | null,
};

export type BullseyeSession = {
  __typename: "BullseyeSession",
  id: string,
  userId: string,
  user?: User | null,
  targets?:  Array<Targets | null > | null,
  isCompleted?: boolean | null,
  difficulty?: number | null,
  scenario?: SessionScenario | null,
  results?:  Array<BullseyeResult | null > | null,
  playingCareer?: boolean | null,
  createdAt: string,
  updatedAt: string,
  userBullseyeSessionsId?: string | null,
  owner?: string | null,
};

export type Targets = {
  __typename: "Targets",
  color?: string | null,
  distance?: number | null,
};

export type BullseyeResult = {
  __typename: "BullseyeResult",
  result?:  Array<Result | null > | null,
  distance?: number | null,
};

export type ModelUserBullseyeConnection = {
  __typename: "ModelUserBullseyeConnection",
  items:  Array<UserBullseye | null >,
  nextToken?: string | null,
};

export type UserBullseye = {
  __typename: "UserBullseye",
  userId: string,
  user?: User | null,
  notes?: string | null,
  scores?:  Array<BullseyeScore | null > | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  userBullseyeId?: string | null,
  owner?: string | null,
};

export type BullseyeScore = {
  __typename: "BullseyeScore",
  difficulty?: number | null,
  score?: number | null,
};

export type ModelTargetSetConnection = {
  __typename: "ModelTargetSetConnection",
  items:  Array<TargetSet | null >,
  nextToken?: string | null,
};

export type TargetSet = {
  __typename: "TargetSet",
  id: string,
  userId: string,
  user?: User | null,
  targets?:  Array<Targets | null > | null,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
  userTargetSetsId?: string | null,
  owner?: string | null,
};

export type ModelGridGameSessionConnection = {
  __typename: "ModelGridGameSessionConnection",
  items:  Array<GridGameSession | null >,
  nextToken?: string | null,
};

export type GridGameSession = {
  __typename: "GridGameSession",
  id: string,
  userId: string,
  user?: User | null,
  targetDistance: number,
  shots: number,
  distances?:  Array<DistanceRecord | null > | null,
  isCompleted: boolean,
  createdAt: string,
  updatedAt: string,
  userGridGameSessionsId?: string | null,
  owner?: string | null,
};

export type DistanceRecord = {
  __typename: "DistanceRecord",
  distance: number,
  shots: number,
};

export type ModelGridGameHighScoreConnection = {
  __typename: "ModelGridGameHighScoreConnection",
  items:  Array<GridGameHighScore | null >,
  nextToken?: string | null,
};

export type GridGameHighScore = {
  __typename: "GridGameHighScore",
  id: string,
  userId: string,
  user?: User | null,
  gridGameSessionId: string,
  targetDistance: number,
  shots: number,
  createdAt: string,
  updatedAt: string,
  userGridGameHighScoreId?: string | null,
  owner?: string | null,
};

export type DeleteFeedbackInput = {
  id: string,
};

export type UpdateVoteInput = {
  id: string,
  feature?: string | null,
  userId?: string | null,
  userVoteId?: string | null,
};

export type ModelVoteConditionInput = {
  feature?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelVoteConditionInput | null > | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  not?: ModelVoteConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userVoteId?: ModelIDInput | null,
};

export type DeleteVoteInput = {
  id: string,
};

export type CreateSkillInput = {
  id?: string | null,
  name: string,
  trackingName?: string | null,
  description?: string | null,
  games?: Array< string | null > | null,
};

export type ModelSkillConditionInput = {
  name?: ModelStringInput | null,
  trackingName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  games?: ModelStringInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateSkillInput = {
  id: string,
  name?: string | null,
  trackingName?: string | null,
  description?: string | null,
  games?: Array< string | null > | null,
};

export type DeleteSkillInput = {
  id: string,
};

export type CreateUserSkillInput = {
  id?: string | null,
  level?: number | null,
  greenZone?: number | null,
  redZone?: number | null,
  yellowZone?: number | null,
  holeZone?: number | null,
  outZone?: number | null,
  leftYellowZone?: number | null,
  rightYellowZone?: number | null,
  leftRedZone?: number | null,
  rightRedZone?: number | null,
  streak?: number | null,
  skillId: string,
  userId: string,
  userUserSkillsId?: string | null,
  skillUserSkillsId?: string | null,
};

export type ModelUserSkillConditionInput = {
  level?: ModelIntInput | null,
  greenZone?: ModelIntInput | null,
  redZone?: ModelIntInput | null,
  yellowZone?: ModelIntInput | null,
  holeZone?: ModelIntInput | null,
  outZone?: ModelIntInput | null,
  leftYellowZone?: ModelIntInput | null,
  rightYellowZone?: ModelIntInput | null,
  leftRedZone?: ModelIntInput | null,
  rightRedZone?: ModelIntInput | null,
  streak?: ModelIntInput | null,
  skillId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserSkillConditionInput | null > | null,
  or?: Array< ModelUserSkillConditionInput | null > | null,
  not?: ModelUserSkillConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userUserSkillsId?: ModelIDInput | null,
  skillUserSkillsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type DeleteUserSkillInput = {
  id: string,
};

export type CreateDrillInput = {
  id?: string | null,
  name: string,
  trackingName?: string | null,
  description: string,
  goal: string,
  videoId: string,
  duration: number,
  skillId: string,
  hidden?: boolean | null,
  tries?: number | null,
  level?: number | null,
  club?: string | null,
  title?: string | null,
  challenge: string,
  isDynamic?: boolean | null,
  thirdOption?: boolean | null,
  dynamicDifficulties?: DynamicDrillDifficultyInput | null,
  type?: DrillType | null,
  skillDrillsId?: string | null,
};

export type DynamicDrillDifficultyInput = {
  beginner: string,
  medium: string,
  advanced: string,
  pro: string,
};

export type ModelDrillConditionInput = {
  name?: ModelStringInput | null,
  trackingName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  goal?: ModelStringInput | null,
  videoId?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  skillId?: ModelIDInput | null,
  hidden?: ModelBooleanInput | null,
  tries?: ModelIntInput | null,
  level?: ModelIntInput | null,
  club?: ModelStringInput | null,
  title?: ModelStringInput | null,
  challenge?: ModelStringInput | null,
  isDynamic?: ModelBooleanInput | null,
  thirdOption?: ModelBooleanInput | null,
  type?: ModelDrillTypeInput | null,
  and?: Array< ModelDrillConditionInput | null > | null,
  or?: Array< ModelDrillConditionInput | null > | null,
  not?: ModelDrillConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  skillDrillsId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelDrillTypeInput = {
  eq?: DrillType | null,
  ne?: DrillType | null,
};

export type UpdateDrillInput = {
  id: string,
  name?: string | null,
  trackingName?: string | null,
  description?: string | null,
  goal?: string | null,
  videoId?: string | null,
  duration?: number | null,
  skillId?: string | null,
  hidden?: boolean | null,
  tries?: number | null,
  level?: number | null,
  club?: string | null,
  title?: string | null,
  challenge?: string | null,
  isDynamic?: boolean | null,
  thirdOption?: boolean | null,
  dynamicDifficulties?: DynamicDrillDifficultyInput | null,
  type?: DrillType | null,
  skillDrillsId?: string | null,
};

export type DeleteDrillInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  image: S3ObjectInput,
};

export type S3ObjectInput = {
  bucket: string,
  key: string,
  region: string,
};

export type ModelCourseConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCourseInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  image?: S3ObjectInput | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateHoleInput = {
  id?: string | null,
  number: number,
  par: number,
  distance: number,
  flagDistance: number,
  courseId: string,
  image: S3ObjectInput,
  coverImage: S3ObjectInput,
  water?: Array< number | null > | null,
  bunker?: Array< number | null > | null,
  woods?: Array< number | null > | null,
  flag: number,
  green?: Array< number | null > | null,
  courseHolesId?: string | null,
};

export type ModelHoleConditionInput = {
  number?: ModelIntInput | null,
  par?: ModelIntInput | null,
  distance?: ModelIntInput | null,
  flagDistance?: ModelIntInput | null,
  courseId?: ModelIDInput | null,
  water?: ModelIntInput | null,
  bunker?: ModelIntInput | null,
  woods?: ModelIntInput | null,
  flag?: ModelIntInput | null,
  green?: ModelIntInput | null,
  and?: Array< ModelHoleConditionInput | null > | null,
  or?: Array< ModelHoleConditionInput | null > | null,
  not?: ModelHoleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  courseHolesId?: ModelIDInput | null,
};

export type UpdateHoleInput = {
  id: string,
  number?: number | null,
  par?: number | null,
  distance?: number | null,
  flagDistance?: number | null,
  courseId?: string | null,
  image?: S3ObjectInput | null,
  coverImage?: S3ObjectInput | null,
  water?: Array< number | null > | null,
  bunker?: Array< number | null > | null,
  woods?: Array< number | null > | null,
  flag?: number | null,
  green?: Array< number | null > | null,
  courseHolesId?: string | null,
};

export type DeleteHoleInput = {
  id: string,
};

export type CreateAppInfoInput = {
  paywallVideoId?: string | null,
  env?: string | null,
  id?: string | null,
};

export type ModelAppInfoConditionInput = {
  paywallVideoId?: ModelStringInput | null,
  env?: ModelStringInput | null,
  and?: Array< ModelAppInfoConditionInput | null > | null,
  or?: Array< ModelAppInfoConditionInput | null > | null,
  not?: ModelAppInfoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AppInfo = {
  __typename: "AppInfo",
  paywallVideoId?: string | null,
  env?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAppInfoInput = {
  paywallVideoId?: string | null,
  env?: string | null,
  id: string,
};

export type DeleteAppInfoInput = {
  id: string,
};

export type CreateArticleInput = {
  videoId?: string | null,
  title?: string | null,
  text?: string | null,
  id?: string | null,
};

export type ModelArticleConditionInput = {
  videoId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Article = {
  __typename: "Article",
  videoId?: string | null,
  title?: string | null,
  text?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateArticleInput = {
  videoId?: string | null,
  title?: string | null,
  text?: string | null,
  id: string,
};

export type DeleteArticleInput = {
  id: string,
};

export type CreateChallengeDrillsInput = {
  id?: string | null,
  hidden: boolean,
  skillId: string,
  drillId: string,
  isFirstStep: boolean,
  skillChallengeDrillsId?: string | null,
  drillChallengeDrillsId?: string | null,
};

export type ModelChallengeDrillsConditionInput = {
  hidden?: ModelBooleanInput | null,
  skillId?: ModelIDInput | null,
  drillId?: ModelIDInput | null,
  isFirstStep?: ModelBooleanInput | null,
  and?: Array< ModelChallengeDrillsConditionInput | null > | null,
  or?: Array< ModelChallengeDrillsConditionInput | null > | null,
  not?: ModelChallengeDrillsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  skillChallengeDrillsId?: ModelIDInput | null,
  drillChallengeDrillsId?: ModelIDInput | null,
};

export type UpdateChallengeDrillsInput = {
  id: string,
  hidden?: boolean | null,
  skillId?: string | null,
  drillId?: string | null,
  isFirstStep?: boolean | null,
  skillChallengeDrillsId?: string | null,
  drillChallengeDrillsId?: string | null,
};

export type DeleteChallengeDrillsInput = {
  id: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  username?: string | null,
  gender?: string | null,
  age?: string | null,
  handicap?: string | null,
  objectives?: Array< string | null > | null,
  evaluation?: Array< EvaluationInput | null > | null,
  featureFlags?: Array< FeatureFlagInput | null > | null,
  deleted?: boolean | null,
  coachUserId?: string | null,
};

export type EvaluationInput = {
  name: string,
  score: number,
};

export type FeatureFlagInput = {
  name: string,
  value: boolean,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  age?: ModelStringInput | null,
  handicap?: ModelStringInput | null,
  objectives?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  coachUserId?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserDrillsInput = {
  userId: string,
  drillId: string,
  notes?: string | null,
  currentLevel?: number | null,
  lastNumberOfHits?: number | null,
  id?: string | null,
  userMyDrillsId?: string | null,
  drillUsersId?: string | null,
};

export type ModelUserDrillsConditionInput = {
  userId?: ModelIDInput | null,
  drillId?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  currentLevel?: ModelIntInput | null,
  lastNumberOfHits?: ModelIntInput | null,
  and?: Array< ModelUserDrillsConditionInput | null > | null,
  or?: Array< ModelUserDrillsConditionInput | null > | null,
  not?: ModelUserDrillsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userMyDrillsId?: ModelIDInput | null,
  drillUsersId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateUserDrillsInput = {
  userId?: string | null,
  drillId?: string | null,
  notes?: string | null,
  currentLevel?: number | null,
  lastNumberOfHits?: number | null,
  id: string,
  userMyDrillsId?: string | null,
  drillUsersId?: string | null,
};

export type DeleteUserDrillsInput = {
  id: string,
};

export type CreateFeedbackInput = {
  id?: string | null,
  score?: number | null,
  details?: string | null,
  screen?: string | null,
  userId: string,
  userFeedbacksId?: string | null,
};

export type CreateVoteInput = {
  id?: string | null,
  feature: string,
  userId: string,
  userVoteId?: string | null,
};

export type UpdateUserSkillInput = {
  id: string,
  level?: number | null,
  greenZone?: number | null,
  redZone?: number | null,
  yellowZone?: number | null,
  holeZone?: number | null,
  outZone?: number | null,
  leftYellowZone?: number | null,
  rightYellowZone?: number | null,
  leftRedZone?: number | null,
  rightRedZone?: number | null,
  streak?: number | null,
  skillId?: string | null,
  userId?: string | null,
  userUserSkillsId?: string | null,
  skillUserSkillsId?: string | null,
};

export type CreateSessionInput = {
  id?: string | null,
  parentId?: string | null,
  name?: string | null,
  userId: string,
  duration?: number | null,
  isCompleted?: boolean | null,
  saved?: boolean | null,
  mode?: SessionMode | null,
  scenario?: SessionScenario | null,
  userMySessionsId?: string | null,
};

export type ModelSessionConditionInput = {
  parentId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  duration?: ModelIntInput | null,
  isCompleted?: ModelBooleanInput | null,
  saved?: ModelBooleanInput | null,
  mode?: ModelSessionModeInput | null,
  scenario?: ModelSessionScenarioInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userMySessionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSessionModeInput = {
  eq?: SessionMode | null,
  ne?: SessionMode | null,
};

export type ModelSessionScenarioInput = {
  eq?: SessionScenario | null,
  ne?: SessionScenario | null,
};

export type UpdateSessionInput = {
  id: string,
  parentId?: string | null,
  name?: string | null,
  userId?: string | null,
  duration?: number | null,
  isCompleted?: boolean | null,
  saved?: boolean | null,
  mode?: SessionMode | null,
  scenario?: SessionScenario | null,
  userMySessionsId?: string | null,
};

export type DeleteSessionInput = {
  id: string,
};

export type CreateSessionDrillInput = {
  id?: string | null,
  isCompleted: boolean,
  sessionId: string,
  drillId: string,
  results?: Array< ResultInput | null > | null,
  mode?: SessionMode | null,
  playingCareer?: boolean | null,
  drillSessionDrillsId?: string | null,
  sessionSessionDrillsId?: string | null,
};

export type ResultInput = {
  coordinates?: Array< number | null > | null,
  level?: number | null,
  zone?: Zones | null,
  isMiss: boolean,
};

export type ModelSessionDrillConditionInput = {
  isCompleted?: ModelBooleanInput | null,
  sessionId?: ModelIDInput | null,
  drillId?: ModelIDInput | null,
  mode?: ModelSessionModeInput | null,
  playingCareer?: ModelBooleanInput | null,
  and?: Array< ModelSessionDrillConditionInput | null > | null,
  or?: Array< ModelSessionDrillConditionInput | null > | null,
  not?: ModelSessionDrillConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  drillSessionDrillsId?: ModelIDInput | null,
  sessionSessionDrillsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateSessionDrillInput = {
  id: string,
  isCompleted?: boolean | null,
  sessionId?: string | null,
  drillId?: string | null,
  results?: Array< ResultInput | null > | null,
  mode?: SessionMode | null,
  playingCareer?: boolean | null,
  drillSessionDrillsId?: string | null,
  sessionSessionDrillsId?: string | null,
};

export type DeleteSessionDrillInput = {
  id: string,
};

export type UpdateCourseSessionInput = {
  id: string,
  userId?: string | null,
  isCompleted?: boolean | null,
  courseId?: string | null,
  playingCareer?: boolean | null,
  userCourseSessionsId?: string | null,
  courseCourseSessionsId?: string | null,
};

export type ModelCourseSessionConditionInput = {
  userId?: ModelIDInput | null,
  isCompleted?: ModelBooleanInput | null,
  courseId?: ModelIDInput | null,
  playingCareer?: ModelBooleanInput | null,
  and?: Array< ModelCourseSessionConditionInput | null > | null,
  or?: Array< ModelCourseSessionConditionInput | null > | null,
  not?: ModelCourseSessionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userCourseSessionsId?: ModelIDInput | null,
  courseCourseSessionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type DeleteCourseSessionInput = {
  id: string,
};

export type CreateSessionHoleInput = {
  id?: string | null,
  isCompleted: boolean,
  courseSessionId: string,
  holeId: string,
  results?: Array< ResultInput | null > | null,
  holeSessionHolesId?: string | null,
  courseSessionSessionHolesId?: string | null,
};

export type ModelSessionHoleConditionInput = {
  isCompleted?: ModelBooleanInput | null,
  courseSessionId?: ModelIDInput | null,
  holeId?: ModelIDInput | null,
  and?: Array< ModelSessionHoleConditionInput | null > | null,
  or?: Array< ModelSessionHoleConditionInput | null > | null,
  not?: ModelSessionHoleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  holeSessionHolesId?: ModelIDInput | null,
  courseSessionSessionHolesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateSessionHoleInput = {
  id: string,
  isCompleted?: boolean | null,
  courseSessionId?: string | null,
  holeId?: string | null,
  results?: Array< ResultInput | null > | null,
  holeSessionHolesId?: string | null,
  courseSessionSessionHolesId?: string | null,
};

export type DeleteSessionHoleInput = {
  id: string,
};

export type CreateBullseyeSessionInput = {
  id?: string | null,
  userId: string,
  targets?: Array< TargetsInput | null > | null,
  isCompleted?: boolean | null,
  difficulty?: number | null,
  scenario?: SessionScenario | null,
  results?: Array< BullseyeResultInput | null > | null,
  playingCareer?: boolean | null,
  userBullseyeSessionsId?: string | null,
};

export type TargetsInput = {
  color?: string | null,
  distance?: number | null,
};

export type BullseyeResultInput = {
  result?: Array< ResultInput | null > | null,
  distance?: number | null,
};

export type ModelBullseyeSessionConditionInput = {
  userId?: ModelIDInput | null,
  isCompleted?: ModelBooleanInput | null,
  difficulty?: ModelIntInput | null,
  scenario?: ModelSessionScenarioInput | null,
  playingCareer?: ModelBooleanInput | null,
  and?: Array< ModelBullseyeSessionConditionInput | null > | null,
  or?: Array< ModelBullseyeSessionConditionInput | null > | null,
  not?: ModelBullseyeSessionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userBullseyeSessionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateBullseyeSessionInput = {
  id: string,
  userId?: string | null,
  targets?: Array< TargetsInput | null > | null,
  isCompleted?: boolean | null,
  difficulty?: number | null,
  scenario?: SessionScenario | null,
  results?: Array< BullseyeResultInput | null > | null,
  playingCareer?: boolean | null,
  userBullseyeSessionsId?: string | null,
};

export type DeleteBullseyeSessionInput = {
  id: string,
};

export type CreateTargetSetInput = {
  id?: string | null,
  userId: string,
  targets?: Array< TargetsInput | null > | null,
  name?: string | null,
  userTargetSetsId?: string | null,
};

export type ModelTargetSetConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTargetSetConditionInput | null > | null,
  or?: Array< ModelTargetSetConditionInput | null > | null,
  not?: ModelTargetSetConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userTargetSetsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateTargetSetInput = {
  id: string,
  userId?: string | null,
  targets?: Array< TargetsInput | null > | null,
  name?: string | null,
  userTargetSetsId?: string | null,
};

export type DeleteTargetSetInput = {
  id: string,
};

export type CreateUserBullseyeInput = {
  userId: string,
  notes?: string | null,
  scores?: Array< BullseyeScoreInput | null > | null,
  id?: string | null,
  userBullseyeId?: string | null,
};

export type BullseyeScoreInput = {
  difficulty?: number | null,
  score?: number | null,
};

export type ModelUserBullseyeConditionInput = {
  userId?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelUserBullseyeConditionInput | null > | null,
  or?: Array< ModelUserBullseyeConditionInput | null > | null,
  not?: ModelUserBullseyeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userBullseyeId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateUserBullseyeInput = {
  userId?: string | null,
  notes?: string | null,
  scores?: Array< BullseyeScoreInput | null > | null,
  id: string,
  userBullseyeId?: string | null,
};

export type DeleteUserBullseyeInput = {
  id: string,
};

export type CreateGridGameSessionInput = {
  id?: string | null,
  userId: string,
  targetDistance: number,
  shots: number,
  distances?: Array< DistanceRecordInput | null > | null,
  isCompleted: boolean,
  userGridGameSessionsId?: string | null,
};

export type DistanceRecordInput = {
  distance: number,
  shots: number,
};

export type ModelGridGameSessionConditionInput = {
  userId?: ModelIDInput | null,
  targetDistance?: ModelIntInput | null,
  shots?: ModelIntInput | null,
  isCompleted?: ModelBooleanInput | null,
  and?: Array< ModelGridGameSessionConditionInput | null > | null,
  or?: Array< ModelGridGameSessionConditionInput | null > | null,
  not?: ModelGridGameSessionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userGridGameSessionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateGridGameSessionInput = {
  id: string,
  userId?: string | null,
  targetDistance?: number | null,
  shots?: number | null,
  distances?: Array< DistanceRecordInput | null > | null,
  isCompleted?: boolean | null,
  userGridGameSessionsId?: string | null,
};

export type DeleteGridGameSessionInput = {
  id: string,
};

export type CreateGridGameHighScoreInput = {
  id?: string | null,
  userId: string,
  gridGameSessionId: string,
  targetDistance: number,
  shots: number,
  userGridGameHighScoreId?: string | null,
};

export type ModelGridGameHighScoreConditionInput = {
  userId?: ModelIDInput | null,
  gridGameSessionId?: ModelIDInput | null,
  targetDistance?: ModelIntInput | null,
  shots?: ModelIntInput | null,
  and?: Array< ModelGridGameHighScoreConditionInput | null > | null,
  or?: Array< ModelGridGameHighScoreConditionInput | null > | null,
  not?: ModelGridGameHighScoreConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userGridGameHighScoreId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateGridGameHighScoreInput = {
  id: string,
  userId?: string | null,
  gridGameSessionId?: string | null,
  targetDistance?: number | null,
  shots?: number | null,
  userGridGameHighScoreId?: string | null,
};

export type DeleteGridGameHighScoreInput = {
  id: string,
};

export type CreateCoachInput = {
  id?: string | null,
  cognitoId: string,
  profileImage?: S3ObjectInput | null,
  name: string,
  lastName: string,
  phoneNumber?: string | null,
  email?: string | null,
  bio?: string | null,
  school?: string | null,
  zipCode?: string | null,
  address?: string | null,
  state?: string | null,
  city?: string | null,
  country?: string | null,
};

export type ModelCoachConditionInput = {
  cognitoId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  school?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  address?: ModelStringInput | null,
  state?: ModelStringInput | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  and?: Array< ModelCoachConditionInput | null > | null,
  or?: Array< ModelCoachConditionInput | null > | null,
  not?: ModelCoachConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateCoachInput = {
  id: string,
  cognitoId?: string | null,
  profileImage?: S3ObjectInput | null,
  name?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  email?: string | null,
  bio?: string | null,
  school?: string | null,
  zipCode?: string | null,
  address?: string | null,
  state?: string | null,
  city?: string | null,
  country?: string | null,
};

export type DeleteCoachInput = {
  id: string,
};

export type CreateCoachUserInput = {
  id?: string | null,
  userId?: string | null,
  coachId?: string | null,
  status?: CoachUserStatus | null,
  coachStudentsId?: string | null,
};

export type ModelCoachUserConditionInput = {
  userId?: ModelIDInput | null,
  coachId?: ModelIDInput | null,
  status?: ModelCoachUserStatusInput | null,
  and?: Array< ModelCoachUserConditionInput | null > | null,
  or?: Array< ModelCoachUserConditionInput | null > | null,
  not?: ModelCoachUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  coachStudentsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelCoachUserStatusInput = {
  eq?: CoachUserStatus | null,
  ne?: CoachUserStatus | null,
};

export type UpdateCoachUserInput = {
  id: string,
  userId?: string | null,
  coachId?: string | null,
  status?: CoachUserStatus | null,
  coachStudentsId?: string | null,
};

export type DeleteCoachUserInput = {
  id: string,
};

export type CreateCoachSessionInput = {
  id?: string | null,
  coachId?: string | null,
  name?: string | null,
  duration?: number | null,
  coachCoachSessionsId?: string | null,
};

export type ModelCoachSessionConditionInput = {
  coachId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelCoachSessionConditionInput | null > | null,
  or?: Array< ModelCoachSessionConditionInput | null > | null,
  not?: ModelCoachSessionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  coachCoachSessionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateCoachSessionInput = {
  id: string,
  coachId?: string | null,
  name?: string | null,
  duration?: number | null,
  coachCoachSessionsId?: string | null,
};

export type DeleteCoachSessionInput = {
  id: string,
};

export type CreateCoachSessionUserInput = {
  id?: string | null,
  userId: string,
  coachId: string,
  coachSessionId?: string | null,
  timesPlayed?: number | null,
  lastCompleted?: string | null,
  userMyCoachSessionsId?: string | null,
  coachSessionStudentsId?: string | null,
};

export type ModelCoachSessionUserConditionInput = {
  userId?: ModelIDInput | null,
  coachId?: ModelIDInput | null,
  coachSessionId?: ModelIDInput | null,
  timesPlayed?: ModelIntInput | null,
  lastCompleted?: ModelStringInput | null,
  and?: Array< ModelCoachSessionUserConditionInput | null > | null,
  or?: Array< ModelCoachSessionUserConditionInput | null > | null,
  not?: ModelCoachSessionUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userMyCoachSessionsId?: ModelIDInput | null,
  coachSessionStudentsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateCoachSessionUserInput = {
  id: string,
  userId?: string | null,
  coachId?: string | null,
  coachSessionId?: string | null,
  timesPlayed?: number | null,
  lastCompleted?: string | null,
  userMyCoachSessionsId?: string | null,
  coachSessionStudentsId?: string | null,
};

export type DeleteCoachSessionUserInput = {
  id: string,
};

export type CreateCoachUserNotesInput = {
  id?: string | null,
  coachUserId: string,
  notes?: string | null,
  coachUserNotesId?: string | null,
};

export type ModelCoachUserNotesConditionInput = {
  coachUserId?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelCoachUserNotesConditionInput | null > | null,
  or?: Array< ModelCoachUserNotesConditionInput | null > | null,
  not?: ModelCoachUserNotesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  coachUserNotesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateCoachUserNotesInput = {
  id: string,
  coachUserId?: string | null,
  notes?: string | null,
  coachUserNotesId?: string | null,
};

export type DeleteCoachUserNotesInput = {
  id: string,
};

export type CreateCoachSessionDrillInput = {
  id?: string | null,
  coachSessionId?: string | null,
  drillId: string,
  coachSessionDrillsId?: string | null,
};

export type ModelCoachSessionDrillConditionInput = {
  coachSessionId?: ModelStringInput | null,
  drillId?: ModelIDInput | null,
  and?: Array< ModelCoachSessionDrillConditionInput | null > | null,
  or?: Array< ModelCoachSessionDrillConditionInput | null > | null,
  not?: ModelCoachSessionDrillConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  coachSessionDrillsId?: ModelIDInput | null,
};

export type UpdateCoachSessionDrillInput = {
  id: string,
  coachSessionId?: string | null,
  drillId?: string | null,
  coachSessionDrillsId?: string | null,
};

export type DeleteCoachSessionDrillInput = {
  id: string,
};

export type CreateCoachDrillNotesInput = {
  id?: string | null,
  coachId: string,
  drillId: string,
  notes?: string | null,
  share?: boolean | null,
  drillCoachNotesId?: string | null,
  coachCoachDrillNotesId?: string | null,
};

export type ModelCoachDrillNotesConditionInput = {
  coachId?: ModelIDInput | null,
  drillId?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  share?: ModelBooleanInput | null,
  and?: Array< ModelCoachDrillNotesConditionInput | null > | null,
  or?: Array< ModelCoachDrillNotesConditionInput | null > | null,
  not?: ModelCoachDrillNotesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  drillCoachNotesId?: ModelIDInput | null,
  coachCoachDrillNotesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateCoachDrillNotesInput = {
  id: string,
  coachId?: string | null,
  drillId?: string | null,
  notes?: string | null,
  share?: boolean | null,
  drillCoachNotesId?: string | null,
  coachCoachDrillNotesId?: string | null,
};

export type DeleteCoachDrillNotesInput = {
  id: string,
};

export type DistanceScoreInput = {
  distance: number,
  shots: number,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  age?: ModelStringInput | null,
  handicap?: ModelStringInput | null,
  objectives?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  coachUserId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserDrillsFilterInput = {
  userId?: ModelIDInput | null,
  drillId?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  currentLevel?: ModelIntInput | null,
  lastNumberOfHits?: ModelIntInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserDrillsFilterInput | null > | null,
  or?: Array< ModelUserDrillsFilterInput | null > | null,
  not?: ModelUserDrillsFilterInput | null,
  userMyDrillsId?: ModelIDInput | null,
  drillUsersId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelFeedbackFilterInput = {
  id?: ModelIDInput | null,
  score?: ModelIntInput | null,
  details?: ModelStringInput | null,
  screen?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFeedbackFilterInput | null > | null,
  or?: Array< ModelFeedbackFilterInput | null > | null,
  not?: ModelFeedbackFilterInput | null,
  userFeedbacksId?: ModelIDInput | null,
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null,
  feature?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelVoteFilterInput | null > | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  not?: ModelVoteFilterInput | null,
  userVoteId?: ModelIDInput | null,
};

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  trackingName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  games?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
};

export type ModelSkillConnection = {
  __typename: "ModelSkillConnection",
  items:  Array<Skill | null >,
  nextToken?: string | null,
};

export type ModelUserSkillFilterInput = {
  id?: ModelIDInput | null,
  level?: ModelIntInput | null,
  greenZone?: ModelIntInput | null,
  redZone?: ModelIntInput | null,
  yellowZone?: ModelIntInput | null,
  holeZone?: ModelIntInput | null,
  outZone?: ModelIntInput | null,
  leftYellowZone?: ModelIntInput | null,
  rightYellowZone?: ModelIntInput | null,
  leftRedZone?: ModelIntInput | null,
  rightRedZone?: ModelIntInput | null,
  streak?: ModelIntInput | null,
  skillId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserSkillFilterInput | null > | null,
  or?: Array< ModelUserSkillFilterInput | null > | null,
  not?: ModelUserSkillFilterInput | null,
  userUserSkillsId?: ModelIDInput | null,
  skillUserSkillsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelDrillFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  trackingName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  goal?: ModelStringInput | null,
  videoId?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  skillId?: ModelIDInput | null,
  hidden?: ModelBooleanInput | null,
  tries?: ModelIntInput | null,
  level?: ModelIntInput | null,
  club?: ModelStringInput | null,
  title?: ModelStringInput | null,
  challenge?: ModelStringInput | null,
  isDynamic?: ModelBooleanInput | null,
  thirdOption?: ModelBooleanInput | null,
  type?: ModelDrillTypeInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDrillFilterInput | null > | null,
  or?: Array< ModelDrillFilterInput | null > | null,
  not?: ModelDrillFilterInput | null,
  skillDrillsId?: ModelIDInput | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  parentId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  duration?: ModelIntInput | null,
  isCompleted?: ModelBooleanInput | null,
  saved?: ModelBooleanInput | null,
  mode?: ModelSessionModeInput | null,
  scenario?: ModelSessionScenarioInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
  userMySessionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSessionDrillFilterInput = {
  id?: ModelIDInput | null,
  isCompleted?: ModelBooleanInput | null,
  sessionId?: ModelIDInput | null,
  drillId?: ModelIDInput | null,
  mode?: ModelSessionModeInput | null,
  playingCareer?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSessionDrillFilterInput | null > | null,
  or?: Array< ModelSessionDrillFilterInput | null > | null,
  not?: ModelSessionDrillFilterInput | null,
  drillSessionDrillsId?: ModelIDInput | null,
  sessionSessionDrillsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelHoleFilterInput = {
  id?: ModelIDInput | null,
  number?: ModelIntInput | null,
  par?: ModelIntInput | null,
  distance?: ModelIntInput | null,
  flagDistance?: ModelIntInput | null,
  courseId?: ModelIDInput | null,
  water?: ModelIntInput | null,
  bunker?: ModelIntInput | null,
  woods?: ModelIntInput | null,
  flag?: ModelIntInput | null,
  green?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelHoleFilterInput | null > | null,
  or?: Array< ModelHoleFilterInput | null > | null,
  not?: ModelHoleFilterInput | null,
  courseHolesId?: ModelIDInput | null,
};

export type ModelCourseSessionFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  isCompleted?: ModelBooleanInput | null,
  courseId?: ModelIDInput | null,
  playingCareer?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCourseSessionFilterInput | null > | null,
  or?: Array< ModelCourseSessionFilterInput | null > | null,
  not?: ModelCourseSessionFilterInput | null,
  userCourseSessionsId?: ModelIDInput | null,
  courseCourseSessionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSessionHoleFilterInput = {
  id?: ModelIDInput | null,
  isCompleted?: ModelBooleanInput | null,
  courseSessionId?: ModelIDInput | null,
  holeId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSessionHoleFilterInput | null > | null,
  or?: Array< ModelSessionHoleFilterInput | null > | null,
  not?: ModelSessionHoleFilterInput | null,
  holeSessionHolesId?: ModelIDInput | null,
  courseSessionSessionHolesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelBullseyeSessionFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  isCompleted?: ModelBooleanInput | null,
  difficulty?: ModelIntInput | null,
  scenario?: ModelSessionScenarioInput | null,
  playingCareer?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBullseyeSessionFilterInput | null > | null,
  or?: Array< ModelBullseyeSessionFilterInput | null > | null,
  not?: ModelBullseyeSessionFilterInput | null,
  userBullseyeSessionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelTargetSetFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTargetSetFilterInput | null > | null,
  or?: Array< ModelTargetSetFilterInput | null > | null,
  not?: ModelTargetSetFilterInput | null,
  userTargetSetsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserBullseyeFilterInput = {
  userId?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserBullseyeFilterInput | null > | null,
  or?: Array< ModelUserBullseyeFilterInput | null > | null,
  not?: ModelUserBullseyeFilterInput | null,
  userBullseyeId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelGridGameSessionFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  targetDistance?: ModelIntInput | null,
  shots?: ModelIntInput | null,
  isCompleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGridGameSessionFilterInput | null > | null,
  or?: Array< ModelGridGameSessionFilterInput | null > | null,
  not?: ModelGridGameSessionFilterInput | null,
  userGridGameSessionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelGridGameHighScoreFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  gridGameSessionId?: ModelIDInput | null,
  targetDistance?: ModelIntInput | null,
  shots?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGridGameHighScoreFilterInput | null > | null,
  or?: Array< ModelGridGameHighScoreFilterInput | null > | null,
  not?: ModelGridGameHighScoreFilterInput | null,
  userGridGameHighScoreId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelAppInfoFilterInput = {
  paywallVideoId?: ModelStringInput | null,
  env?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAppInfoFilterInput | null > | null,
  or?: Array< ModelAppInfoFilterInput | null > | null,
  not?: ModelAppInfoFilterInput | null,
};

export type ModelAppInfoConnection = {
  __typename: "ModelAppInfoConnection",
  items:  Array<AppInfo | null >,
  nextToken?: string | null,
};

export type ModelArticleFilterInput = {
  videoId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type ModelChallengeDrillsFilterInput = {
  id?: ModelIDInput | null,
  hidden?: ModelBooleanInput | null,
  skillId?: ModelIDInput | null,
  drillId?: ModelIDInput | null,
  isFirstStep?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChallengeDrillsFilterInput | null > | null,
  or?: Array< ModelChallengeDrillsFilterInput | null > | null,
  not?: ModelChallengeDrillsFilterInput | null,
  skillChallengeDrillsId?: ModelIDInput | null,
  drillChallengeDrillsId?: ModelIDInput | null,
};

export type ModelCoachFilterInput = {
  id?: ModelIDInput | null,
  cognitoId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  school?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  address?: ModelStringInput | null,
  state?: ModelStringInput | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCoachFilterInput | null > | null,
  or?: Array< ModelCoachFilterInput | null > | null,
  not?: ModelCoachFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelCoachConnection = {
  __typename: "ModelCoachConnection",
  items:  Array<Coach | null >,
  nextToken?: string | null,
};

export type ModelCoachUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  coachId?: ModelIDInput | null,
  status?: ModelCoachUserStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCoachUserFilterInput | null > | null,
  or?: Array< ModelCoachUserFilterInput | null > | null,
  not?: ModelCoachUserFilterInput | null,
  coachStudentsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type SearchableCoachUserFilterInput = {
  id?: SearchableIDFilterInput | null,
  userId?: SearchableIDFilterInput | null,
  coachId?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  coachStudentsId?: SearchableIDFilterInput | null,
  status?: SearchableStringFilterInput | null,
  and?: Array< SearchableCoachUserFilterInput | null > | null,
  or?: Array< SearchableCoachUserFilterInput | null > | null,
  not?: SearchableCoachUserFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableCoachUserSortInput = {
  field?: SearchableCoachUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableCoachUserSortableFields {
  id = "id",
  userId = "userId",
  coachId = "coachId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  coachStudentsId = "coachStudentsId",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableCoachUserAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableCoachUserAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
  cardinality = "cardinality",
}


export enum SearchableCoachUserAggregateField {
  id = "id",
  userId = "userId",
  coachId = "coachId",
  status = "status",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  coachStudentsId = "coachStudentsId",
}


export type SearchableCoachUserConnection = {
  __typename: "SearchableCoachUserConnection",
  items:  Array<CoachUser | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelCoachSessionFilterInput = {
  id?: ModelIDInput | null,
  coachId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCoachSessionFilterInput | null > | null,
  or?: Array< ModelCoachSessionFilterInput | null > | null,
  not?: ModelCoachSessionFilterInput | null,
  coachCoachSessionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelCoachSessionUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  coachId?: ModelIDInput | null,
  coachSessionId?: ModelIDInput | null,
  timesPlayed?: ModelIntInput | null,
  lastCompleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCoachSessionUserFilterInput | null > | null,
  or?: Array< ModelCoachSessionUserFilterInput | null > | null,
  not?: ModelCoachSessionUserFilterInput | null,
  userMyCoachSessionsId?: ModelIDInput | null,
  coachSessionStudentsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelCoachUserNotesFilterInput = {
  id?: ModelIDInput | null,
  coachUserId?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCoachUserNotesFilterInput | null > | null,
  or?: Array< ModelCoachUserNotesFilterInput | null > | null,
  not?: ModelCoachUserNotesFilterInput | null,
  coachUserNotesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelCoachSessionDrillFilterInput = {
  id?: ModelIDInput | null,
  coachSessionId?: ModelStringInput | null,
  drillId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCoachSessionDrillFilterInput | null > | null,
  or?: Array< ModelCoachSessionDrillFilterInput | null > | null,
  not?: ModelCoachSessionDrillFilterInput | null,
  coachSessionDrillsId?: ModelIDInput | null,
};

export type ModelCoachDrillNotesFilterInput = {
  id?: ModelIDInput | null,
  coachId?: ModelIDInput | null,
  drillId?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  share?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCoachDrillNotesFilterInput | null > | null,
  or?: Array< ModelCoachDrillNotesFilterInput | null > | null,
  not?: ModelCoachDrillNotesFilterInput | null,
  drillCoachNotesId?: ModelIDInput | null,
  coachCoachDrillNotesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionStringInput | null,
  handicap?: ModelSubscriptionStringInput | null,
  objectives?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionBooleanInput | null,
  coachUserId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userMySessionsId?: ModelSubscriptionIDInput | null,
  userMyDrillsId?: ModelSubscriptionIDInput | null,
  userFeedbacksId?: ModelSubscriptionIDInput | null,
  userUserSkillsId?: ModelSubscriptionIDInput | null,
  userVoteId?: ModelSubscriptionIDInput | null,
  userCourseSessionsId?: ModelSubscriptionIDInput | null,
  userBullseyeSessionsId?: ModelSubscriptionIDInput | null,
  userBullseyeId?: ModelSubscriptionIDInput | null,
  userTargetSetsId?: ModelSubscriptionIDInput | null,
  userGridGameSessionsId?: ModelSubscriptionIDInput | null,
  userGridGameHighScoreId?: ModelSubscriptionIDInput | null,
  userMyCoachSessionsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserDrillsFilterInput = {
  userId?: ModelSubscriptionIDInput | null,
  drillId?: ModelSubscriptionIDInput | null,
  notes?: ModelSubscriptionStringInput | null,
  currentLevel?: ModelSubscriptionIntInput | null,
  lastNumberOfHits?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserDrillsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserDrillsFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFeedbackFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  score?: ModelSubscriptionIntInput | null,
  details?: ModelSubscriptionStringInput | null,
  screen?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeedbackFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeedbackFilterInput | null > | null,
};

export type ModelSubscriptionVoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  feature?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionVoteFilterInput | null > | null,
};

export type ModelSubscriptionSkillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  trackingName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  games?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSkillFilterInput | null > | null,
  or?: Array< ModelSubscriptionSkillFilterInput | null > | null,
  skillDrillsId?: ModelSubscriptionIDInput | null,
  skillUserSkillsId?: ModelSubscriptionIDInput | null,
  skillChallengeDrillsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserSkillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  level?: ModelSubscriptionIntInput | null,
  greenZone?: ModelSubscriptionIntInput | null,
  redZone?: ModelSubscriptionIntInput | null,
  yellowZone?: ModelSubscriptionIntInput | null,
  holeZone?: ModelSubscriptionIntInput | null,
  outZone?: ModelSubscriptionIntInput | null,
  leftYellowZone?: ModelSubscriptionIntInput | null,
  rightYellowZone?: ModelSubscriptionIntInput | null,
  leftRedZone?: ModelSubscriptionIntInput | null,
  rightRedZone?: ModelSubscriptionIntInput | null,
  streak?: ModelSubscriptionIntInput | null,
  skillId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserSkillFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserSkillFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionDrillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  trackingName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  goal?: ModelSubscriptionStringInput | null,
  videoId?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  skillId?: ModelSubscriptionIDInput | null,
  hidden?: ModelSubscriptionBooleanInput | null,
  tries?: ModelSubscriptionIntInput | null,
  level?: ModelSubscriptionIntInput | null,
  club?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  challenge?: ModelSubscriptionStringInput | null,
  isDynamic?: ModelSubscriptionBooleanInput | null,
  thirdOption?: ModelSubscriptionBooleanInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDrillFilterInput | null > | null,
  or?: Array< ModelSubscriptionDrillFilterInput | null > | null,
  drillSessionDrillsId?: ModelSubscriptionIDInput | null,
  drillUsersId?: ModelSubscriptionIDInput | null,
  drillChallengeDrillsId?: ModelSubscriptionIDInput | null,
  drillCoachNotesId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  parentId?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  duration?: ModelSubscriptionIntInput | null,
  isCompleted?: ModelSubscriptionBooleanInput | null,
  saved?: ModelSubscriptionBooleanInput | null,
  mode?: ModelSubscriptionStringInput | null,
  scenario?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionFilterInput | null > | null,
  sessionSessionDrillsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionSessionDrillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isCompleted?: ModelSubscriptionBooleanInput | null,
  sessionId?: ModelSubscriptionIDInput | null,
  drillId?: ModelSubscriptionIDInput | null,
  mode?: ModelSubscriptionStringInput | null,
  playingCareer?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionDrillFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionDrillFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  courseHolesId?: ModelSubscriptionIDInput | null,
  courseCourseSessionsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionHoleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  number?: ModelSubscriptionIntInput | null,
  par?: ModelSubscriptionIntInput | null,
  distance?: ModelSubscriptionIntInput | null,
  flagDistance?: ModelSubscriptionIntInput | null,
  courseId?: ModelSubscriptionIDInput | null,
  water?: ModelSubscriptionIntInput | null,
  bunker?: ModelSubscriptionIntInput | null,
  woods?: ModelSubscriptionIntInput | null,
  flag?: ModelSubscriptionIntInput | null,
  green?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHoleFilterInput | null > | null,
  or?: Array< ModelSubscriptionHoleFilterInput | null > | null,
  holeSessionHolesId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionCourseSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  isCompleted?: ModelSubscriptionBooleanInput | null,
  courseId?: ModelSubscriptionIDInput | null,
  playingCareer?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseSessionFilterInput | null > | null,
  courseSessionSessionHolesId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionSessionHoleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isCompleted?: ModelSubscriptionBooleanInput | null,
  courseSessionId?: ModelSubscriptionIDInput | null,
  holeId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionHoleFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionHoleFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBullseyeSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  isCompleted?: ModelSubscriptionBooleanInput | null,
  difficulty?: ModelSubscriptionIntInput | null,
  scenario?: ModelSubscriptionStringInput | null,
  playingCareer?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBullseyeSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionBullseyeSessionFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionTargetSetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTargetSetFilterInput | null > | null,
  or?: Array< ModelSubscriptionTargetSetFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUserBullseyeFilterInput = {
  userId?: ModelSubscriptionIDInput | null,
  notes?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserBullseyeFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserBullseyeFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionGridGameSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  targetDistance?: ModelSubscriptionIntInput | null,
  shots?: ModelSubscriptionIntInput | null,
  isCompleted?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGridGameSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionGridGameSessionFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionGridGameHighScoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  gridGameSessionId?: ModelSubscriptionIDInput | null,
  targetDistance?: ModelSubscriptionIntInput | null,
  shots?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGridGameHighScoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionGridGameHighScoreFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionAppInfoFilterInput = {
  paywallVideoId?: ModelSubscriptionStringInput | null,
  env?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAppInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppInfoFilterInput | null > | null,
};

export type ModelSubscriptionArticleFilterInput = {
  videoId?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  or?: Array< ModelSubscriptionArticleFilterInput | null > | null,
};

export type ModelSubscriptionChallengeDrillsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  hidden?: ModelSubscriptionBooleanInput | null,
  skillId?: ModelSubscriptionIDInput | null,
  drillId?: ModelSubscriptionIDInput | null,
  isFirstStep?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChallengeDrillsFilterInput | null > | null,
  or?: Array< ModelSubscriptionChallengeDrillsFilterInput | null > | null,
};

export type ModelSubscriptionCoachFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoId?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  school?: ModelSubscriptionStringInput | null,
  zipCode?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCoachFilterInput | null > | null,
  or?: Array< ModelSubscriptionCoachFilterInput | null > | null,
  coachStudentsId?: ModelSubscriptionIDInput | null,
  coachCoachDrillNotesId?: ModelSubscriptionIDInput | null,
  coachCoachSessionsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionCoachUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  coachId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCoachUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionCoachUserFilterInput | null > | null,
  coachUserNotesId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionCoachSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  coachId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCoachSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionCoachSessionFilterInput | null > | null,
  coachSessionStudentsId?: ModelSubscriptionIDInput | null,
  coachSessionDrillsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionCoachSessionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  coachId?: ModelSubscriptionIDInput | null,
  coachSessionId?: ModelSubscriptionIDInput | null,
  timesPlayed?: ModelSubscriptionIntInput | null,
  lastCompleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCoachSessionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionCoachSessionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionCoachUserNotesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  coachUserId?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCoachUserNotesFilterInput | null > | null,
  or?: Array< ModelSubscriptionCoachUserNotesFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionCoachSessionDrillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  coachSessionId?: ModelSubscriptionStringInput | null,
  drillId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCoachSessionDrillFilterInput | null > | null,
  or?: Array< ModelSubscriptionCoachSessionDrillFilterInput | null > | null,
};

export type ModelSubscriptionCoachDrillNotesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  coachId?: ModelSubscriptionIDInput | null,
  drillId?: ModelSubscriptionIDInput | null,
  notes?: ModelSubscriptionStringInput | null,
  share?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCoachDrillNotesFilterInput | null > | null,
  or?: Array< ModelSubscriptionCoachDrillNotesFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type UpdateFeedbackMutationVariables = {
  input: UpdateFeedbackInput,
  condition?: ModelFeedbackConditionInput | null,
};

export type UpdateFeedbackMutation = {
  updateFeedback?:  {
    __typename: "Feedback",
    id: string,
    score?: number | null,
    details?: string | null,
    screen?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFeedbacksId?: string | null,
  } | null,
};

export type DeleteFeedbackMutationVariables = {
  input: DeleteFeedbackInput,
  condition?: ModelFeedbackConditionInput | null,
};

export type DeleteFeedbackMutation = {
  deleteFeedback?:  {
    __typename: "Feedback",
    id: string,
    score?: number | null,
    details?: string | null,
    screen?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFeedbacksId?: string | null,
  } | null,
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type UpdateVoteMutation = {
  updateVote?:  {
    __typename: "Vote",
    id: string,
    feature: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVoteId?: string | null,
  } | null,
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type DeleteVoteMutation = {
  deleteVote?:  {
    __typename: "Vote",
    id: string,
    feature: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVoteId?: string | null,
  } | null,
};

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    trackingName?: string | null,
    description?: string | null,
    drills?:  {
      __typename: "ModelDrillConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    games?: Array< string | null > | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    trackingName?: string | null,
    description?: string | null,
    drills?:  {
      __typename: "ModelDrillConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    games?: Array< string | null > | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    trackingName?: string | null,
    description?: string | null,
    drills?:  {
      __typename: "ModelDrillConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    games?: Array< string | null > | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserSkillMutationVariables = {
  input: CreateUserSkillInput,
  condition?: ModelUserSkillConditionInput | null,
};

export type CreateUserSkillMutation = {
  createUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    level?: number | null,
    greenZone?: number | null,
    redZone?: number | null,
    yellowZone?: number | null,
    holeZone?: number | null,
    outZone?: number | null,
    leftYellowZone?: number | null,
    rightYellowZone?: number | null,
    leftRedZone?: number | null,
    rightRedZone?: number | null,
    streak?: number | null,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserSkillsId?: string | null,
    skillUserSkillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserSkillMutationVariables = {
  input: DeleteUserSkillInput,
  condition?: ModelUserSkillConditionInput | null,
};

export type DeleteUserSkillMutation = {
  deleteUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    level?: number | null,
    greenZone?: number | null,
    redZone?: number | null,
    yellowZone?: number | null,
    holeZone?: number | null,
    outZone?: number | null,
    leftYellowZone?: number | null,
    rightYellowZone?: number | null,
    leftRedZone?: number | null,
    rightRedZone?: number | null,
    streak?: number | null,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserSkillsId?: string | null,
    skillUserSkillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateDrillMutationVariables = {
  input: CreateDrillInput,
  condition?: ModelDrillConditionInput | null,
};

export type CreateDrillMutation = {
  createDrill?:  {
    __typename: "Drill",
    id: string,
    name: string,
    trackingName?: string | null,
    description: string,
    goal: string,
    videoId: string,
    duration: number,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    hidden?: boolean | null,
    tries?: number | null,
    level?: number | null,
    club?: string | null,
    title?: string | null,
    challenge: string,
    users?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    isDynamic?: boolean | null,
    thirdOption?: boolean | null,
    dynamicDifficulties?:  {
      __typename: "DynamicDrillDifficulty",
      beginner: string,
      medium: string,
      advanced: string,
      pro: string,
    } | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    type?: DrillType | null,
    coachNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessionDrills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    skillDrillsId?: string | null,
  } | null,
};

export type UpdateDrillMutationVariables = {
  input: UpdateDrillInput,
  condition?: ModelDrillConditionInput | null,
};

export type UpdateDrillMutation = {
  updateDrill?:  {
    __typename: "Drill",
    id: string,
    name: string,
    trackingName?: string | null,
    description: string,
    goal: string,
    videoId: string,
    duration: number,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    hidden?: boolean | null,
    tries?: number | null,
    level?: number | null,
    club?: string | null,
    title?: string | null,
    challenge: string,
    users?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    isDynamic?: boolean | null,
    thirdOption?: boolean | null,
    dynamicDifficulties?:  {
      __typename: "DynamicDrillDifficulty",
      beginner: string,
      medium: string,
      advanced: string,
      pro: string,
    } | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    type?: DrillType | null,
    coachNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessionDrills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    skillDrillsId?: string | null,
  } | null,
};

export type DeleteDrillMutationVariables = {
  input: DeleteDrillInput,
  condition?: ModelDrillConditionInput | null,
};

export type DeleteDrillMutation = {
  deleteDrill?:  {
    __typename: "Drill",
    id: string,
    name: string,
    trackingName?: string | null,
    description: string,
    goal: string,
    videoId: string,
    duration: number,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    hidden?: boolean | null,
    tries?: number | null,
    level?: number | null,
    club?: string | null,
    title?: string | null,
    challenge: string,
    users?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    isDynamic?: boolean | null,
    thirdOption?: boolean | null,
    dynamicDifficulties?:  {
      __typename: "DynamicDrillDifficulty",
      beginner: string,
      medium: string,
      advanced: string,
      pro: string,
    } | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    type?: DrillType | null,
    coachNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessionDrills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    skillDrillsId?: string | null,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    holes?:  {
      __typename: "ModelHoleConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    holes?:  {
      __typename: "ModelHoleConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    holes?:  {
      __typename: "ModelHoleConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHoleMutationVariables = {
  input: CreateHoleInput,
  condition?: ModelHoleConditionInput | null,
};

export type CreateHoleMutation = {
  createHole?:  {
    __typename: "Hole",
    id: string,
    number: number,
    par: number,
    distance: number,
    flagDistance: number,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    coverImage:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    water?: Array< number | null > | null,
    bunker?: Array< number | null > | null,
    woods?: Array< number | null > | null,
    flag: number,
    green?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    courseHolesId?: string | null,
  } | null,
};

export type UpdateHoleMutationVariables = {
  input: UpdateHoleInput,
  condition?: ModelHoleConditionInput | null,
};

export type UpdateHoleMutation = {
  updateHole?:  {
    __typename: "Hole",
    id: string,
    number: number,
    par: number,
    distance: number,
    flagDistance: number,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    coverImage:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    water?: Array< number | null > | null,
    bunker?: Array< number | null > | null,
    woods?: Array< number | null > | null,
    flag: number,
    green?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    courseHolesId?: string | null,
  } | null,
};

export type DeleteHoleMutationVariables = {
  input: DeleteHoleInput,
  condition?: ModelHoleConditionInput | null,
};

export type DeleteHoleMutation = {
  deleteHole?:  {
    __typename: "Hole",
    id: string,
    number: number,
    par: number,
    distance: number,
    flagDistance: number,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    coverImage:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    water?: Array< number | null > | null,
    bunker?: Array< number | null > | null,
    woods?: Array< number | null > | null,
    flag: number,
    green?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    courseHolesId?: string | null,
  } | null,
};

export type CreateAppInfoMutationVariables = {
  input: CreateAppInfoInput,
  condition?: ModelAppInfoConditionInput | null,
};

export type CreateAppInfoMutation = {
  createAppInfo?:  {
    __typename: "AppInfo",
    paywallVideoId?: string | null,
    env?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAppInfoMutationVariables = {
  input: UpdateAppInfoInput,
  condition?: ModelAppInfoConditionInput | null,
};

export type UpdateAppInfoMutation = {
  updateAppInfo?:  {
    __typename: "AppInfo",
    paywallVideoId?: string | null,
    env?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAppInfoMutationVariables = {
  input: DeleteAppInfoInput,
  condition?: ModelAppInfoConditionInput | null,
};

export type DeleteAppInfoMutation = {
  deleteAppInfo?:  {
    __typename: "AppInfo",
    paywallVideoId?: string | null,
    env?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    videoId?: string | null,
    title?: string | null,
    text?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    videoId?: string | null,
    title?: string | null,
    text?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    videoId?: string | null,
    title?: string | null,
    text?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChallengeDrillsMutationVariables = {
  input: CreateChallengeDrillsInput,
  condition?: ModelChallengeDrillsConditionInput | null,
};

export type CreateChallengeDrillsMutation = {
  createChallengeDrills?:  {
    __typename: "ChallengeDrills",
    id: string,
    hidden: boolean,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    isFirstStep: boolean,
    createdAt: string,
    updatedAt: string,
    skillChallengeDrillsId?: string | null,
    drillChallengeDrillsId?: string | null,
  } | null,
};

export type UpdateChallengeDrillsMutationVariables = {
  input: UpdateChallengeDrillsInput,
  condition?: ModelChallengeDrillsConditionInput | null,
};

export type UpdateChallengeDrillsMutation = {
  updateChallengeDrills?:  {
    __typename: "ChallengeDrills",
    id: string,
    hidden: boolean,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    isFirstStep: boolean,
    createdAt: string,
    updatedAt: string,
    skillChallengeDrillsId?: string | null,
    drillChallengeDrillsId?: string | null,
  } | null,
};

export type DeleteChallengeDrillsMutationVariables = {
  input: DeleteChallengeDrillsInput,
  condition?: ModelChallengeDrillsConditionInput | null,
};

export type DeleteChallengeDrillsMutation = {
  deleteChallengeDrills?:  {
    __typename: "ChallengeDrills",
    id: string,
    hidden: boolean,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    isFirstStep: boolean,
    createdAt: string,
    updatedAt: string,
    skillChallengeDrillsId?: string | null,
    drillChallengeDrillsId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    gender?: string | null,
    age?: string | null,
    handicap?: string | null,
    objectives?: Array< string | null > | null,
    evaluation?:  Array< {
      __typename: "Evaluation",
      name: string,
      score: number,
    } | null > | null,
    mySessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    myDrills?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    featureFlags?:  Array< {
      __typename: "FeatureFlag",
      name: string,
      value: boolean,
    } | null > | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    vote?:  {
      __typename: "ModelVoteConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseyeSessions?:  {
      __typename: "ModelBullseyeSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseye?:  {
      __typename: "ModelUserBullseyeConnection",
      nextToken?: string | null,
    } | null,
    targetSets?:  {
      __typename: "ModelTargetSetConnection",
      nextToken?: string | null,
    } | null,
    gridGameSessions?:  {
      __typename: "ModelGridGameSessionConnection",
      nextToken?: string | null,
    } | null,
    gridGameHighScore?:  {
      __typename: "ModelGridGameHighScoreConnection",
      nextToken?: string | null,
    } | null,
    deleted?: boolean | null,
    coachUserId?: string | null,
    myCoach?:  {
      __typename: "CoachUser",
      id: string,
      userId?: string | null,
      coachId?: string | null,
      status?: CoachUserStatus | null,
      createdAt: string,
      updatedAt: string,
      coachStudentsId?: string | null,
      owner?: string | null,
    } | null,
    myCoachSessions?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    gender?: string | null,
    age?: string | null,
    handicap?: string | null,
    objectives?: Array< string | null > | null,
    evaluation?:  Array< {
      __typename: "Evaluation",
      name: string,
      score: number,
    } | null > | null,
    mySessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    myDrills?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    featureFlags?:  Array< {
      __typename: "FeatureFlag",
      name: string,
      value: boolean,
    } | null > | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    vote?:  {
      __typename: "ModelVoteConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseyeSessions?:  {
      __typename: "ModelBullseyeSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseye?:  {
      __typename: "ModelUserBullseyeConnection",
      nextToken?: string | null,
    } | null,
    targetSets?:  {
      __typename: "ModelTargetSetConnection",
      nextToken?: string | null,
    } | null,
    gridGameSessions?:  {
      __typename: "ModelGridGameSessionConnection",
      nextToken?: string | null,
    } | null,
    gridGameHighScore?:  {
      __typename: "ModelGridGameHighScoreConnection",
      nextToken?: string | null,
    } | null,
    deleted?: boolean | null,
    coachUserId?: string | null,
    myCoach?:  {
      __typename: "CoachUser",
      id: string,
      userId?: string | null,
      coachId?: string | null,
      status?: CoachUserStatus | null,
      createdAt: string,
      updatedAt: string,
      coachStudentsId?: string | null,
      owner?: string | null,
    } | null,
    myCoachSessions?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUserDrillsMutationVariables = {
  input: CreateUserDrillsInput,
  condition?: ModelUserDrillsConditionInput | null,
};

export type CreateUserDrillsMutation = {
  createUserDrills?:  {
    __typename: "UserDrills",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    currentLevel?: number | null,
    lastNumberOfHits?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userMyDrillsId?: string | null,
    drillUsersId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserDrillsMutationVariables = {
  input: UpdateUserDrillsInput,
  condition?: ModelUserDrillsConditionInput | null,
};

export type UpdateUserDrillsMutation = {
  updateUserDrills?:  {
    __typename: "UserDrills",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    currentLevel?: number | null,
    lastNumberOfHits?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userMyDrillsId?: string | null,
    drillUsersId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserDrillsMutationVariables = {
  input: DeleteUserDrillsInput,
  condition?: ModelUserDrillsConditionInput | null,
};

export type DeleteUserDrillsMutation = {
  deleteUserDrills?:  {
    __typename: "UserDrills",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    currentLevel?: number | null,
    lastNumberOfHits?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userMyDrillsId?: string | null,
    drillUsersId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateFeedbackMutationVariables = {
  input: CreateFeedbackInput,
  condition?: ModelFeedbackConditionInput | null,
};

export type CreateFeedbackMutation = {
  createFeedback?:  {
    __typename: "Feedback",
    id: string,
    score?: number | null,
    details?: string | null,
    screen?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFeedbacksId?: string | null,
  } | null,
};

export type CreateVoteMutationVariables = {
  input: CreateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type CreateVoteMutation = {
  createVote?:  {
    __typename: "Vote",
    id: string,
    feature: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVoteId?: string | null,
  } | null,
};

export type UpdateUserSkillMutationVariables = {
  input: UpdateUserSkillInput,
  condition?: ModelUserSkillConditionInput | null,
};

export type UpdateUserSkillMutation = {
  updateUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    level?: number | null,
    greenZone?: number | null,
    redZone?: number | null,
    yellowZone?: number | null,
    holeZone?: number | null,
    outZone?: number | null,
    leftYellowZone?: number | null,
    rightYellowZone?: number | null,
    leftRedZone?: number | null,
    rightRedZone?: number | null,
    streak?: number | null,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserSkillsId?: string | null,
    skillUserSkillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type CreateSessionMutation = {
  createSession?:  {
    __typename: "Session",
    id: string,
    parentId?: string | null,
    name?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    isCompleted?: boolean | null,
    saved?: boolean | null,
    mode?: SessionMode | null,
    scenario?: SessionScenario | null,
    createdAt: string,
    updatedAt: string,
    userMySessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type UpdateSessionMutation = {
  updateSession?:  {
    __typename: "Session",
    id: string,
    parentId?: string | null,
    name?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    isCompleted?: boolean | null,
    saved?: boolean | null,
    mode?: SessionMode | null,
    scenario?: SessionScenario | null,
    createdAt: string,
    updatedAt: string,
    userMySessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type DeleteSessionMutation = {
  deleteSession?:  {
    __typename: "Session",
    id: string,
    parentId?: string | null,
    name?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    isCompleted?: boolean | null,
    saved?: boolean | null,
    mode?: SessionMode | null,
    scenario?: SessionScenario | null,
    createdAt: string,
    updatedAt: string,
    userMySessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateSessionDrillMutationVariables = {
  input: CreateSessionDrillInput,
  condition?: ModelSessionDrillConditionInput | null,
};

export type CreateSessionDrillMutation = {
  createSessionDrill?:  {
    __typename: "SessionDrill",
    id: string,
    isCompleted: boolean,
    sessionId: string,
    session?:  {
      __typename: "Session",
      id: string,
      parentId?: string | null,
      name?: string | null,
      userId: string,
      duration?: number | null,
      isCompleted?: boolean | null,
      saved?: boolean | null,
      mode?: SessionMode | null,
      scenario?: SessionScenario | null,
      createdAt: string,
      updatedAt: string,
      userMySessionsId?: string | null,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    mode?: SessionMode | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillSessionDrillsId?: string | null,
    sessionSessionDrillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateSessionDrillMutationVariables = {
  input: UpdateSessionDrillInput,
  condition?: ModelSessionDrillConditionInput | null,
};

export type UpdateSessionDrillMutation = {
  updateSessionDrill?:  {
    __typename: "SessionDrill",
    id: string,
    isCompleted: boolean,
    sessionId: string,
    session?:  {
      __typename: "Session",
      id: string,
      parentId?: string | null,
      name?: string | null,
      userId: string,
      duration?: number | null,
      isCompleted?: boolean | null,
      saved?: boolean | null,
      mode?: SessionMode | null,
      scenario?: SessionScenario | null,
      createdAt: string,
      updatedAt: string,
      userMySessionsId?: string | null,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    mode?: SessionMode | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillSessionDrillsId?: string | null,
    sessionSessionDrillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteSessionDrillMutationVariables = {
  input: DeleteSessionDrillInput,
  condition?: ModelSessionDrillConditionInput | null,
};

export type DeleteSessionDrillMutation = {
  deleteSessionDrill?:  {
    __typename: "SessionDrill",
    id: string,
    isCompleted: boolean,
    sessionId: string,
    session?:  {
      __typename: "Session",
      id: string,
      parentId?: string | null,
      name?: string | null,
      userId: string,
      duration?: number | null,
      isCompleted?: boolean | null,
      saved?: boolean | null,
      mode?: SessionMode | null,
      scenario?: SessionScenario | null,
      createdAt: string,
      updatedAt: string,
      userMySessionsId?: string | null,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    mode?: SessionMode | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillSessionDrillsId?: string | null,
    sessionSessionDrillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCourseSessionMutationVariables = {
  input: UpdateCourseSessionInput,
  condition?: ModelCourseSessionConditionInput | null,
};

export type UpdateCourseSessionMutation = {
  updateCourseSession?:  {
    __typename: "CourseSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    isCompleted?: boolean | null,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userCourseSessionsId?: string | null,
    courseCourseSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCourseSessionMutationVariables = {
  input: DeleteCourseSessionInput,
  condition?: ModelCourseSessionConditionInput | null,
};

export type DeleteCourseSessionMutation = {
  deleteCourseSession?:  {
    __typename: "CourseSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    isCompleted?: boolean | null,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userCourseSessionsId?: string | null,
    courseCourseSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateSessionHoleMutationVariables = {
  input: CreateSessionHoleInput,
  condition?: ModelSessionHoleConditionInput | null,
};

export type CreateSessionHoleMutation = {
  createSessionHole?:  {
    __typename: "SessionHole",
    id: string,
    isCompleted: boolean,
    courseSessionId: string,
    courseSession?:  {
      __typename: "CourseSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      courseId: string,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userCourseSessionsId?: string | null,
      courseCourseSessionsId?: string | null,
      owner?: string | null,
    } | null,
    holeId: string,
    hole?:  {
      __typename: "Hole",
      id: string,
      number: number,
      par: number,
      distance: number,
      flagDistance: number,
      courseId: string,
      water?: Array< number | null > | null,
      bunker?: Array< number | null > | null,
      woods?: Array< number | null > | null,
      flag: number,
      green?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
      courseHolesId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    holeSessionHolesId?: string | null,
    courseSessionSessionHolesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateSessionHoleMutationVariables = {
  input: UpdateSessionHoleInput,
  condition?: ModelSessionHoleConditionInput | null,
};

export type UpdateSessionHoleMutation = {
  updateSessionHole?:  {
    __typename: "SessionHole",
    id: string,
    isCompleted: boolean,
    courseSessionId: string,
    courseSession?:  {
      __typename: "CourseSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      courseId: string,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userCourseSessionsId?: string | null,
      courseCourseSessionsId?: string | null,
      owner?: string | null,
    } | null,
    holeId: string,
    hole?:  {
      __typename: "Hole",
      id: string,
      number: number,
      par: number,
      distance: number,
      flagDistance: number,
      courseId: string,
      water?: Array< number | null > | null,
      bunker?: Array< number | null > | null,
      woods?: Array< number | null > | null,
      flag: number,
      green?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
      courseHolesId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    holeSessionHolesId?: string | null,
    courseSessionSessionHolesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteSessionHoleMutationVariables = {
  input: DeleteSessionHoleInput,
  condition?: ModelSessionHoleConditionInput | null,
};

export type DeleteSessionHoleMutation = {
  deleteSessionHole?:  {
    __typename: "SessionHole",
    id: string,
    isCompleted: boolean,
    courseSessionId: string,
    courseSession?:  {
      __typename: "CourseSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      courseId: string,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userCourseSessionsId?: string | null,
      courseCourseSessionsId?: string | null,
      owner?: string | null,
    } | null,
    holeId: string,
    hole?:  {
      __typename: "Hole",
      id: string,
      number: number,
      par: number,
      distance: number,
      flagDistance: number,
      courseId: string,
      water?: Array< number | null > | null,
      bunker?: Array< number | null > | null,
      woods?: Array< number | null > | null,
      flag: number,
      green?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
      courseHolesId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    holeSessionHolesId?: string | null,
    courseSessionSessionHolesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateBullseyeSessionMutationVariables = {
  input: CreateBullseyeSessionInput,
  condition?: ModelBullseyeSessionConditionInput | null,
};

export type CreateBullseyeSessionMutation = {
  createBullseyeSession?:  {
    __typename: "BullseyeSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    isCompleted?: boolean | null,
    difficulty?: number | null,
    scenario?: SessionScenario | null,
    results?:  Array< {
      __typename: "BullseyeResult",
      distance?: number | null,
    } | null > | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userBullseyeSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateBullseyeSessionMutationVariables = {
  input: UpdateBullseyeSessionInput,
  condition?: ModelBullseyeSessionConditionInput | null,
};

export type UpdateBullseyeSessionMutation = {
  updateBullseyeSession?:  {
    __typename: "BullseyeSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    isCompleted?: boolean | null,
    difficulty?: number | null,
    scenario?: SessionScenario | null,
    results?:  Array< {
      __typename: "BullseyeResult",
      distance?: number | null,
    } | null > | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userBullseyeSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteBullseyeSessionMutationVariables = {
  input: DeleteBullseyeSessionInput,
  condition?: ModelBullseyeSessionConditionInput | null,
};

export type DeleteBullseyeSessionMutation = {
  deleteBullseyeSession?:  {
    __typename: "BullseyeSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    isCompleted?: boolean | null,
    difficulty?: number | null,
    scenario?: SessionScenario | null,
    results?:  Array< {
      __typename: "BullseyeResult",
      distance?: number | null,
    } | null > | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userBullseyeSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateTargetSetMutationVariables = {
  input: CreateTargetSetInput,
  condition?: ModelTargetSetConditionInput | null,
};

export type CreateTargetSetMutation = {
  createTargetSet?:  {
    __typename: "TargetSet",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    userTargetSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateTargetSetMutationVariables = {
  input: UpdateTargetSetInput,
  condition?: ModelTargetSetConditionInput | null,
};

export type UpdateTargetSetMutation = {
  updateTargetSet?:  {
    __typename: "TargetSet",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    userTargetSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteTargetSetMutationVariables = {
  input: DeleteTargetSetInput,
  condition?: ModelTargetSetConditionInput | null,
};

export type DeleteTargetSetMutation = {
  deleteTargetSet?:  {
    __typename: "TargetSet",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    userTargetSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateUserBullseyeMutationVariables = {
  input: CreateUserBullseyeInput,
  condition?: ModelUserBullseyeConditionInput | null,
};

export type CreateUserBullseyeMutation = {
  createUserBullseye?:  {
    __typename: "UserBullseye",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?: string | null,
    scores?:  Array< {
      __typename: "BullseyeScore",
      difficulty?: number | null,
      score?: number | null,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userBullseyeId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserBullseyeMutationVariables = {
  input: UpdateUserBullseyeInput,
  condition?: ModelUserBullseyeConditionInput | null,
};

export type UpdateUserBullseyeMutation = {
  updateUserBullseye?:  {
    __typename: "UserBullseye",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?: string | null,
    scores?:  Array< {
      __typename: "BullseyeScore",
      difficulty?: number | null,
      score?: number | null,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userBullseyeId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserBullseyeMutationVariables = {
  input: DeleteUserBullseyeInput,
  condition?: ModelUserBullseyeConditionInput | null,
};

export type DeleteUserBullseyeMutation = {
  deleteUserBullseye?:  {
    __typename: "UserBullseye",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?: string | null,
    scores?:  Array< {
      __typename: "BullseyeScore",
      difficulty?: number | null,
      score?: number | null,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userBullseyeId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateGridGameSessionMutationVariables = {
  input: CreateGridGameSessionInput,
  condition?: ModelGridGameSessionConditionInput | null,
};

export type CreateGridGameSessionMutation = {
  createGridGameSession?:  {
    __typename: "GridGameSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targetDistance: number,
    shots: number,
    distances?:  Array< {
      __typename: "DistanceRecord",
      distance: number,
      shots: number,
    } | null > | null,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string,
    userGridGameSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateGridGameSessionMutationVariables = {
  input: UpdateGridGameSessionInput,
  condition?: ModelGridGameSessionConditionInput | null,
};

export type UpdateGridGameSessionMutation = {
  updateGridGameSession?:  {
    __typename: "GridGameSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targetDistance: number,
    shots: number,
    distances?:  Array< {
      __typename: "DistanceRecord",
      distance: number,
      shots: number,
    } | null > | null,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string,
    userGridGameSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteGridGameSessionMutationVariables = {
  input: DeleteGridGameSessionInput,
  condition?: ModelGridGameSessionConditionInput | null,
};

export type DeleteGridGameSessionMutation = {
  deleteGridGameSession?:  {
    __typename: "GridGameSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targetDistance: number,
    shots: number,
    distances?:  Array< {
      __typename: "DistanceRecord",
      distance: number,
      shots: number,
    } | null > | null,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string,
    userGridGameSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateGridGameHighScoreMutationVariables = {
  input: CreateGridGameHighScoreInput,
  condition?: ModelGridGameHighScoreConditionInput | null,
};

export type CreateGridGameHighScoreMutation = {
  createGridGameHighScore?:  {
    __typename: "GridGameHighScore",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    gridGameSessionId: string,
    targetDistance: number,
    shots: number,
    createdAt: string,
    updatedAt: string,
    userGridGameHighScoreId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateGridGameHighScoreMutationVariables = {
  input: UpdateGridGameHighScoreInput,
  condition?: ModelGridGameHighScoreConditionInput | null,
};

export type UpdateGridGameHighScoreMutation = {
  updateGridGameHighScore?:  {
    __typename: "GridGameHighScore",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    gridGameSessionId: string,
    targetDistance: number,
    shots: number,
    createdAt: string,
    updatedAt: string,
    userGridGameHighScoreId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteGridGameHighScoreMutationVariables = {
  input: DeleteGridGameHighScoreInput,
  condition?: ModelGridGameHighScoreConditionInput | null,
};

export type DeleteGridGameHighScoreMutation = {
  deleteGridGameHighScore?:  {
    __typename: "GridGameHighScore",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    gridGameSessionId: string,
    targetDistance: number,
    shots: number,
    createdAt: string,
    updatedAt: string,
    userGridGameHighScoreId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCoachMutationVariables = {
  input: CreateCoachInput,
  condition?: ModelCoachConditionInput | null,
};

export type CreateCoachMutation = {
  createCoach?:  {
    __typename: "Coach",
    id: string,
    cognitoId: string,
    profileImage?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    name: string,
    lastName: string,
    phoneNumber?: string | null,
    email?: string | null,
    bio?: string | null,
    school?: string | null,
    zipCode?: string | null,
    address?: string | null,
    state?: string | null,
    city?: string | null,
    country?: string | null,
    students?:  {
      __typename: "ModelCoachUserConnection",
      nextToken?: string | null,
    } | null,
    coachDrillNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessions?:  {
      __typename: "ModelCoachSessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCoachMutationVariables = {
  input: UpdateCoachInput,
  condition?: ModelCoachConditionInput | null,
};

export type UpdateCoachMutation = {
  updateCoach?:  {
    __typename: "Coach",
    id: string,
    cognitoId: string,
    profileImage?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    name: string,
    lastName: string,
    phoneNumber?: string | null,
    email?: string | null,
    bio?: string | null,
    school?: string | null,
    zipCode?: string | null,
    address?: string | null,
    state?: string | null,
    city?: string | null,
    country?: string | null,
    students?:  {
      __typename: "ModelCoachUserConnection",
      nextToken?: string | null,
    } | null,
    coachDrillNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessions?:  {
      __typename: "ModelCoachSessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCoachMutationVariables = {
  input: DeleteCoachInput,
  condition?: ModelCoachConditionInput | null,
};

export type DeleteCoachMutation = {
  deleteCoach?:  {
    __typename: "Coach",
    id: string,
    cognitoId: string,
    profileImage?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    name: string,
    lastName: string,
    phoneNumber?: string | null,
    email?: string | null,
    bio?: string | null,
    school?: string | null,
    zipCode?: string | null,
    address?: string | null,
    state?: string | null,
    city?: string | null,
    country?: string | null,
    students?:  {
      __typename: "ModelCoachUserConnection",
      nextToken?: string | null,
    } | null,
    coachDrillNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessions?:  {
      __typename: "ModelCoachSessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCoachUserMutationVariables = {
  input: CreateCoachUserInput,
  condition?: ModelCoachUserConditionInput | null,
};

export type CreateCoachUserMutation = {
  createCoachUser?:  {
    __typename: "CoachUser",
    id: string,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelCoachUserNotesConnection",
      nextToken?: string | null,
    } | null,
    status?: CoachUserStatus | null,
    createdAt: string,
    updatedAt: string,
    coachStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCoachUserMutationVariables = {
  input: UpdateCoachUserInput,
  condition?: ModelCoachUserConditionInput | null,
};

export type UpdateCoachUserMutation = {
  updateCoachUser?:  {
    __typename: "CoachUser",
    id: string,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelCoachUserNotesConnection",
      nextToken?: string | null,
    } | null,
    status?: CoachUserStatus | null,
    createdAt: string,
    updatedAt: string,
    coachStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCoachUserMutationVariables = {
  input: DeleteCoachUserInput,
  condition?: ModelCoachUserConditionInput | null,
};

export type DeleteCoachUserMutation = {
  deleteCoachUser?:  {
    __typename: "CoachUser",
    id: string,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelCoachUserNotesConnection",
      nextToken?: string | null,
    } | null,
    status?: CoachUserStatus | null,
    createdAt: string,
    updatedAt: string,
    coachStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCoachSessionMutationVariables = {
  input: CreateCoachSessionInput,
  condition?: ModelCoachSessionConditionInput | null,
};

export type CreateCoachSessionMutation = {
  createCoachSession?:  {
    __typename: "CoachSession",
    id: string,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    name?: string | null,
    students?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    drills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    createdAt: string,
    updatedAt: string,
    coachCoachSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCoachSessionMutationVariables = {
  input: UpdateCoachSessionInput,
  condition?: ModelCoachSessionConditionInput | null,
};

export type UpdateCoachSessionMutation = {
  updateCoachSession?:  {
    __typename: "CoachSession",
    id: string,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    name?: string | null,
    students?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    drills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    createdAt: string,
    updatedAt: string,
    coachCoachSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCoachSessionMutationVariables = {
  input: DeleteCoachSessionInput,
  condition?: ModelCoachSessionConditionInput | null,
};

export type DeleteCoachSessionMutation = {
  deleteCoachSession?:  {
    __typename: "CoachSession",
    id: string,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    name?: string | null,
    students?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    drills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    createdAt: string,
    updatedAt: string,
    coachCoachSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCoachSessionUserMutationVariables = {
  input: CreateCoachSessionUserInput,
  condition?: ModelCoachSessionUserConditionInput | null,
};

export type CreateCoachSessionUserMutation = {
  createCoachSessionUser?:  {
    __typename: "CoachSessionUser",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId: string,
    coach?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachSessionId?: string | null,
    coachSession?:  {
      __typename: "CoachSession",
      id: string,
      coachId?: string | null,
      name?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      coachCoachSessionsId?: string | null,
      owner?: string | null,
    } | null,
    timesPlayed?: number | null,
    lastCompleted?: string | null,
    createdAt: string,
    updatedAt: string,
    userMyCoachSessionsId?: string | null,
    coachSessionStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCoachSessionUserMutationVariables = {
  input: UpdateCoachSessionUserInput,
  condition?: ModelCoachSessionUserConditionInput | null,
};

export type UpdateCoachSessionUserMutation = {
  updateCoachSessionUser?:  {
    __typename: "CoachSessionUser",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId: string,
    coach?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachSessionId?: string | null,
    coachSession?:  {
      __typename: "CoachSession",
      id: string,
      coachId?: string | null,
      name?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      coachCoachSessionsId?: string | null,
      owner?: string | null,
    } | null,
    timesPlayed?: number | null,
    lastCompleted?: string | null,
    createdAt: string,
    updatedAt: string,
    userMyCoachSessionsId?: string | null,
    coachSessionStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCoachSessionUserMutationVariables = {
  input: DeleteCoachSessionUserInput,
  condition?: ModelCoachSessionUserConditionInput | null,
};

export type DeleteCoachSessionUserMutation = {
  deleteCoachSessionUser?:  {
    __typename: "CoachSessionUser",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId: string,
    coach?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachSessionId?: string | null,
    coachSession?:  {
      __typename: "CoachSession",
      id: string,
      coachId?: string | null,
      name?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      coachCoachSessionsId?: string | null,
      owner?: string | null,
    } | null,
    timesPlayed?: number | null,
    lastCompleted?: string | null,
    createdAt: string,
    updatedAt: string,
    userMyCoachSessionsId?: string | null,
    coachSessionStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCoachUserNotesMutationVariables = {
  input: CreateCoachUserNotesInput,
  condition?: ModelCoachUserNotesConditionInput | null,
};

export type CreateCoachUserNotesMutation = {
  createCoachUserNotes?:  {
    __typename: "CoachUserNotes",
    id: string,
    coachUserId: string,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    coachUserNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCoachUserNotesMutationVariables = {
  input: UpdateCoachUserNotesInput,
  condition?: ModelCoachUserNotesConditionInput | null,
};

export type UpdateCoachUserNotesMutation = {
  updateCoachUserNotes?:  {
    __typename: "CoachUserNotes",
    id: string,
    coachUserId: string,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    coachUserNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCoachUserNotesMutationVariables = {
  input: DeleteCoachUserNotesInput,
  condition?: ModelCoachUserNotesConditionInput | null,
};

export type DeleteCoachUserNotesMutation = {
  deleteCoachUserNotes?:  {
    __typename: "CoachUserNotes",
    id: string,
    coachUserId: string,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    coachUserNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCoachSessionDrillMutationVariables = {
  input: CreateCoachSessionDrillInput,
  condition?: ModelCoachSessionDrillConditionInput | null,
};

export type CreateCoachSessionDrillMutation = {
  createCoachSessionDrill?:  {
    __typename: "CoachSessionDrill",
    id: string,
    coachSessionId?: string | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    coachSessionDrillsId?: string | null,
  } | null,
};

export type UpdateCoachSessionDrillMutationVariables = {
  input: UpdateCoachSessionDrillInput,
  condition?: ModelCoachSessionDrillConditionInput | null,
};

export type UpdateCoachSessionDrillMutation = {
  updateCoachSessionDrill?:  {
    __typename: "CoachSessionDrill",
    id: string,
    coachSessionId?: string | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    coachSessionDrillsId?: string | null,
  } | null,
};

export type DeleteCoachSessionDrillMutationVariables = {
  input: DeleteCoachSessionDrillInput,
  condition?: ModelCoachSessionDrillConditionInput | null,
};

export type DeleteCoachSessionDrillMutation = {
  deleteCoachSessionDrill?:  {
    __typename: "CoachSessionDrill",
    id: string,
    coachSessionId?: string | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    coachSessionDrillsId?: string | null,
  } | null,
};

export type CreateCoachDrillNotesMutationVariables = {
  input: CreateCoachDrillNotesInput,
  condition?: ModelCoachDrillNotesConditionInput | null,
};

export type CreateCoachDrillNotesMutation = {
  createCoachDrillNotes?:  {
    __typename: "CoachDrillNotes",
    id: string,
    coachId: string,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    share?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillCoachNotesId?: string | null,
    coachCoachDrillNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCoachDrillNotesMutationVariables = {
  input: UpdateCoachDrillNotesInput,
  condition?: ModelCoachDrillNotesConditionInput | null,
};

export type UpdateCoachDrillNotesMutation = {
  updateCoachDrillNotes?:  {
    __typename: "CoachDrillNotes",
    id: string,
    coachId: string,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    share?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillCoachNotesId?: string | null,
    coachCoachDrillNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCoachDrillNotesMutationVariables = {
  input: DeleteCoachDrillNotesInput,
  condition?: ModelCoachDrillNotesConditionInput | null,
};

export type DeleteCoachDrillNotesMutation = {
  deleteCoachDrillNotes?:  {
    __typename: "CoachDrillNotes",
    id: string,
    coachId: string,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    share?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillCoachNotesId?: string | null,
    coachCoachDrillNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateTrainingSessionMutationVariables = {
  userId: string,
  drillsIds?: Array< string | null > | null,
  time?: number | null,
  balls?: number | null,
  mode?: SessionMode | null,
  name?: string | null,
};

export type CreateTrainingSessionMutation = {
  createTrainingSession?:  {
    __typename: "Session",
    id: string,
    parentId?: string | null,
    name?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    isCompleted?: boolean | null,
    saved?: boolean | null,
    mode?: SessionMode | null,
    scenario?: SessionScenario | null,
    createdAt: string,
    updatedAt: string,
    userMySessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CloneTrainingSessionMutationVariables = {
  userId: string,
  sessionId: string,
};

export type CloneTrainingSessionMutation = {
  cloneTrainingSession?:  {
    __typename: "Session",
    id: string,
    parentId?: string | null,
    name?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    isCompleted?: boolean | null,
    saved?: boolean | null,
    mode?: SessionMode | null,
    scenario?: SessionScenario | null,
    createdAt: string,
    updatedAt: string,
    userMySessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  id: string,
};

export type CreateUserMutation = {
  createUser?: string | null,
};

export type UpdateUsernameMutationVariables = {
  userId: string,
  username?: string | null,
};

export type UpdateUsernameMutation = {
  updateUsername?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    gender?: string | null,
    age?: string | null,
    handicap?: string | null,
    objectives?: Array< string | null > | null,
    evaluation?:  Array< {
      __typename: "Evaluation",
      name: string,
      score: number,
    } | null > | null,
    mySessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    myDrills?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    featureFlags?:  Array< {
      __typename: "FeatureFlag",
      name: string,
      value: boolean,
    } | null > | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    vote?:  {
      __typename: "ModelVoteConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseyeSessions?:  {
      __typename: "ModelBullseyeSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseye?:  {
      __typename: "ModelUserBullseyeConnection",
      nextToken?: string | null,
    } | null,
    targetSets?:  {
      __typename: "ModelTargetSetConnection",
      nextToken?: string | null,
    } | null,
    gridGameSessions?:  {
      __typename: "ModelGridGameSessionConnection",
      nextToken?: string | null,
    } | null,
    gridGameHighScore?:  {
      __typename: "ModelGridGameHighScoreConnection",
      nextToken?: string | null,
    } | null,
    deleted?: boolean | null,
    coachUserId?: string | null,
    myCoach?:  {
      __typename: "CoachUser",
      id: string,
      userId?: string | null,
      coachId?: string | null,
      status?: CoachUserStatus | null,
      createdAt: string,
      updatedAt: string,
      coachStudentsId?: string | null,
      owner?: string | null,
    } | null,
    myCoachSessions?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCourseSessionMutationVariables = {
  userId: string,
  courseId: string,
  playingCareer?: boolean | null,
};

export type CreateCourseSessionMutation = {
  createCourseSession?:  {
    __typename: "CourseSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    isCompleted?: boolean | null,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userCourseSessionsId?: string | null,
    courseCourseSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type RemoveUserMutationVariables = {
};

export type RemoveUserMutation = {
  removeUser?: string | null,
};

export type CompleteGridGameMutationVariables = {
  userId: string,
  id: string,
  targetDistance: number,
  shots: number,
  distances?: Array< DistanceScoreInput | null > | null,
  isCompleted: boolean,
};

export type CompleteGridGameMutation = {
  completeGridGame?:  {
    __typename: "GridGameSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targetDistance: number,
    shots: number,
    distances?:  Array< {
      __typename: "DistanceRecord",
      distance: number,
      shots: number,
    } | null > | null,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string,
    userGridGameSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    gender?: string | null,
    age?: string | null,
    handicap?: string | null,
    objectives?: Array< string | null > | null,
    evaluation?:  Array< {
      __typename: "Evaluation",
      name: string,
      score: number,
    } | null > | null,
    mySessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    myDrills?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    featureFlags?:  Array< {
      __typename: "FeatureFlag",
      name: string,
      value: boolean,
    } | null > | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    vote?:  {
      __typename: "ModelVoteConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseyeSessions?:  {
      __typename: "ModelBullseyeSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseye?:  {
      __typename: "ModelUserBullseyeConnection",
      nextToken?: string | null,
    } | null,
    targetSets?:  {
      __typename: "ModelTargetSetConnection",
      nextToken?: string | null,
    } | null,
    gridGameSessions?:  {
      __typename: "ModelGridGameSessionConnection",
      nextToken?: string | null,
    } | null,
    gridGameHighScore?:  {
      __typename: "ModelGridGameHighScoreConnection",
      nextToken?: string | null,
    } | null,
    deleted?: boolean | null,
    coachUserId?: string | null,
    myCoach?:  {
      __typename: "CoachUser",
      id: string,
      userId?: string | null,
      coachId?: string | null,
      status?: CoachUserStatus | null,
      createdAt: string,
      updatedAt: string,
      coachStudentsId?: string | null,
      owner?: string | null,
    } | null,
    myCoachSessions?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByUsernameQueryVariables = {
  username: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByUsernameQuery = {
  usersByUsername?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByCoachUserIdQueryVariables = {
  coachUserId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByCoachUserIdQuery = {
  usersByCoachUserId?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserDrillsQueryVariables = {
  id: string,
};

export type GetUserDrillsQuery = {
  getUserDrills?:  {
    __typename: "UserDrills",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    currentLevel?: number | null,
    lastNumberOfHits?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userMyDrillsId?: string | null,
    drillUsersId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListUserDrillsQueryVariables = {
  filter?: ModelUserDrillsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserDrillsQuery = {
  listUserDrills?:  {
    __typename: "ModelUserDrillsConnection",
    items:  Array< {
      __typename: "UserDrills",
      userId: string,
      drillId: string,
      notes?: string | null,
      currentLevel?: number | null,
      lastNumberOfHits?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userMyDrillsId?: string | null,
      drillUsersId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserDrillsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserDrillsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserDrillsByUserIdQuery = {
  userDrillsByUserId?:  {
    __typename: "ModelUserDrillsConnection",
    items:  Array< {
      __typename: "UserDrills",
      userId: string,
      drillId: string,
      notes?: string | null,
      currentLevel?: number | null,
      lastNumberOfHits?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userMyDrillsId?: string | null,
      drillUsersId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserDrillsByDrillIdQueryVariables = {
  drillId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserDrillsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserDrillsByDrillIdQuery = {
  userDrillsByDrillId?:  {
    __typename: "ModelUserDrillsConnection",
    items:  Array< {
      __typename: "UserDrills",
      userId: string,
      drillId: string,
      notes?: string | null,
      currentLevel?: number | null,
      lastNumberOfHits?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userMyDrillsId?: string | null,
      drillUsersId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFeedbackQueryVariables = {
  id: string,
};

export type GetFeedbackQuery = {
  getFeedback?:  {
    __typename: "Feedback",
    id: string,
    score?: number | null,
    details?: string | null,
    screen?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFeedbacksId?: string | null,
  } | null,
};

export type ListFeedbacksQueryVariables = {
  filter?: ModelFeedbackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedbacksQuery = {
  listFeedbacks?:  {
    __typename: "ModelFeedbackConnection",
    items:  Array< {
      __typename: "Feedback",
      id: string,
      score?: number | null,
      details?: string | null,
      screen?: string | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
      userFeedbacksId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FeedbacksByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFeedbackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FeedbacksByUserIdQuery = {
  feedbacksByUserId?:  {
    __typename: "ModelFeedbackConnection",
    items:  Array< {
      __typename: "Feedback",
      id: string,
      score?: number | null,
      details?: string | null,
      screen?: string | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
      userFeedbacksId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote?:  {
    __typename: "Vote",
    id: string,
    feature: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVoteId?: string | null,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes?:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      feature: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      userVoteId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VotesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VotesByUserIdQuery = {
  votesByUserId?:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      feature: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      userVoteId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    trackingName?: string | null,
    description?: string | null,
    drills?:  {
      __typename: "ModelDrillConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    games?: Array< string | null > | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsQuery = {
  listSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserSkillQueryVariables = {
  id: string,
};

export type GetUserSkillQuery = {
  getUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    level?: number | null,
    greenZone?: number | null,
    redZone?: number | null,
    yellowZone?: number | null,
    holeZone?: number | null,
    outZone?: number | null,
    leftYellowZone?: number | null,
    rightYellowZone?: number | null,
    leftRedZone?: number | null,
    rightRedZone?: number | null,
    streak?: number | null,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserSkillsId?: string | null,
    skillUserSkillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListUserSkillsQueryVariables = {
  filter?: ModelUserSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserSkillsQuery = {
  listUserSkills?:  {
    __typename: "ModelUserSkillConnection",
    items:  Array< {
      __typename: "UserSkill",
      id: string,
      level?: number | null,
      greenZone?: number | null,
      redZone?: number | null,
      yellowZone?: number | null,
      holeZone?: number | null,
      outZone?: number | null,
      leftYellowZone?: number | null,
      rightYellowZone?: number | null,
      leftRedZone?: number | null,
      rightRedZone?: number | null,
      streak?: number | null,
      skillId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      userUserSkillsId?: string | null,
      skillUserSkillsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserSkillsBySkillIdQueryVariables = {
  skillId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserSkillsBySkillIdQuery = {
  userSkillsBySkillId?:  {
    __typename: "ModelUserSkillConnection",
    items:  Array< {
      __typename: "UserSkill",
      id: string,
      level?: number | null,
      greenZone?: number | null,
      redZone?: number | null,
      yellowZone?: number | null,
      holeZone?: number | null,
      outZone?: number | null,
      leftYellowZone?: number | null,
      rightYellowZone?: number | null,
      leftRedZone?: number | null,
      rightRedZone?: number | null,
      streak?: number | null,
      skillId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      userUserSkillsId?: string | null,
      skillUserSkillsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserSkillsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserSkillsByUserIdQuery = {
  userSkillsByUserId?:  {
    __typename: "ModelUserSkillConnection",
    items:  Array< {
      __typename: "UserSkill",
      id: string,
      level?: number | null,
      greenZone?: number | null,
      redZone?: number | null,
      yellowZone?: number | null,
      holeZone?: number | null,
      outZone?: number | null,
      leftYellowZone?: number | null,
      rightYellowZone?: number | null,
      leftRedZone?: number | null,
      rightRedZone?: number | null,
      streak?: number | null,
      skillId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      userUserSkillsId?: string | null,
      skillUserSkillsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDrillQueryVariables = {
  id: string,
};

export type GetDrillQuery = {
  getDrill?:  {
    __typename: "Drill",
    id: string,
    name: string,
    trackingName?: string | null,
    description: string,
    goal: string,
    videoId: string,
    duration: number,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    hidden?: boolean | null,
    tries?: number | null,
    level?: number | null,
    club?: string | null,
    title?: string | null,
    challenge: string,
    users?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    isDynamic?: boolean | null,
    thirdOption?: boolean | null,
    dynamicDifficulties?:  {
      __typename: "DynamicDrillDifficulty",
      beginner: string,
      medium: string,
      advanced: string,
      pro: string,
    } | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    type?: DrillType | null,
    coachNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessionDrills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    skillDrillsId?: string | null,
  } | null,
};

export type ListDrillsQueryVariables = {
  filter?: ModelDrillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDrillsQuery = {
  listDrills?:  {
    __typename: "ModelDrillConnection",
    items:  Array< {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DrillsBySkillIdQueryVariables = {
  skillId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDrillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DrillsBySkillIdQuery = {
  drillsBySkillId?:  {
    __typename: "ModelDrillConnection",
    items:  Array< {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession?:  {
    __typename: "Session",
    id: string,
    parentId?: string | null,
    name?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    isCompleted?: boolean | null,
    saved?: boolean | null,
    mode?: SessionMode | null,
    scenario?: SessionScenario | null,
    createdAt: string,
    updatedAt: string,
    userMySessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      parentId?: string | null,
      name?: string | null,
      userId: string,
      duration?: number | null,
      isCompleted?: boolean | null,
      saved?: boolean | null,
      mode?: SessionMode | null,
      scenario?: SessionScenario | null,
      createdAt: string,
      updatedAt: string,
      userMySessionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SessionsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionsByUserIdQuery = {
  sessionsByUserId?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      parentId?: string | null,
      name?: string | null,
      userId: string,
      duration?: number | null,
      isCompleted?: boolean | null,
      saved?: boolean | null,
      mode?: SessionMode | null,
      scenario?: SessionScenario | null,
      createdAt: string,
      updatedAt: string,
      userMySessionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSessionDrillQueryVariables = {
  id: string,
};

export type GetSessionDrillQuery = {
  getSessionDrill?:  {
    __typename: "SessionDrill",
    id: string,
    isCompleted: boolean,
    sessionId: string,
    session?:  {
      __typename: "Session",
      id: string,
      parentId?: string | null,
      name?: string | null,
      userId: string,
      duration?: number | null,
      isCompleted?: boolean | null,
      saved?: boolean | null,
      mode?: SessionMode | null,
      scenario?: SessionScenario | null,
      createdAt: string,
      updatedAt: string,
      userMySessionsId?: string | null,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    mode?: SessionMode | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillSessionDrillsId?: string | null,
    sessionSessionDrillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListSessionDrillsQueryVariables = {
  filter?: ModelSessionDrillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionDrillsQuery = {
  listSessionDrills?:  {
    __typename: "ModelSessionDrillConnection",
    items:  Array< {
      __typename: "SessionDrill",
      id: string,
      isCompleted: boolean,
      sessionId: string,
      drillId: string,
      mode?: SessionMode | null,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      drillSessionDrillsId?: string | null,
      sessionSessionDrillsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SessionDrillsBySessionIdQueryVariables = {
  sessionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionDrillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionDrillsBySessionIdQuery = {
  sessionDrillsBySessionId?:  {
    __typename: "ModelSessionDrillConnection",
    items:  Array< {
      __typename: "SessionDrill",
      id: string,
      isCompleted: boolean,
      sessionId: string,
      drillId: string,
      mode?: SessionMode | null,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      drillSessionDrillsId?: string | null,
      sessionSessionDrillsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SessionDrillsByDrillIdQueryVariables = {
  drillId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionDrillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionDrillsByDrillIdQuery = {
  sessionDrillsByDrillId?:  {
    __typename: "ModelSessionDrillConnection",
    items:  Array< {
      __typename: "SessionDrill",
      id: string,
      isCompleted: boolean,
      sessionId: string,
      drillId: string,
      mode?: SessionMode | null,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      drillSessionDrillsId?: string | null,
      sessionSessionDrillsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    holes?:  {
      __typename: "ModelHoleConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHoleQueryVariables = {
  id: string,
};

export type GetHoleQuery = {
  getHole?:  {
    __typename: "Hole",
    id: string,
    number: number,
    par: number,
    distance: number,
    flagDistance: number,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    coverImage:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    water?: Array< number | null > | null,
    bunker?: Array< number | null > | null,
    woods?: Array< number | null > | null,
    flag: number,
    green?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    courseHolesId?: string | null,
  } | null,
};

export type ListHolesQueryVariables = {
  filter?: ModelHoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHolesQuery = {
  listHoles?:  {
    __typename: "ModelHoleConnection",
    items:  Array< {
      __typename: "Hole",
      id: string,
      number: number,
      par: number,
      distance: number,
      flagDistance: number,
      courseId: string,
      water?: Array< number | null > | null,
      bunker?: Array< number | null > | null,
      woods?: Array< number | null > | null,
      flag: number,
      green?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
      courseHolesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type HolesByCourseIdQueryVariables = {
  courseId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type HolesByCourseIdQuery = {
  holesByCourseId?:  {
    __typename: "ModelHoleConnection",
    items:  Array< {
      __typename: "Hole",
      id: string,
      number: number,
      par: number,
      distance: number,
      flagDistance: number,
      courseId: string,
      water?: Array< number | null > | null,
      bunker?: Array< number | null > | null,
      woods?: Array< number | null > | null,
      flag: number,
      green?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
      courseHolesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseSessionQueryVariables = {
  id: string,
};

export type GetCourseSessionQuery = {
  getCourseSession?:  {
    __typename: "CourseSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    isCompleted?: boolean | null,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userCourseSessionsId?: string | null,
    courseCourseSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCourseSessionsQueryVariables = {
  filter?: ModelCourseSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseSessionsQuery = {
  listCourseSessions?:  {
    __typename: "ModelCourseSessionConnection",
    items:  Array< {
      __typename: "CourseSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      courseId: string,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userCourseSessionsId?: string | null,
      courseCourseSessionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CourseSessionsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CourseSessionsByUserIdQuery = {
  courseSessionsByUserId?:  {
    __typename: "ModelCourseSessionConnection",
    items:  Array< {
      __typename: "CourseSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      courseId: string,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userCourseSessionsId?: string | null,
      courseCourseSessionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CourseSessionsByCourseIdQueryVariables = {
  courseId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CourseSessionsByCourseIdQuery = {
  courseSessionsByCourseId?:  {
    __typename: "ModelCourseSessionConnection",
    items:  Array< {
      __typename: "CourseSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      courseId: string,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userCourseSessionsId?: string | null,
      courseCourseSessionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSessionHoleQueryVariables = {
  id: string,
};

export type GetSessionHoleQuery = {
  getSessionHole?:  {
    __typename: "SessionHole",
    id: string,
    isCompleted: boolean,
    courseSessionId: string,
    courseSession?:  {
      __typename: "CourseSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      courseId: string,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userCourseSessionsId?: string | null,
      courseCourseSessionsId?: string | null,
      owner?: string | null,
    } | null,
    holeId: string,
    hole?:  {
      __typename: "Hole",
      id: string,
      number: number,
      par: number,
      distance: number,
      flagDistance: number,
      courseId: string,
      water?: Array< number | null > | null,
      bunker?: Array< number | null > | null,
      woods?: Array< number | null > | null,
      flag: number,
      green?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
      courseHolesId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    holeSessionHolesId?: string | null,
    courseSessionSessionHolesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListSessionHolesQueryVariables = {
  filter?: ModelSessionHoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionHolesQuery = {
  listSessionHoles?:  {
    __typename: "ModelSessionHoleConnection",
    items:  Array< {
      __typename: "SessionHole",
      id: string,
      isCompleted: boolean,
      courseSessionId: string,
      holeId: string,
      createdAt: string,
      updatedAt: string,
      holeSessionHolesId?: string | null,
      courseSessionSessionHolesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SessionHolesByCourseSessionIdQueryVariables = {
  courseSessionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionHoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionHolesByCourseSessionIdQuery = {
  sessionHolesByCourseSessionId?:  {
    __typename: "ModelSessionHoleConnection",
    items:  Array< {
      __typename: "SessionHole",
      id: string,
      isCompleted: boolean,
      courseSessionId: string,
      holeId: string,
      createdAt: string,
      updatedAt: string,
      holeSessionHolesId?: string | null,
      courseSessionSessionHolesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SessionHolesByHoleIdQueryVariables = {
  holeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionHoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionHolesByHoleIdQuery = {
  sessionHolesByHoleId?:  {
    __typename: "ModelSessionHoleConnection",
    items:  Array< {
      __typename: "SessionHole",
      id: string,
      isCompleted: boolean,
      courseSessionId: string,
      holeId: string,
      createdAt: string,
      updatedAt: string,
      holeSessionHolesId?: string | null,
      courseSessionSessionHolesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBullseyeSessionQueryVariables = {
  id: string,
};

export type GetBullseyeSessionQuery = {
  getBullseyeSession?:  {
    __typename: "BullseyeSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    isCompleted?: boolean | null,
    difficulty?: number | null,
    scenario?: SessionScenario | null,
    results?:  Array< {
      __typename: "BullseyeResult",
      distance?: number | null,
    } | null > | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userBullseyeSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListBullseyeSessionsQueryVariables = {
  filter?: ModelBullseyeSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBullseyeSessionsQuery = {
  listBullseyeSessions?:  {
    __typename: "ModelBullseyeSessionConnection",
    items:  Array< {
      __typename: "BullseyeSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      difficulty?: number | null,
      scenario?: SessionScenario | null,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBullseyeSessionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BullseyeSessionsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBullseyeSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BullseyeSessionsByUserIdQuery = {
  bullseyeSessionsByUserId?:  {
    __typename: "ModelBullseyeSessionConnection",
    items:  Array< {
      __typename: "BullseyeSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      difficulty?: number | null,
      scenario?: SessionScenario | null,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBullseyeSessionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTargetSetQueryVariables = {
  id: string,
};

export type GetTargetSetQuery = {
  getTargetSet?:  {
    __typename: "TargetSet",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    userTargetSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListTargetSetsQueryVariables = {
  filter?: ModelTargetSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTargetSetsQuery = {
  listTargetSets?:  {
    __typename: "ModelTargetSetConnection",
    items:  Array< {
      __typename: "TargetSet",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      userTargetSetsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TargetSetsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTargetSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TargetSetsByUserIdQuery = {
  targetSetsByUserId?:  {
    __typename: "ModelTargetSetConnection",
    items:  Array< {
      __typename: "TargetSet",
      id: string,
      userId: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      userTargetSetsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserBullseyeQueryVariables = {
  id: string,
};

export type GetUserBullseyeQuery = {
  getUserBullseye?:  {
    __typename: "UserBullseye",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?: string | null,
    scores?:  Array< {
      __typename: "BullseyeScore",
      difficulty?: number | null,
      score?: number | null,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userBullseyeId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListUserBullseyesQueryVariables = {
  filter?: ModelUserBullseyeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserBullseyesQuery = {
  listUserBullseyes?:  {
    __typename: "ModelUserBullseyeConnection",
    items:  Array< {
      __typename: "UserBullseye",
      userId: string,
      notes?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userBullseyeId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserBullseyesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserBullseyeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserBullseyesByUserIdQuery = {
  userBullseyesByUserId?:  {
    __typename: "ModelUserBullseyeConnection",
    items:  Array< {
      __typename: "UserBullseye",
      userId: string,
      notes?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userBullseyeId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGridGameSessionQueryVariables = {
  id: string,
};

export type GetGridGameSessionQuery = {
  getGridGameSession?:  {
    __typename: "GridGameSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targetDistance: number,
    shots: number,
    distances?:  Array< {
      __typename: "DistanceRecord",
      distance: number,
      shots: number,
    } | null > | null,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string,
    userGridGameSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListGridGameSessionsQueryVariables = {
  filter?: ModelGridGameSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGridGameSessionsQuery = {
  listGridGameSessions?:  {
    __typename: "ModelGridGameSessionConnection",
    items:  Array< {
      __typename: "GridGameSession",
      id: string,
      userId: string,
      targetDistance: number,
      shots: number,
      isCompleted: boolean,
      createdAt: string,
      updatedAt: string,
      userGridGameSessionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GridGameSessionsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGridGameSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GridGameSessionsByUserIdQuery = {
  gridGameSessionsByUserId?:  {
    __typename: "ModelGridGameSessionConnection",
    items:  Array< {
      __typename: "GridGameSession",
      id: string,
      userId: string,
      targetDistance: number,
      shots: number,
      isCompleted: boolean,
      createdAt: string,
      updatedAt: string,
      userGridGameSessionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGridGameHighScoreQueryVariables = {
  id: string,
};

export type GetGridGameHighScoreQuery = {
  getGridGameHighScore?:  {
    __typename: "GridGameHighScore",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    gridGameSessionId: string,
    targetDistance: number,
    shots: number,
    createdAt: string,
    updatedAt: string,
    userGridGameHighScoreId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListGridGameHighScoresQueryVariables = {
  filter?: ModelGridGameHighScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGridGameHighScoresQuery = {
  listGridGameHighScores?:  {
    __typename: "ModelGridGameHighScoreConnection",
    items:  Array< {
      __typename: "GridGameHighScore",
      id: string,
      userId: string,
      gridGameSessionId: string,
      targetDistance: number,
      shots: number,
      createdAt: string,
      updatedAt: string,
      userGridGameHighScoreId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GridGameHighScoresByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGridGameHighScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GridGameHighScoresByUserIdQuery = {
  gridGameHighScoresByUserId?:  {
    __typename: "ModelGridGameHighScoreConnection",
    items:  Array< {
      __typename: "GridGameHighScore",
      id: string,
      userId: string,
      gridGameSessionId: string,
      targetDistance: number,
      shots: number,
      createdAt: string,
      updatedAt: string,
      userGridGameHighScoreId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GridGameHighScoresByGridGameSessionIdQueryVariables = {
  gridGameSessionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGridGameHighScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GridGameHighScoresByGridGameSessionIdQuery = {
  gridGameHighScoresByGridGameSessionId?:  {
    __typename: "ModelGridGameHighScoreConnection",
    items:  Array< {
      __typename: "GridGameHighScore",
      id: string,
      userId: string,
      gridGameSessionId: string,
      targetDistance: number,
      shots: number,
      createdAt: string,
      updatedAt: string,
      userGridGameHighScoreId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAppInfoQueryVariables = {
  id: string,
};

export type GetAppInfoQuery = {
  getAppInfo?:  {
    __typename: "AppInfo",
    paywallVideoId?: string | null,
    env?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAppInfosQueryVariables = {
  filter?: ModelAppInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppInfosQuery = {
  listAppInfos?:  {
    __typename: "ModelAppInfoConnection",
    items:  Array< {
      __typename: "AppInfo",
      paywallVideoId?: string | null,
      env?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    videoId?: string | null,
    title?: string | null,
    text?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      videoId?: string | null,
      title?: string | null,
      text?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChallengeDrillsQueryVariables = {
  id: string,
};

export type GetChallengeDrillsQuery = {
  getChallengeDrills?:  {
    __typename: "ChallengeDrills",
    id: string,
    hidden: boolean,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    isFirstStep: boolean,
    createdAt: string,
    updatedAt: string,
    skillChallengeDrillsId?: string | null,
    drillChallengeDrillsId?: string | null,
  } | null,
};

export type ListChallengeDrillsQueryVariables = {
  filter?: ModelChallengeDrillsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChallengeDrillsQuery = {
  listChallengeDrills?:  {
    __typename: "ModelChallengeDrillsConnection",
    items:  Array< {
      __typename: "ChallengeDrills",
      id: string,
      hidden: boolean,
      skillId: string,
      drillId: string,
      isFirstStep: boolean,
      createdAt: string,
      updatedAt: string,
      skillChallengeDrillsId?: string | null,
      drillChallengeDrillsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChallengeDrillsBySkillIdQueryVariables = {
  skillId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChallengeDrillsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChallengeDrillsBySkillIdQuery = {
  challengeDrillsBySkillId?:  {
    __typename: "ModelChallengeDrillsConnection",
    items:  Array< {
      __typename: "ChallengeDrills",
      id: string,
      hidden: boolean,
      skillId: string,
      drillId: string,
      isFirstStep: boolean,
      createdAt: string,
      updatedAt: string,
      skillChallengeDrillsId?: string | null,
      drillChallengeDrillsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChallengeDrillsByDrillIdQueryVariables = {
  drillId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChallengeDrillsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChallengeDrillsByDrillIdQuery = {
  challengeDrillsByDrillId?:  {
    __typename: "ModelChallengeDrillsConnection",
    items:  Array< {
      __typename: "ChallengeDrills",
      id: string,
      hidden: boolean,
      skillId: string,
      drillId: string,
      isFirstStep: boolean,
      createdAt: string,
      updatedAt: string,
      skillChallengeDrillsId?: string | null,
      drillChallengeDrillsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCoachQueryVariables = {
  id: string,
};

export type GetCoachQuery = {
  getCoach?:  {
    __typename: "Coach",
    id: string,
    cognitoId: string,
    profileImage?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    name: string,
    lastName: string,
    phoneNumber?: string | null,
    email?: string | null,
    bio?: string | null,
    school?: string | null,
    zipCode?: string | null,
    address?: string | null,
    state?: string | null,
    city?: string | null,
    country?: string | null,
    students?:  {
      __typename: "ModelCoachUserConnection",
      nextToken?: string | null,
    } | null,
    coachDrillNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessions?:  {
      __typename: "ModelCoachSessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCoachesQueryVariables = {
  filter?: ModelCoachFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoachesQuery = {
  listCoaches?:  {
    __typename: "ModelCoachConnection",
    items:  Array< {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachesByCognitoIdQueryVariables = {
  cognitoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachesByCognitoIdQuery = {
  coachesByCognitoId?:  {
    __typename: "ModelCoachConnection",
    items:  Array< {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCoachUserQueryVariables = {
  id: string,
};

export type GetCoachUserQuery = {
  getCoachUser?:  {
    __typename: "CoachUser",
    id: string,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelCoachUserNotesConnection",
      nextToken?: string | null,
    } | null,
    status?: CoachUserStatus | null,
    createdAt: string,
    updatedAt: string,
    coachStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCoachUsersQueryVariables = {
  filter?: ModelCoachUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoachUsersQuery = {
  listCoachUsers?:  {
    __typename: "ModelCoachUserConnection",
    items:  Array< {
      __typename: "CoachUser",
      id: string,
      userId?: string | null,
      coachId?: string | null,
      status?: CoachUserStatus | null,
      createdAt: string,
      updatedAt: string,
      coachStudentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachUsersByUserIdQuery = {
  coachUsersByUserId?:  {
    __typename: "ModelCoachUserConnection",
    items:  Array< {
      __typename: "CoachUser",
      id: string,
      userId?: string | null,
      coachId?: string | null,
      status?: CoachUserStatus | null,
      createdAt: string,
      updatedAt: string,
      coachStudentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachUsersByCoachIdQueryVariables = {
  coachId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachUsersByCoachIdQuery = {
  coachUsersByCoachId?:  {
    __typename: "ModelCoachUserConnection",
    items:  Array< {
      __typename: "CoachUser",
      id: string,
      userId?: string | null,
      coachId?: string | null,
      status?: CoachUserStatus | null,
      createdAt: string,
      updatedAt: string,
      coachStudentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchCoachUsersQueryVariables = {
  filter?: SearchableCoachUserFilterInput | null,
  sort?: Array< SearchableCoachUserSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableCoachUserAggregationInput | null > | null,
};

export type SearchCoachUsersQuery = {
  searchCoachUsers?:  {
    __typename: "SearchableCoachUserConnection",
    items:  Array< {
      __typename: "CoachUser",
      id: string,
      userId?: string | null,
      coachId?: string | null,
      status?: CoachUserStatus | null,
      createdAt: string,
      updatedAt: string,
      coachStudentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetCoachSessionQueryVariables = {
  id: string,
};

export type GetCoachSessionQuery = {
  getCoachSession?:  {
    __typename: "CoachSession",
    id: string,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    name?: string | null,
    students?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    drills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    createdAt: string,
    updatedAt: string,
    coachCoachSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCoachSessionsQueryVariables = {
  filter?: ModelCoachSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoachSessionsQuery = {
  listCoachSessions?:  {
    __typename: "ModelCoachSessionConnection",
    items:  Array< {
      __typename: "CoachSession",
      id: string,
      coachId?: string | null,
      name?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      coachCoachSessionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachSessionsByCoachIdQueryVariables = {
  coachId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachSessionsByCoachIdQuery = {
  coachSessionsByCoachId?:  {
    __typename: "ModelCoachSessionConnection",
    items:  Array< {
      __typename: "CoachSession",
      id: string,
      coachId?: string | null,
      name?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      coachCoachSessionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCoachSessionUserQueryVariables = {
  id: string,
};

export type GetCoachSessionUserQuery = {
  getCoachSessionUser?:  {
    __typename: "CoachSessionUser",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId: string,
    coach?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachSessionId?: string | null,
    coachSession?:  {
      __typename: "CoachSession",
      id: string,
      coachId?: string | null,
      name?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      coachCoachSessionsId?: string | null,
      owner?: string | null,
    } | null,
    timesPlayed?: number | null,
    lastCompleted?: string | null,
    createdAt: string,
    updatedAt: string,
    userMyCoachSessionsId?: string | null,
    coachSessionStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCoachSessionUsersQueryVariables = {
  filter?: ModelCoachSessionUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoachSessionUsersQuery = {
  listCoachSessionUsers?:  {
    __typename: "ModelCoachSessionUserConnection",
    items:  Array< {
      __typename: "CoachSessionUser",
      id: string,
      userId: string,
      coachId: string,
      coachSessionId?: string | null,
      timesPlayed?: number | null,
      lastCompleted?: string | null,
      createdAt: string,
      updatedAt: string,
      userMyCoachSessionsId?: string | null,
      coachSessionStudentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachSessionUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachSessionUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachSessionUsersByUserIdQuery = {
  coachSessionUsersByUserId?:  {
    __typename: "ModelCoachSessionUserConnection",
    items:  Array< {
      __typename: "CoachSessionUser",
      id: string,
      userId: string,
      coachId: string,
      coachSessionId?: string | null,
      timesPlayed?: number | null,
      lastCompleted?: string | null,
      createdAt: string,
      updatedAt: string,
      userMyCoachSessionsId?: string | null,
      coachSessionStudentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachSessionUsersByCoachIdQueryVariables = {
  coachId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachSessionUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachSessionUsersByCoachIdQuery = {
  coachSessionUsersByCoachId?:  {
    __typename: "ModelCoachSessionUserConnection",
    items:  Array< {
      __typename: "CoachSessionUser",
      id: string,
      userId: string,
      coachId: string,
      coachSessionId?: string | null,
      timesPlayed?: number | null,
      lastCompleted?: string | null,
      createdAt: string,
      updatedAt: string,
      userMyCoachSessionsId?: string | null,
      coachSessionStudentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachSessionUsersByCoachSessionIdQueryVariables = {
  coachSessionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachSessionUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachSessionUsersByCoachSessionIdQuery = {
  coachSessionUsersByCoachSessionId?:  {
    __typename: "ModelCoachSessionUserConnection",
    items:  Array< {
      __typename: "CoachSessionUser",
      id: string,
      userId: string,
      coachId: string,
      coachSessionId?: string | null,
      timesPlayed?: number | null,
      lastCompleted?: string | null,
      createdAt: string,
      updatedAt: string,
      userMyCoachSessionsId?: string | null,
      coachSessionStudentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCoachUserNotesQueryVariables = {
  id: string,
};

export type GetCoachUserNotesQuery = {
  getCoachUserNotes?:  {
    __typename: "CoachUserNotes",
    id: string,
    coachUserId: string,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    coachUserNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCoachUserNotesQueryVariables = {
  filter?: ModelCoachUserNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoachUserNotesQuery = {
  listCoachUserNotes?:  {
    __typename: "ModelCoachUserNotesConnection",
    items:  Array< {
      __typename: "CoachUserNotes",
      id: string,
      coachUserId: string,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      coachUserNotesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachUserNotesByCoachUserIdQueryVariables = {
  coachUserId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachUserNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachUserNotesByCoachUserIdQuery = {
  coachUserNotesByCoachUserId?:  {
    __typename: "ModelCoachUserNotesConnection",
    items:  Array< {
      __typename: "CoachUserNotes",
      id: string,
      coachUserId: string,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      coachUserNotesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCoachSessionDrillQueryVariables = {
  id: string,
};

export type GetCoachSessionDrillQuery = {
  getCoachSessionDrill?:  {
    __typename: "CoachSessionDrill",
    id: string,
    coachSessionId?: string | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    coachSessionDrillsId?: string | null,
  } | null,
};

export type ListCoachSessionDrillsQueryVariables = {
  filter?: ModelCoachSessionDrillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoachSessionDrillsQuery = {
  listCoachSessionDrills?:  {
    __typename: "ModelCoachSessionDrillConnection",
    items:  Array< {
      __typename: "CoachSessionDrill",
      id: string,
      coachSessionId?: string | null,
      drillId: string,
      createdAt: string,
      updatedAt: string,
      coachSessionDrillsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachSessionDrillsByCoachSessionIdQueryVariables = {
  coachSessionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachSessionDrillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachSessionDrillsByCoachSessionIdQuery = {
  coachSessionDrillsByCoachSessionId?:  {
    __typename: "ModelCoachSessionDrillConnection",
    items:  Array< {
      __typename: "CoachSessionDrill",
      id: string,
      coachSessionId?: string | null,
      drillId: string,
      createdAt: string,
      updatedAt: string,
      coachSessionDrillsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachSessionDrillsByDrillIdQueryVariables = {
  drillId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachSessionDrillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachSessionDrillsByDrillIdQuery = {
  coachSessionDrillsByDrillId?:  {
    __typename: "ModelCoachSessionDrillConnection",
    items:  Array< {
      __typename: "CoachSessionDrill",
      id: string,
      coachSessionId?: string | null,
      drillId: string,
      createdAt: string,
      updatedAt: string,
      coachSessionDrillsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCoachDrillNotesQueryVariables = {
  id: string,
};

export type GetCoachDrillNotesQuery = {
  getCoachDrillNotes?:  {
    __typename: "CoachDrillNotes",
    id: string,
    coachId: string,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    share?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillCoachNotesId?: string | null,
    coachCoachDrillNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCoachDrillNotesQueryVariables = {
  filter?: ModelCoachDrillNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoachDrillNotesQuery = {
  listCoachDrillNotes?:  {
    __typename: "ModelCoachDrillNotesConnection",
    items:  Array< {
      __typename: "CoachDrillNotes",
      id: string,
      coachId: string,
      drillId: string,
      notes?: string | null,
      share?: boolean | null,
      createdAt: string,
      updatedAt: string,
      drillCoachNotesId?: string | null,
      coachCoachDrillNotesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachDrillNotesByCoachIdQueryVariables = {
  coachId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachDrillNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachDrillNotesByCoachIdQuery = {
  coachDrillNotesByCoachId?:  {
    __typename: "ModelCoachDrillNotesConnection",
    items:  Array< {
      __typename: "CoachDrillNotes",
      id: string,
      coachId: string,
      drillId: string,
      notes?: string | null,
      share?: boolean | null,
      createdAt: string,
      updatedAt: string,
      drillCoachNotesId?: string | null,
      coachCoachDrillNotesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachDrillNotesByDrillIdQueryVariables = {
  drillId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachDrillNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachDrillNotesByDrillIdQuery = {
  coachDrillNotesByDrillId?:  {
    __typename: "ModelCoachDrillNotesConnection",
    items:  Array< {
      __typename: "CoachDrillNotes",
      id: string,
      coachId: string,
      drillId: string,
      notes?: string | null,
      share?: boolean | null,
      createdAt: string,
      updatedAt: string,
      drillCoachNotesId?: string | null,
      coachCoachDrillNotesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    gender?: string | null,
    age?: string | null,
    handicap?: string | null,
    objectives?: Array< string | null > | null,
    evaluation?:  Array< {
      __typename: "Evaluation",
      name: string,
      score: number,
    } | null > | null,
    mySessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    myDrills?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    featureFlags?:  Array< {
      __typename: "FeatureFlag",
      name: string,
      value: boolean,
    } | null > | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    vote?:  {
      __typename: "ModelVoteConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseyeSessions?:  {
      __typename: "ModelBullseyeSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseye?:  {
      __typename: "ModelUserBullseyeConnection",
      nextToken?: string | null,
    } | null,
    targetSets?:  {
      __typename: "ModelTargetSetConnection",
      nextToken?: string | null,
    } | null,
    gridGameSessions?:  {
      __typename: "ModelGridGameSessionConnection",
      nextToken?: string | null,
    } | null,
    gridGameHighScore?:  {
      __typename: "ModelGridGameHighScoreConnection",
      nextToken?: string | null,
    } | null,
    deleted?: boolean | null,
    coachUserId?: string | null,
    myCoach?:  {
      __typename: "CoachUser",
      id: string,
      userId?: string | null,
      coachId?: string | null,
      status?: CoachUserStatus | null,
      createdAt: string,
      updatedAt: string,
      coachStudentsId?: string | null,
      owner?: string | null,
    } | null,
    myCoachSessions?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    gender?: string | null,
    age?: string | null,
    handicap?: string | null,
    objectives?: Array< string | null > | null,
    evaluation?:  Array< {
      __typename: "Evaluation",
      name: string,
      score: number,
    } | null > | null,
    mySessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    myDrills?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    featureFlags?:  Array< {
      __typename: "FeatureFlag",
      name: string,
      value: boolean,
    } | null > | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    vote?:  {
      __typename: "ModelVoteConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseyeSessions?:  {
      __typename: "ModelBullseyeSessionConnection",
      nextToken?: string | null,
    } | null,
    bullseye?:  {
      __typename: "ModelUserBullseyeConnection",
      nextToken?: string | null,
    } | null,
    targetSets?:  {
      __typename: "ModelTargetSetConnection",
      nextToken?: string | null,
    } | null,
    gridGameSessions?:  {
      __typename: "ModelGridGameSessionConnection",
      nextToken?: string | null,
    } | null,
    gridGameHighScore?:  {
      __typename: "ModelGridGameHighScoreConnection",
      nextToken?: string | null,
    } | null,
    deleted?: boolean | null,
    coachUserId?: string | null,
    myCoach?:  {
      __typename: "CoachUser",
      id: string,
      userId?: string | null,
      coachId?: string | null,
      status?: CoachUserStatus | null,
      createdAt: string,
      updatedAt: string,
      coachStudentsId?: string | null,
      owner?: string | null,
    } | null,
    myCoachSessions?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserDrillsSubscriptionVariables = {
  filter?: ModelSubscriptionUserDrillsFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserDrillsSubscription = {
  onCreateUserDrills?:  {
    __typename: "UserDrills",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    currentLevel?: number | null,
    lastNumberOfHits?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userMyDrillsId?: string | null,
    drillUsersId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserDrillsSubscriptionVariables = {
  filter?: ModelSubscriptionUserDrillsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserDrillsSubscription = {
  onUpdateUserDrills?:  {
    __typename: "UserDrills",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    currentLevel?: number | null,
    lastNumberOfHits?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userMyDrillsId?: string | null,
    drillUsersId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserDrillsSubscriptionVariables = {
  filter?: ModelSubscriptionUserDrillsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserDrillsSubscription = {
  onDeleteUserDrills?:  {
    __typename: "UserDrills",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    currentLevel?: number | null,
    lastNumberOfHits?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userMyDrillsId?: string | null,
    drillUsersId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackFilterInput | null,
};

export type OnCreateFeedbackSubscription = {
  onCreateFeedback?:  {
    __typename: "Feedback",
    id: string,
    score?: number | null,
    details?: string | null,
    screen?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFeedbacksId?: string | null,
  } | null,
};

export type OnUpdateFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackFilterInput | null,
};

export type OnUpdateFeedbackSubscription = {
  onUpdateFeedback?:  {
    __typename: "Feedback",
    id: string,
    score?: number | null,
    details?: string | null,
    screen?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFeedbacksId?: string | null,
  } | null,
};

export type OnDeleteFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackFilterInput | null,
};

export type OnDeleteFeedbackSubscription = {
  onDeleteFeedback?:  {
    __typename: "Feedback",
    id: string,
    score?: number | null,
    details?: string | null,
    screen?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFeedbacksId?: string | null,
  } | null,
};

export type OnCreateVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnCreateVoteSubscription = {
  onCreateVote?:  {
    __typename: "Vote",
    id: string,
    feature: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVoteId?: string | null,
  } | null,
};

export type OnUpdateVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote?:  {
    __typename: "Vote",
    id: string,
    feature: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVoteId?: string | null,
  } | null,
};

export type OnDeleteVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote?:  {
    __typename: "Vote",
    id: string,
    feature: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userVoteId?: string | null,
  } | null,
};

export type OnCreateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    trackingName?: string | null,
    description?: string | null,
    drills?:  {
      __typename: "ModelDrillConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    games?: Array< string | null > | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    trackingName?: string | null,
    description?: string | null,
    drills?:  {
      __typename: "ModelDrillConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    games?: Array< string | null > | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    trackingName?: string | null,
    description?: string | null,
    drills?:  {
      __typename: "ModelDrillConnection",
      nextToken?: string | null,
    } | null,
    userSkills?:  {
      __typename: "ModelUserSkillConnection",
      nextToken?: string | null,
    } | null,
    games?: Array< string | null > | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSkillSubscriptionVariables = {
  filter?: ModelSubscriptionUserSkillFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSkillSubscription = {
  onCreateUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    level?: number | null,
    greenZone?: number | null,
    redZone?: number | null,
    yellowZone?: number | null,
    holeZone?: number | null,
    outZone?: number | null,
    leftYellowZone?: number | null,
    rightYellowZone?: number | null,
    leftRedZone?: number | null,
    rightRedZone?: number | null,
    streak?: number | null,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserSkillsId?: string | null,
    skillUserSkillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSkillSubscriptionVariables = {
  filter?: ModelSubscriptionUserSkillFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSkillSubscription = {
  onUpdateUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    level?: number | null,
    greenZone?: number | null,
    redZone?: number | null,
    yellowZone?: number | null,
    holeZone?: number | null,
    outZone?: number | null,
    leftYellowZone?: number | null,
    rightYellowZone?: number | null,
    leftRedZone?: number | null,
    rightRedZone?: number | null,
    streak?: number | null,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserSkillsId?: string | null,
    skillUserSkillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSkillSubscriptionVariables = {
  filter?: ModelSubscriptionUserSkillFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSkillSubscription = {
  onDeleteUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    level?: number | null,
    greenZone?: number | null,
    redZone?: number | null,
    yellowZone?: number | null,
    holeZone?: number | null,
    outZone?: number | null,
    leftYellowZone?: number | null,
    rightYellowZone?: number | null,
    leftRedZone?: number | null,
    rightRedZone?: number | null,
    streak?: number | null,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserSkillsId?: string | null,
    skillUserSkillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateDrillSubscriptionVariables = {
  filter?: ModelSubscriptionDrillFilterInput | null,
};

export type OnCreateDrillSubscription = {
  onCreateDrill?:  {
    __typename: "Drill",
    id: string,
    name: string,
    trackingName?: string | null,
    description: string,
    goal: string,
    videoId: string,
    duration: number,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    hidden?: boolean | null,
    tries?: number | null,
    level?: number | null,
    club?: string | null,
    title?: string | null,
    challenge: string,
    users?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    isDynamic?: boolean | null,
    thirdOption?: boolean | null,
    dynamicDifficulties?:  {
      __typename: "DynamicDrillDifficulty",
      beginner: string,
      medium: string,
      advanced: string,
      pro: string,
    } | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    type?: DrillType | null,
    coachNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessionDrills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    skillDrillsId?: string | null,
  } | null,
};

export type OnUpdateDrillSubscriptionVariables = {
  filter?: ModelSubscriptionDrillFilterInput | null,
};

export type OnUpdateDrillSubscription = {
  onUpdateDrill?:  {
    __typename: "Drill",
    id: string,
    name: string,
    trackingName?: string | null,
    description: string,
    goal: string,
    videoId: string,
    duration: number,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    hidden?: boolean | null,
    tries?: number | null,
    level?: number | null,
    club?: string | null,
    title?: string | null,
    challenge: string,
    users?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    isDynamic?: boolean | null,
    thirdOption?: boolean | null,
    dynamicDifficulties?:  {
      __typename: "DynamicDrillDifficulty",
      beginner: string,
      medium: string,
      advanced: string,
      pro: string,
    } | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    type?: DrillType | null,
    coachNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessionDrills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    skillDrillsId?: string | null,
  } | null,
};

export type OnDeleteDrillSubscriptionVariables = {
  filter?: ModelSubscriptionDrillFilterInput | null,
};

export type OnDeleteDrillSubscription = {
  onDeleteDrill?:  {
    __typename: "Drill",
    id: string,
    name: string,
    trackingName?: string | null,
    description: string,
    goal: string,
    videoId: string,
    duration: number,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    hidden?: boolean | null,
    tries?: number | null,
    level?: number | null,
    club?: string | null,
    title?: string | null,
    challenge: string,
    users?:  {
      __typename: "ModelUserDrillsConnection",
      nextToken?: string | null,
    } | null,
    isDynamic?: boolean | null,
    thirdOption?: boolean | null,
    dynamicDifficulties?:  {
      __typename: "DynamicDrillDifficulty",
      beginner: string,
      medium: string,
      advanced: string,
      pro: string,
    } | null,
    challengeDrills?:  {
      __typename: "ModelChallengeDrillsConnection",
      nextToken?: string | null,
    } | null,
    type?: DrillType | null,
    coachNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessionDrills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    skillDrillsId?: string | null,
  } | null,
};

export type OnCreateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
  owner?: string | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
    __typename: "Session",
    id: string,
    parentId?: string | null,
    name?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    isCompleted?: boolean | null,
    saved?: boolean | null,
    mode?: SessionMode | null,
    scenario?: SessionScenario | null,
    createdAt: string,
    updatedAt: string,
    userMySessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession?:  {
    __typename: "Session",
    id: string,
    parentId?: string | null,
    name?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    isCompleted?: boolean | null,
    saved?: boolean | null,
    mode?: SessionMode | null,
    scenario?: SessionScenario | null,
    createdAt: string,
    updatedAt: string,
    userMySessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession?:  {
    __typename: "Session",
    id: string,
    parentId?: string | null,
    name?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionDrills?:  {
      __typename: "ModelSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    isCompleted?: boolean | null,
    saved?: boolean | null,
    mode?: SessionMode | null,
    scenario?: SessionScenario | null,
    createdAt: string,
    updatedAt: string,
    userMySessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateSessionDrillSubscriptionVariables = {
  filter?: ModelSubscriptionSessionDrillFilterInput | null,
  owner?: string | null,
};

export type OnCreateSessionDrillSubscription = {
  onCreateSessionDrill?:  {
    __typename: "SessionDrill",
    id: string,
    isCompleted: boolean,
    sessionId: string,
    session?:  {
      __typename: "Session",
      id: string,
      parentId?: string | null,
      name?: string | null,
      userId: string,
      duration?: number | null,
      isCompleted?: boolean | null,
      saved?: boolean | null,
      mode?: SessionMode | null,
      scenario?: SessionScenario | null,
      createdAt: string,
      updatedAt: string,
      userMySessionsId?: string | null,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    mode?: SessionMode | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillSessionDrillsId?: string | null,
    sessionSessionDrillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSessionDrillSubscriptionVariables = {
  filter?: ModelSubscriptionSessionDrillFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSessionDrillSubscription = {
  onUpdateSessionDrill?:  {
    __typename: "SessionDrill",
    id: string,
    isCompleted: boolean,
    sessionId: string,
    session?:  {
      __typename: "Session",
      id: string,
      parentId?: string | null,
      name?: string | null,
      userId: string,
      duration?: number | null,
      isCompleted?: boolean | null,
      saved?: boolean | null,
      mode?: SessionMode | null,
      scenario?: SessionScenario | null,
      createdAt: string,
      updatedAt: string,
      userMySessionsId?: string | null,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    mode?: SessionMode | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillSessionDrillsId?: string | null,
    sessionSessionDrillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSessionDrillSubscriptionVariables = {
  filter?: ModelSubscriptionSessionDrillFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSessionDrillSubscription = {
  onDeleteSessionDrill?:  {
    __typename: "SessionDrill",
    id: string,
    isCompleted: boolean,
    sessionId: string,
    session?:  {
      __typename: "Session",
      id: string,
      parentId?: string | null,
      name?: string | null,
      userId: string,
      duration?: number | null,
      isCompleted?: boolean | null,
      saved?: boolean | null,
      mode?: SessionMode | null,
      scenario?: SessionScenario | null,
      createdAt: string,
      updatedAt: string,
      userMySessionsId?: string | null,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    mode?: SessionMode | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillSessionDrillsId?: string | null,
    sessionSessionDrillsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    holes?:  {
      __typename: "ModelHoleConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    holes?:  {
      __typename: "ModelHoleConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    description?: string | null,
    holes?:  {
      __typename: "ModelHoleConnection",
      nextToken?: string | null,
    } | null,
    courseSessions?:  {
      __typename: "ModelCourseSessionConnection",
      nextToken?: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHoleSubscriptionVariables = {
  filter?: ModelSubscriptionHoleFilterInput | null,
};

export type OnCreateHoleSubscription = {
  onCreateHole?:  {
    __typename: "Hole",
    id: string,
    number: number,
    par: number,
    distance: number,
    flagDistance: number,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    coverImage:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    water?: Array< number | null > | null,
    bunker?: Array< number | null > | null,
    woods?: Array< number | null > | null,
    flag: number,
    green?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    courseHolesId?: string | null,
  } | null,
};

export type OnUpdateHoleSubscriptionVariables = {
  filter?: ModelSubscriptionHoleFilterInput | null,
};

export type OnUpdateHoleSubscription = {
  onUpdateHole?:  {
    __typename: "Hole",
    id: string,
    number: number,
    par: number,
    distance: number,
    flagDistance: number,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    coverImage:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    water?: Array< number | null > | null,
    bunker?: Array< number | null > | null,
    woods?: Array< number | null > | null,
    flag: number,
    green?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    courseHolesId?: string | null,
  } | null,
};

export type OnDeleteHoleSubscriptionVariables = {
  filter?: ModelSubscriptionHoleFilterInput | null,
};

export type OnDeleteHoleSubscription = {
  onDeleteHole?:  {
    __typename: "Hole",
    id: string,
    number: number,
    par: number,
    distance: number,
    flagDistance: number,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    coverImage:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    },
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    water?: Array< number | null > | null,
    bunker?: Array< number | null > | null,
    woods?: Array< number | null > | null,
    flag: number,
    green?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    courseHolesId?: string | null,
  } | null,
};

export type OnUpdateCourseSessionSubscriptionVariables = {
  filter?: ModelSubscriptionCourseSessionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCourseSessionSubscription = {
  onUpdateCourseSession?:  {
    __typename: "CourseSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    isCompleted?: boolean | null,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userCourseSessionsId?: string | null,
    courseCourseSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCourseSessionSubscriptionVariables = {
  filter?: ModelSubscriptionCourseSessionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCourseSessionSubscription = {
  onDeleteCourseSession?:  {
    __typename: "CourseSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    sessionHoles?:  {
      __typename: "ModelSessionHoleConnection",
      nextToken?: string | null,
    } | null,
    isCompleted?: boolean | null,
    courseId: string,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userCourseSessionsId?: string | null,
    courseCourseSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateSessionHoleSubscriptionVariables = {
  filter?: ModelSubscriptionSessionHoleFilterInput | null,
  owner?: string | null,
};

export type OnCreateSessionHoleSubscription = {
  onCreateSessionHole?:  {
    __typename: "SessionHole",
    id: string,
    isCompleted: boolean,
    courseSessionId: string,
    courseSession?:  {
      __typename: "CourseSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      courseId: string,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userCourseSessionsId?: string | null,
      courseCourseSessionsId?: string | null,
      owner?: string | null,
    } | null,
    holeId: string,
    hole?:  {
      __typename: "Hole",
      id: string,
      number: number,
      par: number,
      distance: number,
      flagDistance: number,
      courseId: string,
      water?: Array< number | null > | null,
      bunker?: Array< number | null > | null,
      woods?: Array< number | null > | null,
      flag: number,
      green?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
      courseHolesId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    holeSessionHolesId?: string | null,
    courseSessionSessionHolesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSessionHoleSubscriptionVariables = {
  filter?: ModelSubscriptionSessionHoleFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSessionHoleSubscription = {
  onUpdateSessionHole?:  {
    __typename: "SessionHole",
    id: string,
    isCompleted: boolean,
    courseSessionId: string,
    courseSession?:  {
      __typename: "CourseSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      courseId: string,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userCourseSessionsId?: string | null,
      courseCourseSessionsId?: string | null,
      owner?: string | null,
    } | null,
    holeId: string,
    hole?:  {
      __typename: "Hole",
      id: string,
      number: number,
      par: number,
      distance: number,
      flagDistance: number,
      courseId: string,
      water?: Array< number | null > | null,
      bunker?: Array< number | null > | null,
      woods?: Array< number | null > | null,
      flag: number,
      green?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
      courseHolesId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    holeSessionHolesId?: string | null,
    courseSessionSessionHolesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSessionHoleSubscriptionVariables = {
  filter?: ModelSubscriptionSessionHoleFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSessionHoleSubscription = {
  onDeleteSessionHole?:  {
    __typename: "SessionHole",
    id: string,
    isCompleted: boolean,
    courseSessionId: string,
    courseSession?:  {
      __typename: "CourseSession",
      id: string,
      userId: string,
      isCompleted?: boolean | null,
      courseId: string,
      playingCareer?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userCourseSessionsId?: string | null,
      courseCourseSessionsId?: string | null,
      owner?: string | null,
    } | null,
    holeId: string,
    hole?:  {
      __typename: "Hole",
      id: string,
      number: number,
      par: number,
      distance: number,
      flagDistance: number,
      courseId: string,
      water?: Array< number | null > | null,
      bunker?: Array< number | null > | null,
      woods?: Array< number | null > | null,
      flag: number,
      green?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
      courseHolesId?: string | null,
    } | null,
    results?:  Array< {
      __typename: "Result",
      coordinates?: Array< number | null > | null,
      level?: number | null,
      zone?: Zones | null,
      isMiss: boolean,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    holeSessionHolesId?: string | null,
    courseSessionSessionHolesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateBullseyeSessionSubscriptionVariables = {
  filter?: ModelSubscriptionBullseyeSessionFilterInput | null,
  owner?: string | null,
};

export type OnCreateBullseyeSessionSubscription = {
  onCreateBullseyeSession?:  {
    __typename: "BullseyeSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    isCompleted?: boolean | null,
    difficulty?: number | null,
    scenario?: SessionScenario | null,
    results?:  Array< {
      __typename: "BullseyeResult",
      distance?: number | null,
    } | null > | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userBullseyeSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateBullseyeSessionSubscriptionVariables = {
  filter?: ModelSubscriptionBullseyeSessionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBullseyeSessionSubscription = {
  onUpdateBullseyeSession?:  {
    __typename: "BullseyeSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    isCompleted?: boolean | null,
    difficulty?: number | null,
    scenario?: SessionScenario | null,
    results?:  Array< {
      __typename: "BullseyeResult",
      distance?: number | null,
    } | null > | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userBullseyeSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteBullseyeSessionSubscriptionVariables = {
  filter?: ModelSubscriptionBullseyeSessionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBullseyeSessionSubscription = {
  onDeleteBullseyeSession?:  {
    __typename: "BullseyeSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    isCompleted?: boolean | null,
    difficulty?: number | null,
    scenario?: SessionScenario | null,
    results?:  Array< {
      __typename: "BullseyeResult",
      distance?: number | null,
    } | null > | null,
    playingCareer?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userBullseyeSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateTargetSetSubscriptionVariables = {
  filter?: ModelSubscriptionTargetSetFilterInput | null,
  owner?: string | null,
};

export type OnCreateTargetSetSubscription = {
  onCreateTargetSet?:  {
    __typename: "TargetSet",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    userTargetSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateTargetSetSubscriptionVariables = {
  filter?: ModelSubscriptionTargetSetFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTargetSetSubscription = {
  onUpdateTargetSet?:  {
    __typename: "TargetSet",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    userTargetSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteTargetSetSubscriptionVariables = {
  filter?: ModelSubscriptionTargetSetFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTargetSetSubscription = {
  onDeleteTargetSet?:  {
    __typename: "TargetSet",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targets?:  Array< {
      __typename: "Targets",
      color?: string | null,
      distance?: number | null,
    } | null > | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    userTargetSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateUserBullseyeSubscriptionVariables = {
  filter?: ModelSubscriptionUserBullseyeFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserBullseyeSubscription = {
  onCreateUserBullseye?:  {
    __typename: "UserBullseye",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?: string | null,
    scores?:  Array< {
      __typename: "BullseyeScore",
      difficulty?: number | null,
      score?: number | null,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userBullseyeId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserBullseyeSubscriptionVariables = {
  filter?: ModelSubscriptionUserBullseyeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserBullseyeSubscription = {
  onUpdateUserBullseye?:  {
    __typename: "UserBullseye",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?: string | null,
    scores?:  Array< {
      __typename: "BullseyeScore",
      difficulty?: number | null,
      score?: number | null,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userBullseyeId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserBullseyeSubscriptionVariables = {
  filter?: ModelSubscriptionUserBullseyeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserBullseyeSubscription = {
  onDeleteUserBullseye?:  {
    __typename: "UserBullseye",
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?: string | null,
    scores?:  Array< {
      __typename: "BullseyeScore",
      difficulty?: number | null,
      score?: number | null,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userBullseyeId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateGridGameSessionSubscriptionVariables = {
  filter?: ModelSubscriptionGridGameSessionFilterInput | null,
  owner?: string | null,
};

export type OnCreateGridGameSessionSubscription = {
  onCreateGridGameSession?:  {
    __typename: "GridGameSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targetDistance: number,
    shots: number,
    distances?:  Array< {
      __typename: "DistanceRecord",
      distance: number,
      shots: number,
    } | null > | null,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string,
    userGridGameSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateGridGameSessionSubscriptionVariables = {
  filter?: ModelSubscriptionGridGameSessionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGridGameSessionSubscription = {
  onUpdateGridGameSession?:  {
    __typename: "GridGameSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targetDistance: number,
    shots: number,
    distances?:  Array< {
      __typename: "DistanceRecord",
      distance: number,
      shots: number,
    } | null > | null,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string,
    userGridGameSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteGridGameSessionSubscriptionVariables = {
  filter?: ModelSubscriptionGridGameSessionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGridGameSessionSubscription = {
  onDeleteGridGameSession?:  {
    __typename: "GridGameSession",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    targetDistance: number,
    shots: number,
    distances?:  Array< {
      __typename: "DistanceRecord",
      distance: number,
      shots: number,
    } | null > | null,
    isCompleted: boolean,
    createdAt: string,
    updatedAt: string,
    userGridGameSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateGridGameHighScoreSubscriptionVariables = {
  filter?: ModelSubscriptionGridGameHighScoreFilterInput | null,
  owner?: string | null,
};

export type OnCreateGridGameHighScoreSubscription = {
  onCreateGridGameHighScore?:  {
    __typename: "GridGameHighScore",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    gridGameSessionId: string,
    targetDistance: number,
    shots: number,
    createdAt: string,
    updatedAt: string,
    userGridGameHighScoreId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateGridGameHighScoreSubscriptionVariables = {
  filter?: ModelSubscriptionGridGameHighScoreFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGridGameHighScoreSubscription = {
  onUpdateGridGameHighScore?:  {
    __typename: "GridGameHighScore",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    gridGameSessionId: string,
    targetDistance: number,
    shots: number,
    createdAt: string,
    updatedAt: string,
    userGridGameHighScoreId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteGridGameHighScoreSubscriptionVariables = {
  filter?: ModelSubscriptionGridGameHighScoreFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGridGameHighScoreSubscription = {
  onDeleteGridGameHighScore?:  {
    __typename: "GridGameHighScore",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    gridGameSessionId: string,
    targetDistance: number,
    shots: number,
    createdAt: string,
    updatedAt: string,
    userGridGameHighScoreId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateAppInfoSubscriptionVariables = {
  filter?: ModelSubscriptionAppInfoFilterInput | null,
};

export type OnCreateAppInfoSubscription = {
  onCreateAppInfo?:  {
    __typename: "AppInfo",
    paywallVideoId?: string | null,
    env?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAppInfoSubscriptionVariables = {
  filter?: ModelSubscriptionAppInfoFilterInput | null,
};

export type OnUpdateAppInfoSubscription = {
  onUpdateAppInfo?:  {
    __typename: "AppInfo",
    paywallVideoId?: string | null,
    env?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAppInfoSubscriptionVariables = {
  filter?: ModelSubscriptionAppInfoFilterInput | null,
};

export type OnDeleteAppInfoSubscription = {
  onDeleteAppInfo?:  {
    __typename: "AppInfo",
    paywallVideoId?: string | null,
    env?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    videoId?: string | null,
    title?: string | null,
    text?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    videoId?: string | null,
    title?: string | null,
    text?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    videoId?: string | null,
    title?: string | null,
    text?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChallengeDrillsSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeDrillsFilterInput | null,
};

export type OnCreateChallengeDrillsSubscription = {
  onCreateChallengeDrills?:  {
    __typename: "ChallengeDrills",
    id: string,
    hidden: boolean,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    isFirstStep: boolean,
    createdAt: string,
    updatedAt: string,
    skillChallengeDrillsId?: string | null,
    drillChallengeDrillsId?: string | null,
  } | null,
};

export type OnUpdateChallengeDrillsSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeDrillsFilterInput | null,
};

export type OnUpdateChallengeDrillsSubscription = {
  onUpdateChallengeDrills?:  {
    __typename: "ChallengeDrills",
    id: string,
    hidden: boolean,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    isFirstStep: boolean,
    createdAt: string,
    updatedAt: string,
    skillChallengeDrillsId?: string | null,
    drillChallengeDrillsId?: string | null,
  } | null,
};

export type OnDeleteChallengeDrillsSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeDrillsFilterInput | null,
};

export type OnDeleteChallengeDrillsSubscription = {
  onDeleteChallengeDrills?:  {
    __typename: "ChallengeDrills",
    id: string,
    hidden: boolean,
    skillId: string,
    skill?:  {
      __typename: "Skill",
      id: string,
      name: string,
      trackingName?: string | null,
      description?: string | null,
      games?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    isFirstStep: boolean,
    createdAt: string,
    updatedAt: string,
    skillChallengeDrillsId?: string | null,
    drillChallengeDrillsId?: string | null,
  } | null,
};

export type OnCreateCoachSubscriptionVariables = {
  filter?: ModelSubscriptionCoachFilterInput | null,
  owner?: string | null,
};

export type OnCreateCoachSubscription = {
  onCreateCoach?:  {
    __typename: "Coach",
    id: string,
    cognitoId: string,
    profileImage?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    name: string,
    lastName: string,
    phoneNumber?: string | null,
    email?: string | null,
    bio?: string | null,
    school?: string | null,
    zipCode?: string | null,
    address?: string | null,
    state?: string | null,
    city?: string | null,
    country?: string | null,
    students?:  {
      __typename: "ModelCoachUserConnection",
      nextToken?: string | null,
    } | null,
    coachDrillNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessions?:  {
      __typename: "ModelCoachSessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCoachSubscriptionVariables = {
  filter?: ModelSubscriptionCoachFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCoachSubscription = {
  onUpdateCoach?:  {
    __typename: "Coach",
    id: string,
    cognitoId: string,
    profileImage?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    name: string,
    lastName: string,
    phoneNumber?: string | null,
    email?: string | null,
    bio?: string | null,
    school?: string | null,
    zipCode?: string | null,
    address?: string | null,
    state?: string | null,
    city?: string | null,
    country?: string | null,
    students?:  {
      __typename: "ModelCoachUserConnection",
      nextToken?: string | null,
    } | null,
    coachDrillNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessions?:  {
      __typename: "ModelCoachSessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCoachSubscriptionVariables = {
  filter?: ModelSubscriptionCoachFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCoachSubscription = {
  onDeleteCoach?:  {
    __typename: "Coach",
    id: string,
    cognitoId: string,
    profileImage?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    name: string,
    lastName: string,
    phoneNumber?: string | null,
    email?: string | null,
    bio?: string | null,
    school?: string | null,
    zipCode?: string | null,
    address?: string | null,
    state?: string | null,
    city?: string | null,
    country?: string | null,
    students?:  {
      __typename: "ModelCoachUserConnection",
      nextToken?: string | null,
    } | null,
    coachDrillNotes?:  {
      __typename: "ModelCoachDrillNotesConnection",
      nextToken?: string | null,
    } | null,
    coachSessions?:  {
      __typename: "ModelCoachSessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCoachUserSubscriptionVariables = {
  filter?: ModelSubscriptionCoachUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateCoachUserSubscription = {
  onCreateCoachUser?:  {
    __typename: "CoachUser",
    id: string,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelCoachUserNotesConnection",
      nextToken?: string | null,
    } | null,
    status?: CoachUserStatus | null,
    createdAt: string,
    updatedAt: string,
    coachStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCoachUserSubscriptionVariables = {
  filter?: ModelSubscriptionCoachUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCoachUserSubscription = {
  onUpdateCoachUser?:  {
    __typename: "CoachUser",
    id: string,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelCoachUserNotesConnection",
      nextToken?: string | null,
    } | null,
    status?: CoachUserStatus | null,
    createdAt: string,
    updatedAt: string,
    coachStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCoachUserSubscriptionVariables = {
  filter?: ModelSubscriptionCoachUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCoachUserSubscription = {
  onDeleteCoachUser?:  {
    __typename: "CoachUser",
    id: string,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelCoachUserNotesConnection",
      nextToken?: string | null,
    } | null,
    status?: CoachUserStatus | null,
    createdAt: string,
    updatedAt: string,
    coachStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCoachSessionSubscriptionVariables = {
  filter?: ModelSubscriptionCoachSessionFilterInput | null,
  owner?: string | null,
};

export type OnCreateCoachSessionSubscription = {
  onCreateCoachSession?:  {
    __typename: "CoachSession",
    id: string,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    name?: string | null,
    students?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    drills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    createdAt: string,
    updatedAt: string,
    coachCoachSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCoachSessionSubscriptionVariables = {
  filter?: ModelSubscriptionCoachSessionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCoachSessionSubscription = {
  onUpdateCoachSession?:  {
    __typename: "CoachSession",
    id: string,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    name?: string | null,
    students?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    drills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    createdAt: string,
    updatedAt: string,
    coachCoachSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCoachSessionSubscriptionVariables = {
  filter?: ModelSubscriptionCoachSessionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCoachSessionSubscription = {
  onDeleteCoachSession?:  {
    __typename: "CoachSession",
    id: string,
    coachId?: string | null,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    name?: string | null,
    students?:  {
      __typename: "ModelCoachSessionUserConnection",
      nextToken?: string | null,
    } | null,
    drills?:  {
      __typename: "ModelCoachSessionDrillConnection",
      nextToken?: string | null,
    } | null,
    duration?: number | null,
    createdAt: string,
    updatedAt: string,
    coachCoachSessionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCoachSessionUserSubscriptionVariables = {
  filter?: ModelSubscriptionCoachSessionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateCoachSessionUserSubscription = {
  onCreateCoachSessionUser?:  {
    __typename: "CoachSessionUser",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId: string,
    coach?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachSessionId?: string | null,
    coachSession?:  {
      __typename: "CoachSession",
      id: string,
      coachId?: string | null,
      name?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      coachCoachSessionsId?: string | null,
      owner?: string | null,
    } | null,
    timesPlayed?: number | null,
    lastCompleted?: string | null,
    createdAt: string,
    updatedAt: string,
    userMyCoachSessionsId?: string | null,
    coachSessionStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCoachSessionUserSubscriptionVariables = {
  filter?: ModelSubscriptionCoachSessionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCoachSessionUserSubscription = {
  onUpdateCoachSessionUser?:  {
    __typename: "CoachSessionUser",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId: string,
    coach?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachSessionId?: string | null,
    coachSession?:  {
      __typename: "CoachSession",
      id: string,
      coachId?: string | null,
      name?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      coachCoachSessionsId?: string | null,
      owner?: string | null,
    } | null,
    timesPlayed?: number | null,
    lastCompleted?: string | null,
    createdAt: string,
    updatedAt: string,
    userMyCoachSessionsId?: string | null,
    coachSessionStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCoachSessionUserSubscriptionVariables = {
  filter?: ModelSubscriptionCoachSessionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCoachSessionUserSubscription = {
  onDeleteCoachSessionUser?:  {
    __typename: "CoachSessionUser",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachId: string,
    coach?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      gender?: string | null,
      age?: string | null,
      handicap?: string | null,
      objectives?: Array< string | null > | null,
      deleted?: boolean | null,
      coachUserId?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    coachSessionId?: string | null,
    coachSession?:  {
      __typename: "CoachSession",
      id: string,
      coachId?: string | null,
      name?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      coachCoachSessionsId?: string | null,
      owner?: string | null,
    } | null,
    timesPlayed?: number | null,
    lastCompleted?: string | null,
    createdAt: string,
    updatedAt: string,
    userMyCoachSessionsId?: string | null,
    coachSessionStudentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCoachUserNotesSubscriptionVariables = {
  filter?: ModelSubscriptionCoachUserNotesFilterInput | null,
  owner?: string | null,
};

export type OnCreateCoachUserNotesSubscription = {
  onCreateCoachUserNotes?:  {
    __typename: "CoachUserNotes",
    id: string,
    coachUserId: string,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    coachUserNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCoachUserNotesSubscriptionVariables = {
  filter?: ModelSubscriptionCoachUserNotesFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCoachUserNotesSubscription = {
  onUpdateCoachUserNotes?:  {
    __typename: "CoachUserNotes",
    id: string,
    coachUserId: string,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    coachUserNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCoachUserNotesSubscriptionVariables = {
  filter?: ModelSubscriptionCoachUserNotesFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCoachUserNotesSubscription = {
  onDeleteCoachUserNotes?:  {
    __typename: "CoachUserNotes",
    id: string,
    coachUserId: string,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    coachUserNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCoachSessionDrillSubscriptionVariables = {
  filter?: ModelSubscriptionCoachSessionDrillFilterInput | null,
};

export type OnCreateCoachSessionDrillSubscription = {
  onCreateCoachSessionDrill?:  {
    __typename: "CoachSessionDrill",
    id: string,
    coachSessionId?: string | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    coachSessionDrillsId?: string | null,
  } | null,
};

export type OnUpdateCoachSessionDrillSubscriptionVariables = {
  filter?: ModelSubscriptionCoachSessionDrillFilterInput | null,
};

export type OnUpdateCoachSessionDrillSubscription = {
  onUpdateCoachSessionDrill?:  {
    __typename: "CoachSessionDrill",
    id: string,
    coachSessionId?: string | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    coachSessionDrillsId?: string | null,
  } | null,
};

export type OnDeleteCoachSessionDrillSubscriptionVariables = {
  filter?: ModelSubscriptionCoachSessionDrillFilterInput | null,
};

export type OnDeleteCoachSessionDrillSubscription = {
  onDeleteCoachSessionDrill?:  {
    __typename: "CoachSessionDrill",
    id: string,
    coachSessionId?: string | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    coachSessionDrillsId?: string | null,
  } | null,
};

export type OnCreateCoachDrillNotesSubscriptionVariables = {
  filter?: ModelSubscriptionCoachDrillNotesFilterInput | null,
  owner?: string | null,
};

export type OnCreateCoachDrillNotesSubscription = {
  onCreateCoachDrillNotes?:  {
    __typename: "CoachDrillNotes",
    id: string,
    coachId: string,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    share?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillCoachNotesId?: string | null,
    coachCoachDrillNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCoachDrillNotesSubscriptionVariables = {
  filter?: ModelSubscriptionCoachDrillNotesFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCoachDrillNotesSubscription = {
  onUpdateCoachDrillNotes?:  {
    __typename: "CoachDrillNotes",
    id: string,
    coachId: string,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    share?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillCoachNotesId?: string | null,
    coachCoachDrillNotesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCoachDrillNotesSubscriptionVariables = {
  filter?: ModelSubscriptionCoachDrillNotesFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCoachDrillNotesSubscription = {
  onDeleteCoachDrillNotes?:  {
    __typename: "CoachDrillNotes",
    id: string,
    coachId: string,
    coach?:  {
      __typename: "Coach",
      id: string,
      cognitoId: string,
      name: string,
      lastName: string,
      phoneNumber?: string | null,
      email?: string | null,
      bio?: string | null,
      school?: string | null,
      zipCode?: string | null,
      address?: string | null,
      state?: string | null,
      city?: string | null,
      country?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    drillId: string,
    drill?:  {
      __typename: "Drill",
      id: string,
      name: string,
      trackingName?: string | null,
      description: string,
      goal: string,
      videoId: string,
      duration: number,
      skillId: string,
      hidden?: boolean | null,
      tries?: number | null,
      level?: number | null,
      club?: string | null,
      title?: string | null,
      challenge: string,
      isDynamic?: boolean | null,
      thirdOption?: boolean | null,
      type?: DrillType | null,
      createdAt: string,
      updatedAt: string,
      skillDrillsId?: string | null,
    } | null,
    notes?: string | null,
    share?: boolean | null,
    createdAt: string,
    updatedAt: string,
    drillCoachNotesId?: string | null,
    coachCoachDrillNotesId?: string | null,
    owner?: string | null,
  } | null,
};
