
export enum Duration {
  DATE_RANGE = 'Date Range',
  SHIFT = 'Shift'
}

export enum DatePeriod {
  ALL = 'ALL',
  TODAY = 'TODAY',
  THIS_WEEK = 'THIS_WEEK',
  THIS_MONTH = 'THIS_MONTH',
  PREVIOUS_MONTH = 'PREVIOUS_MONTH',
  NEXT_MONTH = 'NEXT_MONTH',
  THIS_YEAR = 'THIS_YEAR',
  PREVIOUS_YEAR = 'PREVIOUS_YEAR',
  CUSTOM = 'CUSTOM'
}

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export enum TaskStatusEnum {
  TO_DO = 'TO DO',
  IN_PROGRESS = 'IN PROGRESS',
  CLOSED = 'CLOSED',
  RESOLVED = 'RESOLVED',
  DONE = 'DONE',
  PASS = 'PASS'
}

export enum RequestStatus {
  WAITING_APPROVAL = 'WAITING_APPROVAL',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
  CANCELLED_WAITING = 'CANCELLED_WAITING',
  CANCELLED_APPROVED = 'CANCELLED_APPROVED',
  CANCELLED_REJECTED = 'CANCELLED_REJECTED'
}

export enum ProjectType {
  SCRUM = 'Scrum',
  KANBAN = 'Kanban'
}

export enum ProjectVisibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

export enum IntegrationType {
  EMAIL_CONFIRM = 'EMAIL_CONFIRM',
  SLACK_OAUTH = 'SLACK_OAUTH',
  JIRA_OAUTH = 'JIRA_OAUTH',
  JIRA_OAUTH_USER = 'JIRA_OAUTH_USER',
  EXTENDING_TRIAL = 'EXTENDING_TRIAL',
  RESET_EMAIL = 'RESET_EMAIL',
  GOOGLE_DRIVE = 'GOOGLE_DRIVE',
  GITLAB_OAUTH = 'GITLAB_OAUTH',
  GITHUB_OAUTH = 'GITHUB_OAUTH',
  BITBUCKET_OAUTH = 'BITBUCKET_OAUTH',
  EMAIL_CONFIRM_SIGN_UP = 'EMAIL_CONFIRM_SIGN_UP',
  EMAIL_CONFIRM_FORGOT_PASSWORD = 'EMAIL_CONFIRM_FORGOT_PASSWORD',
  EMAIL_CONFIRM_EXTENDING_TRIAL = 'EMAIL_CONFIRM_EXTENDING_TRIAL',
  EMAIL_RESET_PASSWORD = 'EMAIL_RESET_PASSWORD'
}

export enum TimeSheetType {
  MY_LOGWORK = 'MY_LOGWORK',
  REPORTS = 'REPORTS'
}

export enum IntegrationPlatform {
  Jira = 'Jira',
  Gitlab = 'Gitlab',
  Github = 'Github',
  Bitbucket = 'Bitbucket'
}

export enum TaskTypeEnum {
  Epic = 'Epic',
  Story = 'Story',
  Task = 'Task',
  SubTask = 'Sub Task',
  Bug = 'Bug',
  Improvement = 'Improvement',
  Feature = 'Feature',
  Question = 'Question',
  Storyline = 'Storyline',
  Requirement = 'Requirement',
  TaskTemplate = 'Task Template',
}

export enum TaskName {
  ToDo = 'To Do'
}

export enum Priority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  CRITICAL = 'CRITICAL',
  VERY_HIGH = 'VERY_HIGH',
  VERY_LOW = 'VERY_LOW',
  BLOCKER = 'BLOCKER'
}

export enum PriorityName {
  Medium = 'Medium'
}

export enum HolidayType {
  PUBLIC = 'Public',
  COMPANY = 'Company'
}

export enum SettingTab {
  LEAVE_MANAGEMENT_SETTING,
  ORG_SHIFT_SETTING,
  ROLE_AND_PERMISSION,
  HR_POLICY,
  ORG_ORANIZATION_TREE_SETTING,
  HR_SETTING
}

export enum AttachmentStatusEnum {
  PENDING, // not uploaded yet
  INPROGRESS,
  SUCCESS,
  FAILED,
  SAVED // Server file
}

export enum WorkItemTypeEnum {
  STORY = 'Story',
  TASK = 'Task',
  EPIC = 'Epic'
}

export enum OkrObjectiveType {
  COMPANY = 'COMPANY',
  GROUP = 'GROUP',
  TEAM = 'TEAM',
  PERSONAL = 'PERSONAL'
}

export enum OkrKpiType {
  OKR = 'OKR',
  LEADING = 'LEADING',
  LAGGING = 'LAGGING'
}

export enum OkrResultType {
  PERCENT = 'PERCENT',
  NUMBER = 'NUMBER'
}

export enum OkrRiskLevel {
  COMPLETED = 'COMPLETED',
  ON_TRACK = 'ON_TRACK',
  LOW_RISK = 'LOW_RISK',
  MEDIUM_RISK = 'MEDIUM_RISK',
  HIGH_RISK = 'HIGH_RISK',
  NO_CHECKIN = 'NO_CHECKIN'
}

export enum OkrNoContentType {
  noOkr = 'noOkr',
  noWorkspace = 'noWorkspace',
  noTimeline = 'noTimeline'
}

export enum OkrMyFollowUp {
  myOkr = 'myOkr',
  myTeam = 'myTeam',
  myGroup = 'myGroup',
  all = 'all'
}

export enum OkrRole {
  leader = 'Leader',
  member = 'Member'
}

export enum ScreenView {
  large = 'large',
  small = 'small'
}

export enum TaskFormatType {
  noTakskKey = 'NoTaskKey',
  taskKey = 'TaskKey',
  taskKeyWithLink = 'TaskKeyWithLink'
}

export enum AUDIT_ACTION {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}

export enum BenefitRuleType {
  benefit = 'Benefit',
  rule = 'Rule'
}

export enum CompanyStructureViewChildStyle {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL'
}

export enum CompanyStructureViewChildLabel {
  vertical = 'Vertical Structure',
  horizontal = 'Horizontal Structure'
}

export enum CompanyStructureLevel {
  HEIGHEST = 'aaaaaa',
  LOWEST = 'zzzzzz'
}
export enum PageProcess {
  project = 'project',
  hrBoard = 'hrBoard',
  userBoard = 'userBoard'
}

export enum Gender {
  male = 'Male',
  female = 'Female'
}

export enum PageProjectMember {
  project = 'project',
  hrOnboard = 'hr'
}

export enum ColorProgress {
  BEGIN = '#ec4d57',
  LOW = '#fcc045',
  MEDIUM = '#4c9aff',
  HIGH = '#0053b3',
  COMPLETE = '#83D185'
}

export enum SettingBoard {
  PROJECTBOARD = 'PROJECTBOARD',
  HRBOARD = 'HRBOARD',
  ONBOARD = 'ONBOARD'
}

export enum FieldHistory {
  dueDate = 'dueDate',
  assignee = 'assignee',
  reporter = 'reporter',
  cc = 'cc',
  type = 'type',
  priority = 'priority',
  'self' = 'self',
  estimate = 'timeOriginalEstimate',
  storyPoint = 'storyPoint',
  sprint = 'sprint',
  metricValue = 'metricValue',
  description = 'description',
  name = 'name',
  versions = 'versions',
  epic = 'epic',
  platform = 'platform',
  label = 'labels',
  metric = 'metric',
  storylineFlg = 'storylineFlg',
  privateFlg = 'privateFlg',
  stakeHolder = 'stakeHolder',
  objectiveType = 'objectiveType',
  progress = 'progress',
  leaveDayUsed = 'leaveDayUsed',
  parentWeight = 'parentWeight',
  weight = 'weight',
  resultType = 'resultType',
  endDate = 'endDate',
  startDate = 'startDate',
  expected = 'expected',
  current = 'current',
  leaveDayAllowed = 'leaveDayAllowed',
  timeline = 'timeline',
  start = 'start',
  okrGroups = 'okrGroups',
  okrTeams = 'okrTeams',
  riskLevel = 'riskLevel',
  currentMetricValue = 'currentMetricValue',
  startMetricValue = 'startMetricValue',
  storyline = 'Storyline',
  labelProject = 'Label',
  boardStatus = 'Board Status',
  projectMember = 'Project Member',
  Priority = 'Priority',
  taskType = 'Task Type',
  boardColumnProject = 'Board Column',
  boardColumn = 'Boardcolumn',
  taskTemplate = 'taskTemplate',
  projects = 'Projects',
  startTime = 'startTime',
  endTime = 'endTime',
  comment = 'comment',
  justify = 'justify',
  indicator = 'indicator',
  category = 'category'
}

export enum OptionCompany {
  LANGUAGE = 'language'
}

export enum CVPatchType {
  ARCHIVED = 'archived',
  STATUS = 'status',
  FIRSTNAME = 'firstName',
  LASTNAME = 'lastName',
  JOBTITLE = 'jobTitle',
  EMAIL = 'email',
  PHONE = 'phone',
  GENDER = 'gender',
  USERRECOMMEND = 'userRecommend',
  RATING = 'rating',
  AVATAR = 'avatar',
  DESCRIPTION = 'description'
}

export enum FeatureType {
  BALANCE = 'BALANCE',
  TASK = 'TASK',
  PROJECT = 'PROJECT',
  IMPORT_JIRA = 'IMPORT_JIRA'
}

export enum LeavePeriod {
  AM = 'AM',
  PM = 'PM',
  FULL_DAY = 'Full Day'
}

export enum TrackingSummaryReportLabel {
  ON_TIME = 'On Time',
  MISSED = 'Missed',
  LATE = 'Late',
  SOON = 'Soon'
}

export enum AttachmentType {
  description = 'Description',
  comment = 'Comment',
  other = 'Other'
}

export enum TaskReleaseListType {
  baseline = 'baseline',
  storyline = 'storyline',
  gantt = 'gantt'
}

export enum ActiveSprintTabs {
  activeBoard = 'activeBoard',
  ganttBoard = 'ganttBoard'
}

export enum DocumentTemplatePatchType {
  name = 'name',
  type = 'type'
}

export enum DocumentTemplateType {
  payslip = 'Payslip',
  contract = 'Contract'
}

export enum BsPlacement {
  auto = 'auto',
  top = 'top',
  bottom = 'bottom',
  right = 'right',
  left = 'left',
  topLeft = 'top left',
  topRight = 'top right',
  bottomLeft = 'bottom left',
  bottomRight = 'bottom right'
}

export enum FileExtension {
  csv = 'csv',
  zip = 'zip'
}
