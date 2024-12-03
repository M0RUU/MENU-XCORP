


import { AppIcon, ShortcutIcon } from '../models/app/icon.model';
import { RouteSeoOrgDataLanding } from '../models/app/seo.model';
import { ViewChild } from '../models/company-structure.model';
import { StatusDefault } from '../models/task-status.model';
import { SelectOption } from '../models/utils.model';
import { OkrMyFollowUp, OkrObjectiveType, OkrResultType } from './enums';
import { LanguageCode } from './enums/i18n.enum';

export const USER_LAST_URL = 'expercLastUrl';
export const USER_DOMAIN_ACCESS_TOKEN = 'expercUserDomainToken';
export const XCORP_ACCOUNTS = 'expercXcorpAccounts';
export const USER_ACCESS_TOKEN_KEY = 'expercUserAccessToken';
export const USER_PROFILE_KEY = 'expercUserProfile';
export const CURRENT_PROJECT_KEY = 'expercCurrentProjectWithUserId';
export const CURRENT_RELEASE = 'expercCurrentRelease';
export const USER_ROLE_PERMISSIONS_KEY = 'expercRolePermissions';
export const SIDEBAR_SIZE_KEY = 'expercSidebarSize';
export const LEADER_PROJECTS_KEY = 'expercLeaderProjects';
export const PROJECTS_LIST_SIZE = 'expercProjectListSize';
export const BACKLOG_TASK_DETAIL_SIZE_KEY = 'expercBacklogTaskDetailSize';
export const STORYLINE_TASK_DETAIL_SIZE_KEY = 'expercStorylineTaskDetailSize';
export const OKR_ITEM_DETAIL_SIZE_KEY = 'expercOkrItemDetailSize';
export const TIMESHEET_REPORT_FILTER_KEY = 'expercTimesheetReportFilter';
export const IS_EXPAND_PLANNING_KEY = 'expercIsExpandPlanningKey';
export const IS_EXPAND_PLANNING_FILTER = 'expercIsExpandPlanningFilter';
export const IS_COLLAPSE_MY_POLICY_KEY = 'expercIsCollapseMyPolicyKey';
export const ACTIVE_BOARD_FILTER_KEY = 'expercActiveBoardFilter';
export const RELEASE_DETAIL_FILTER_KEY = 'expercReleaseDetailFilter';
export const HIRING_BOARD_FILTER_KEY = 'expercHiringBoardFilter';
export const ONBOARD_MISSION_FILTER_KEY = 'expercBoardMissionFilter';
export const ONBOARD_FILTER_KEY = 'expercBoardFilter';
export const PRICING_DATA_KEY = 'expercPricingData';
export const RECENTLY_SPACES_KEY = 'expercRecentlySpaces';
export const CURRENT_SPACE_KEY = 'expercCurrentSpace';
export const PRICING_PERIODS_KEY = 'expercPricingPeriods';
export const PREVIEW_FILES_KEY = 'expercPreviewFiles';
export const TIME_TRACK_USER_LOGIN_KEY = 'expercTimeTrackUserLogin';
export const SET_TIME_NAVIGATE_SLACK = 'expercSetTimeNavigateSlack';
export const CALENDAR_SETTING = 'expercCalendarSetting';
export const OK_AI_BUSINESS = 'expercOkrAiBusiness';
export const TIME_FORMAT = 'HH:mm:ss';
export const DATE_FORMAT = 'YYYY-MM-DD';
export const SHORT_DATE_FORMAT = 'DD/MM/YYYY';
export let DATE_FORMAT_SHORT = 'MMM d';
export let DATE_UI_FORMAT_ANGULAR = 'MMM dd, yyyy';
export let DATE_UI_FORMAT = 'MMM DD, YYYY';
export let DATE_UI_WORK_CALENDAR_FORMAT = 'ddd MMM DD, YYYY';
export let DATE_UI_SHORT_FORMAT = 'MMM DD, YYYY';
export let DATE_TIME_UI_12_HOURS_FORMAT = `${DATE_UI_FORMAT} hh:mm A`;
export let DATE_TIME_UI_HOUR_BEFORE_DATE_FORMAT = `HH:mm ${DATE_UI_FORMAT}`;
export const DATE_MONTH_YEAR_UI_FORMAT = 'MMMM, y'; // EX: 'November, 2021'
export let DATE_MONTH_YEAR_SHORT_UI_FORMAT = 'MMM, y';
export let DATE_QUARTER_YEAR_SHORT_UI_FORMAT = '[Q]Q, y';
export const DATE_DAY_MONTH_UI_FORMAT = 'DD MMMM'; // EX: 'November, 2021'
export const DATE_FORMAT_MONTH_NAME_DAY_YEAR = 'MMM DD, YYYY';
export let DATE_FORMAT_MONTH_NAME_DAY = 'MMM DD';
export let FORMAT_12_HOURS = 'hh:mm A';
export const WEEK_DAY_UI_FORMAT = 'dddd'; // EX: 'Monday'
export const DATE_MONTH_UI_FORMAT = 'MMMM DD'; // EX: 'January 25'
export const MONTH_UI_FORMAT = 'MMMM'; // EX: 'November'
export let DATE_FORMAT_FULL_DAY = `hh:mm:ss ${DATE_UI_SHORT_FORMAT}`;
export const DATE_FORMAT_DAY_BY_MINUTE_SECOND = 'YYYY-MM-DDTHH:mm:ss';
export const DATE_FORMAT_DAY_BY_MINUTE = 'YYYY-MM-DDTHH:mm';
export const DATE_TIME_UI = 'DD MMM, yyyy HH:mm';
export const tStartDateTime = `T00:00:00.000Z`;
export const ISO_DATE_FORMAT = DATE_FORMAT + tStartDateTime;
export const tEndDateTime = `T23:59:59.000Z`;
export let REMINDER_DATE_UI = 'MMM DD, YYYY [at] HH:mm';
export let REMINDER_SHORT_DATE_UI = 'MMM DD [at] HH:mm';
export const HOUR_MINUTE = 'HH:mm';
export const googleAnalyticsUserKey = 'xcorp';
export const numbericPattern = /^[0-9]*$/;
export const faxPattern = /^\+?[0-9]{6,}$/;
export const domainNamePattern = /^[a-zA-Z0-9!"#$%&'()*+,\-/:;<=>?@[\]\\^_`{|}~]*$/;
export const time24HoursPattern = /^(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)$/;
export const removeHtmlTagExceptImgTag = /<(?!img)[^>]+>/g;
export const isImgTag = '<img.*?>';
export const avatarSize = 512;
export const maximumFileSize = 10 * 1024 * 1024 * 1024; // 10*1024MB = 10GB
export const maximumFileSizeText = '10GB';
export const dayCodes = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']; // Thứ tự theo server.
export const shortDay = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
export const hexColorCodePattern = /^#([0-9a-f]{3}){1,2}$/i;
export const defaultHexColorIcon = '#000000';
export const MAX_MOBILE_WIDTH = 768; // pixel
export const PAGE_SIZE = [10, 20, 30, 40, 50, 100];
export const FIRST_PAGE = 0;
export const DEFAULT_PAGE_SIZE = 10;
export const CURRENT_LANGUAGE = 'expercCurrentLanguage';
export const DETAIL_PAGE = 'expercDetailPage';
export const TASK_WIDTH_BREAK_POINT = 430;
export const DEFAULT_TEXT_MAX_LENGTH = 512;

export const REGREX_IS_HTML = '<("[^"]*"|\'[^\']*\'|[^\'">])*>';

export const TABLE_CONFIG = {
  headerHeight: 34,
  footHeight: 34,
  rowHeight: 45,
  emptyMessage: 'No data to display',
};

export const ALL_OPTION_DATE_FILTER = { name: 'All', value: null };
export const dateFilters: SelectOption[] = [
  {
    name: 'Today',
    value: 'TODAY',
  },
  {
    name: 'This Week',
    value: 'THIS_WEEK',
  },
  {
    name: 'This Month',
    value: 'THIS_MONTH',
  },
  {
    name: 'Last Month',
    value: 'PREVIOUS_MONTH',
  },
  {
    name: 'Next Month',
    value: 'NEXT_MONTH',
  },
  {
    name: 'This Year',
    value: 'THIS_YEAR',
  },
  {
    name: 'Custom',
    value: 'CUSTOM',
  },
];

export const sprintPeriods = {
  'ONE_WEEK': 'ONE_WEEK',
  'TWO_WEEKS': 'TWO_WEEKS',
  'THREE_WEEKS': 'THREE_WEEKS',
  'FOUR_WEEKS': 'FOUR_WEEKS',
  'CUSTOM': 'CUSTOM'
};

export const sprintPeriodOptions: SelectOption[] = [
  {
    name: '1 Week',
    value: sprintPeriods['ONE_WEEK'],
  },
  {
    name: '2 Week',
    value: sprintPeriods['TWO_WEEKS'],
  },
  {
    name: '3 Week',
    value: sprintPeriods['THREE_WEEKS'],
  },
  {
    name: '4 Week',
    value: sprintPeriods['FOUR_WEEKS'],
  },
  {
    name: 'Custom',
    value: sprintPeriods['CUSTOM'],
  },
];

export const period = {
  today: 'Today',
  thisWeek: 'This Week',
  nextWeek: 'Next Week',
  preWeek: 'Pre-Week',
  thisMonth: 'This Month',
};

export const reportType = {
  start: 'START',
  end: 'END',
};

export const sidebarSize = {
  small: 'sidebar-small',
  medium: 'sidebar-medium',
  large: 'sidebar-large',
};

export const sortDirection = {
  asc: 'asc',
  desc: 'desc',
};

export const status = {
  active: 'ACTIVE',
  inactive: 'INACTIVE',
};

export const userTrackingReportStatus = {
  waiting: 'WAITING',
  completed: 'COMPLETED',
  lately: 'LATELY',
  missed: 'MISSED',
  early: 'EARLY',
  none: 'NONE',
  invalid: 'INVALID', // LATELY or EARLY
  soon: 'SOON',
  late: 'LATE',
  statistic: 'STATISTIC'
};


export const reportStatus = {
  completed: {
    text: 'Reported At Time',
    color: '#77BE79',
  },
  lately: {
    text: 'Reported Late',
    color: '#FCC045',
  },
  early: {
    text: 'Reported Soon',
    color: '#FCC045',
  },
  missed: {
    text: 'Missed Report',
    color: '#EC4D57',
  },
};

export const requestLeaveUserType = {
  requestOwner: 'REQUEST_OWNER',
  approver: 'APPROVER',
  viewer: 'VIEWER',
};

export const workingStatus = {
  working: 'WORKING',
  noneWorking: 'NONE_WORKING',
};

export const workTrackingType = {
  general: 'GENERAL',
  group: 'GROUP',
};

export const timelineType = {
  checkbox: 'checkbox',
  timepicker: 'timepicker',
};

export const authProvider = {
  basic: 'BASIC',
  google: 'GOOGLE',
};

export const categories = [
  {
    name: 'WFH',
    value: 'WFH',
  },
  {
    name: 'Paid',
    value: 'Paid',
  },
  {
    name: 'Unpaid',
    value: 'UnPaid',
  },
];

export const userRoles = {
  systemAdmin: 'system_admin',
  superAdmin: 'super_admin',
  approver: 'approver',
  user: 'user',
  student: 'sys_student',
  teacher: 'sys_teacher',
  projectAdmin: 'sys_project_admin',
};

export const pricingModuleDesc = {
  free: { name: 'Free', desc: 'Effective collaboration for Leave Management and Kanban Task Management under 20 users.' },
  taskManagement: { name: 'Task Management', desc: 'Effective collaboration for task management and log work timesheet.' },
  companyManagement: { name: 'Company Management', desc: 'Effective collaboration for leave tracking and work tracking your company.' },
  professional: { name: 'Professional', desc: 'Advanced task management and business process automation.' },
};

export const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// tslint:disable-next-line: max-line-length
export const fileFormatToPdfs = ['odt', 'csv', 'db', 'doc', 'docx', 'dotx', 'fodp', 'fods', 'fodt', 'mml', 'odb', 'odf', 'odg', 'odm', 'odp', 'ods', 'otg', 'otp', 'ots', 'ott', 'oxt', 'pdf', 'ppt', 'pptx', 'psw', 'sda', 'sdc', 'sdd', 'sdp', 'sdw', 'slk', 'smf', 'stc', 'std', 'sti', 'stw', 'sxc', 'sxg', 'sxi', 'sxm', 'sxw', 'uof', 'uop', 'uos', 'uot', 'vsd', 'vsdx', 'wdb', 'wps', 'wri', 'xls', 'xlsx', 'dic', 'doc#', 'mab', 'tsv', 'txtrpt', 'txt'];

export const okrResultTypes: SelectOption[] = [
  {
    name: 'Percent',
    value: OkrResultType.PERCENT,
  },
  {
    name: 'Number',
    value: OkrResultType.NUMBER,
  },
];

export const okrObjectiveTypes: SelectOption[] = [
  {
    name: 'Company',
    value: OkrObjectiveType.COMPANY,
  },
  {
    name: 'Group',
    value: OkrObjectiveType.GROUP,
  },
  {
    name: 'Team',
    value: OkrObjectiveType.TEAM,
  },
  {
    name: 'Personal',
    value: OkrObjectiveType.PERSONAL,
  },
];


export const okrMyFollowUps: SelectOption<OkrMyFollowUp>[] = [
  {
    name: 'My OKR',
    value: OkrMyFollowUp.myOkr,
  },
  {
    name: 'My Team',
    value: OkrMyFollowUp.myTeam,
  },
  {
    name: 'My Group',
    value: OkrMyFollowUp.myGroup,
  },
  {
    name: 'All',
    value: OkrMyFollowUp.all,
  },
];

export const TASK_FORMATS = [
  { label: 'No task key', value: 'NoTaskKey' },
  { label: 'Task key', value: 'TaskKey' },
  { label: 'Task key with link', value: 'TaskKeyWithLink' }
];

export const licenseCode = {
  leaveTracking: 'leaveTracking',
  dailyReport: 'dailyReport',
  taskManagement: 'taskManagement',
  timesheet: 'timesheet',
  documentManagement: 'documentManagement',
  okr: 'okr',
};

export const storylineIcons = [
  'assets/icons/platform_1.svg',
  'assets/icons/platform_2.svg',
  'assets/icons/platform_3.svg',
  'assets/icons/platform_4.svg',
  'assets/icons/platform_5.svg',
  'assets/icons/platform_6.svg',
  'assets/icons/platform_7.svg',
  'assets/icons/platform_8.svg',
  'assets/icons/platform_9.svg',
  'assets/icons/platform_10.svg',
];

export const storylineColors = [
  '#bc50cd', '#ec4d57', '#77be79', '#00c4ff', '#dc6946', '#0cb1a1', '#207cf3', '#f1a404', '#4154cb', '#a5464c'
];

export const taskTypeIcons: AppIcon[] = [
  {
    icon: 'assets/icons/task-type/epic/epic_0.svg',
    colorCode: '#844ce7',
    child: [
      {
        icon: 'assets/icons/task-type/epic/epic_0.svg',
        colorCode: '#844ce7',
      },
      {
        icon: 'assets/icons/task-type/epic/epic_1.svg',
        colorCode: '#77be79',
      },
      {
        icon: 'assets/icons/task-type/epic/epic_2.svg',
        colorCode: '#527dff',
      },
      {
        icon: 'assets/icons/task-type/epic/epic_3.svg',
        colorCode: '#138a9d',
      },
      {
        icon: 'assets/icons/task-type/epic/epic_4.svg',
        colorCode: '#ec4d57',
      },
      {
        icon: 'assets/icons/task-type/epic/epic_5.svg',
        colorCode: '#f1a404',
      },
      {
        icon: 'assets/icons/task-type/epic/epic_6.svg',
        colorCode: '#1b69a6',
      },
      {
        icon: 'assets/icons/task-type/epic/epic_7.svg',
        colorCode: '#42526e',
      },
      {
        icon: 'assets/icons/task-type/epic/epic_8.svg',
        colorCode: '#00c9d8',
      },
      {
        icon: 'assets/icons/task-type/epic/epic_9.svg',
        colorCode: '#f84794',
      },
    ],
  },
  {
    icon: 'assets/icons/task-type/story/story_1.svg',
    colorCode: '#77be79',
    child: [
      {
        icon: 'assets/icons/task-type/story/story_0.svg',
        colorCode: '#844ce7',
      },
      {
        icon: 'assets/icons/task-type/story/story_1.svg',
        colorCode: '#77be79',
      },
      {
        icon: 'assets/icons/task-type/story/story_2.svg',
        colorCode: '#527dff',
      },
      {
        icon: 'assets/icons/task-type/story/story_3.svg',
        colorCode: '#138a9d',
      },
      {
        icon: 'assets/icons/task-type/story/story_4.svg',
        colorCode: '#ec4d57',
      },
      {
        icon: 'assets/icons/task-type/story/story_5.svg',
        colorCode: '#f1a404',
      },
      {
        icon: 'assets/icons/task-type/story/story_6.svg',
        colorCode: '#1b69a6',
      },
      {
        icon: 'assets/icons/task-type/story/story_7.svg',
        colorCode: '#42526e',
      },
      {
        icon: 'assets/icons/task-type/story/story_8.svg',
        colorCode: '#00c9d8',
      },
      {
        icon: 'assets/icons/task-type/story/story_9.svg',
        colorCode: '#f84794',
      },
    ],
  },
  {
    icon: 'assets/icons/task-type/task/task_2.svg',
    colorCode: '#527dff',
    child: [
      {
        icon: 'assets/icons/task-type/task/task_0.svg',
        colorCode: '#844ce7',
      },
      {
        icon: 'assets/icons/task-type/task/task_1.svg',
        colorCode: '#77be79',
      },
      {
        icon: 'assets/icons/task-type/task/task_2.svg',
        colorCode: '#527dff',
      },
      {
        icon: 'assets/icons/task-type/task/task_3.svg',
        colorCode: '#138a9d',
      },
      {
        icon: 'assets/icons/task-type/task/task_4.svg',
        colorCode: '#ec4d57',
      },
      {
        icon: 'assets/icons/task-type/task/task_5.svg',
        colorCode: '#f1a404',
      },
      {
        icon: 'assets/icons/task-type/task/task_6.svg',
        colorCode: '#1b69a6',
      },
      {
        icon: 'assets/icons/task-type/task/task_7.svg',
        colorCode: '#42526e',
      },
      {
        icon: 'assets/icons/task-type/task/task_8.svg',
        colorCode: '#00c9d8',
      },
      {
        icon: 'assets/icons/task-type/task/task_9.svg',
        colorCode: '#f84794',
      },
    ],
  },
  {
    icon: 'assets/icons/task-type/sub-task/sub-task_3.svg',
    colorCode: '#138a9d',
    child: [
      {
        icon: 'assets/icons/task-type/sub-task/sub-task_0.svg',
        colorCode: '#844ce7',
      },
      {
        icon: 'assets/icons/task-type/sub-task/sub-task_1.svg',
        colorCode: '#77be79',
      },
      {
        icon: 'assets/icons/task-type/sub-task/sub-task_2.svg',
        colorCode: '#527dff',
      },
      {
        icon: 'assets/icons/task-type/sub-task/sub-task_3.svg',
        colorCode: '#138a9d',
      },
      {
        icon: 'assets/icons/task-type/sub-task/sub-task_4.svg',
        colorCode: '#ec4d57',
      },
      {
        icon: 'assets/icons/task-type/sub-task/sub-task_5.svg',
        colorCode: '#f1a404',
      },
      {
        icon: 'assets/icons/task-type/sub-task/sub-task_6.svg',
        colorCode: '#1b69a6',
      },
      {
        icon: 'assets/icons/task-type/sub-task/sub-task_7.svg',
        colorCode: '#42526e',
      },
      {
        icon: 'assets/icons/task-type/sub-task/sub-task_8.svg',
        colorCode: '#00c9d8',
      },
      {
        icon: 'assets/icons/task-type/sub-task/sub-task_9.svg',
        colorCode: '#f84794',
      },
    ],
  },
  {
    icon: 'assets/icons/task-type/bug/bug_4.svg',
    colorCode: '#ec4d57',
    child: [
      {
        icon: 'assets/icons/task-type/bug/bug_0.svg',
        colorCode: '#844ce7',
      },
      {
        icon: 'assets/icons/task-type/bug/bug_1.svg',
        colorCode: '#77be79',
      },
      {
        icon: 'assets/icons/task-type/bug/bug_2.svg',
        colorCode: '#527dff',
      },
      {
        icon: 'assets/icons/task-type/bug/bug_3.svg',
        colorCode: '#138a9d',
      },
      {
        icon: 'assets/icons/task-type/bug/bug_4.svg',
        colorCode: '#ec4d57',
      },
      {
        icon: 'assets/icons/task-type/bug/bug_5.svg',
        colorCode: '#f1a404',
      },
      {
        icon: 'assets/icons/task-type/bug/bug_6.svg',
        colorCode: '#1b69a6',
      },
      {
        icon: 'assets/icons/task-type/bug/bug_7.svg',
        colorCode: '#42526e',
      },
      {
        icon: 'assets/icons/task-type/bug/bug_8.svg',
        colorCode: '#00c9d8',
      },
      {
        icon: 'assets/icons/task-type/bug/bug_9.svg',
        colorCode: '#f84794',
      },
    ],
  },
  {
    icon: 'assets/icons/task-type/improvement/improvement_5.svg',
    colorCode: '#f1a404',
    child: [
      {
        icon: 'assets/icons/task-type/improvement/improvement_0.svg',
        colorCode: '#844ce7',
      },
      {
        icon: 'assets/icons/task-type/improvement/improvement_1.svg',
        colorCode: '#77be79',
      },
      {
        icon: 'assets/icons/task-type/improvement/improvement_2.svg',
        colorCode: '#527dff',
      },
      {
        icon: 'assets/icons/task-type/improvement/improvement_3.svg',
        colorCode: '#138a9d',
      },
      {
        icon: 'assets/icons/task-type/improvement/improvement_4.svg',
        colorCode: '#ec4d57',
      },
      {
        icon: 'assets/icons/task-type/improvement/improvement_5.svg',
        colorCode: '#f1a404',
      },
      {
        icon: 'assets/icons/task-type/improvement/improvement_6.svg',
        colorCode: '#1b69a6',
      },
      {
        icon: 'assets/icons/task-type/improvement/improvement_7.svg',
        colorCode: '#42526e',
      },
      {
        icon: 'assets/icons/task-type/improvement/improvement_8.svg',
        colorCode: '#00c9d8',
      },
      {
        icon: 'assets/icons/task-type/improvement/improvement_9.svg',
        colorCode: '#f84794',
      },
    ],
  },
  {
    icon: 'assets/icons/task-type/feature/feature_6.svg',
    colorCode: '#1b69a6',
    child: [
      {
        icon: 'assets/icons/task-type/feature/feature_0.svg',
        colorCode: '#844ce7',
      },
      {
        icon: 'assets/icons/task-type/feature/feature_1.svg',
        colorCode: '#77be79',
      },
      {
        icon: 'assets/icons/task-type/feature/feature_2.svg',
        colorCode: '#527dff',
      },
      {
        icon: 'assets/icons/task-type/feature/feature_3.svg',
        colorCode: '#138a9d',
      },
      {
        icon: 'assets/icons/task-type/feature/feature_4.svg',
        colorCode: '#ec4d57',
      },
      {
        icon: 'assets/icons/task-type/feature/feature_5.svg',
        colorCode: '#f1a404',
      },
      {
        icon: 'assets/icons/task-type/feature/feature_6.svg',
        colorCode: '#1b69a6',
      },
      {
        icon: 'assets/icons/task-type/feature/feature_7.svg',
        colorCode: '#42526e',
      },
      {
        icon: 'assets/icons/task-type/feature/feature_8.svg',
        colorCode: '#00c9d8',
      },
      {
        icon: 'assets/icons/task-type/feature/feature_9.svg',
        colorCode: '#f84794',
      },
    ],
  },
  {
    icon: 'assets/icons/task-type/question/question_7.svg',
    colorCode: '#42526e',
    child: [
      {
        icon: 'assets/icons/task-type/question/question_0.svg',
        colorCode: '#844ce7',
      },
      {
        icon: 'assets/icons/task-type/question/question_1.svg',
        colorCode: '#77be79',
      },
      {
        icon: 'assets/icons/task-type/question/question_2.svg',
        colorCode: '#527dff',
      },
      {
        icon: 'assets/icons/task-type/question/question_3.svg',
        colorCode: '#138a9d',
      },
      {
        icon: 'assets/icons/task-type/question/question_4.svg',
        colorCode: '#ec4d57',
      },
      {
        icon: 'assets/icons/task-type/question/question_5.svg',
        colorCode: '#f1a404',
      },
      {
        icon: 'assets/icons/task-type/question/question_6.svg',
        colorCode: '#1b69a6',
      },
      {
        icon: 'assets/icons/task-type/question/question_7.svg',
        colorCode: '#42526e',
      },
      {
        icon: 'assets/icons/task-type/question/question_8.svg',
        colorCode: '#00c9d8',
      },
      {
        icon: 'assets/icons/task-type/question/question_9.svg',
        colorCode: '#f84794',
      },
    ],
  },
  {
    icon: 'assets/icons/task-type/storyline/storyline_8.svg',
    colorCode: '#00c9d8',
    child: [
      {
        icon: 'assets/icons/task-type/storyline/storyline_0.svg',
        colorCode: '#844ce7',
      },
      {
        icon: 'assets/icons/task-type/storyline/storyline_1.svg',
        colorCode: '#77be79',
      },
      {
        icon: 'assets/icons/task-type/storyline/storyline_2.svg',
        colorCode: '#527dff',
      },
      {
        icon: 'assets/icons/task-type/storyline/storyline_3.svg',
        colorCode: '#138a9d',
      },
      {
        icon: 'assets/icons/task-type/storyline/storyline_4.svg',
        colorCode: '#ec4d57',
      },
      {
        icon: 'assets/icons/task-type/storyline/storyline_5.svg',
        colorCode: '#f1a404',
      },
      {
        icon: 'assets/icons/task-type/storyline/storyline_6.svg',
        colorCode: '#1b69a6',
      },
      {
        icon: 'assets/icons/task-type/storyline/storyline_7.svg',
        colorCode: '#42526e',
      },
      {
        icon: 'assets/icons/task-type/storyline/storyline_8.svg',
        colorCode: '#00c9d8',
      },
      {
        icon: 'assets/icons/task-type/storyline/storyline_9.svg',
        colorCode: '#f84794',
      },
    ],
  },
  {
    icon: 'assets/icons/task-type/requirement/requirement_9.svg',
    colorCode: '#f84794',
    child: [
      {
        icon: 'assets/icons/task-type/requirement/requirement_0.svg',
        colorCode: '#844ce7',
      },
      {
        icon: 'assets/icons/task-type/requirement/requirement_1.svg',
        colorCode: '#77be79',
      },
      {
        icon: 'assets/icons/task-type/requirement/requirement_2.svg',
        colorCode: '#527dff',
      },
      {
        icon: 'assets/icons/task-type/requirement/requirement_3.svg',
        colorCode: '#138a9d',
      },
      {
        icon: 'assets/icons/task-type/requirement/requirement_4.svg',
        colorCode: '#ec4d57',
      },
      {
        icon: 'assets/icons/task-type/requirement/requirement_5.svg',
        colorCode: '#f1a404',
      },
      {
        icon: 'assets/icons/task-type/requirement/requirement_6.svg',
        colorCode: '#1b69a6',
      },
      {
        icon: 'assets/icons/task-type/requirement/requirement_7.svg',
        colorCode: '#42526e',
      },
      {
        icon: 'assets/icons/task-type/requirement/requirement_8.svg',
        colorCode: '#00c9d8',
      },
      {
        icon: 'assets/icons/task-type/requirement/requirement_9.svg',
        colorCode: '#f84794',
      },
    ],
  },
];

export const DocumentFolderIcons: AppIcon[] = [
  {
    icon: 'assets/icons/documents/folder/default/default_0.svg',
    colorCode: '#32aae4',
    child: [
      {
        icon: 'assets/icons/documents/folder/default/default_0.svg',
        colorCode: '#32aae4',
      }
    ]
  },
  {
    icon: 'assets/icons/documents/folder/media/media_0.svg',
    colorCode: '#32aae4',
    child: [
      {
        icon: 'assets/icons/documents/folder/media/media_0.svg',
        colorCode: '#32aae4',
      }
    ]
  },
  {
    icon: 'assets/icons/documents/folder/image/image_0.svg',
    colorCode: '#32aae4',
    child: [
      {
        icon: 'assets/icons/documents/folder/image/image_0.svg',
        colorCode: '#32aae4',
      }
    ]
  },
  {
    icon: 'assets/icons/documents/folder/share/share_0.svg',
    colorCode: '#32aae4',
    child: [
      {
        icon: 'assets/icons/documents/folder/share/share_0.svg',
        colorCode: '#32aae4',
      }
    ]
  },
  {
    icon: 'assets/icons/documents/folder/list/list_0.svg',
    colorCode: '#32aae4',
    child: [
      {
        icon: 'assets/icons/documents/folder/list/list_0.svg',
        colorCode: '#32aae4',
      }
    ]
  },
  {
    icon: 'assets/icons/documents/folder/cloud/cloud_0.svg',
    colorCode: '#32aae4',
    child: [
      {
        icon: 'assets/icons/documents/folder/cloud/cloud_0.svg',
        colorCode: '#32aae4',
      }
    ]
  }
];

export const TypeShortcutIcons: ShortcutIcon[] = [
  {
    icon: 'assets/icons/documents/shortcut/icon_type_0.svg',
  },
  {
    icon: 'assets/icons/documents/shortcut/icon_type_1.svg',
  },
  {
    icon: 'assets/icons/documents/shortcut/icon_type_2.svg',
  },
  {
    icon: 'assets/icons/documents/shortcut/icon_type_3.svg',
  },
  {
    icon: 'assets/icons/documents/shortcut/icon_type_4.svg',
  },
]

export const statusDefaults: StatusDefault[] = [
  {
    name: 'To Do',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/bf1c253c2f566c0b1707bc1f0cc3b0bd/to_do.svg',
        colorCode: '#e3e3e3'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/e2ffcee1dd05f5e4b580fe65790ce42b/to_do_2.svg',
        colorCode: '#eddadb'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/255e45d1fc3a9328ea5ba505ea407622/to_do_3.svg',
        colorCode: '#cceae7'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/473b609bdd0a647c08d024b8f58b9ac2/to_do_4.svg',
        colorCode: '#d8dcf0'
      },
    ],
  },
  {
    name: 'Reopened',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/4b8ca10a7a39bd5c6a154d70c6de6e39/reopened.svg',
        colorCode: '#fbdbdd',
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/5345db1e7bc9d2b57158cdde5f8a6722/reopened_2.svg',
        colorCode: '#e4f2e4'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/8f3144f9bcd053fd4cdde06b8b4cf1cf/reopened_3.svg',
        colorCode: '#fcedcc'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/6fb24319545ae77cf66ed9a2bf9a8bc8/reopened_4.svg',
        colorCode: '#ccf3ff'
      },
    ],
  },
  {
    name: 'Pending',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/cafb82632014dc8581c1946f3f8be104/pending.svg',
        colorCode: '#eddadb',
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/67d505c2e6e2e8bc5fb27aa8a0353477/pending_2.svg',
        colorCode: '#c4caf0'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/5d36d018ab1d2f0a06470a3fa382995f/pending_3.svg',
        colorCode: '#e3e3e3'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/d76f607743e74d50580241aae35defe3/pending_4.svg',
        colorCode: '#fcedcc'
      },
    ],
  },
  {
    name: 'In Progress',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/8083e924a8a2c8ec124d77a14895b1cf/in_progress.svg',
        colorCode: '#ccf3ff',
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/0d78682858d56af5ad134affbb71c537/in_progress_2.svg',
        colorCode: '#fcedcc'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/f2682b8a300dbac161a60b81a70d4e2b/in_progress_3.svg',
        colorCode: '#fbdbdd'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/0709b2df82130f5071b7ccab60034b37/in_progress_4.svg',
        colorCode: '#e4f2e4'
      },
    ],
  },
  {
    name: 'Resolved',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/9ad96eb8bae6f1c05257fd37628a9843/resolved.svg',
        colorCode: '#fcedcc',
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/d8884475c5274b3670f1d9d7a8676d6b/resolved_2.svg',
        colorCode: '#d2e5fd'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/3b4dadb08a42d4add3c3016c2f57f299/resolved_3.svg',
        colorCode: '#fbdbdd'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/4ceb4113320c8f297d17b5fb0745834c/resolved_4.svg',
        colorCode: '#ebd3ef'
      },
    ],
  },
  {
    name: 'Ready for test',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/4b86c21f86d06e9a2082b53a6c940ec2/ready_for_test.svg',
        colorCode: '#e4f2e4',
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/58e44b012cf21dd8e6a24c7e16a1b033/ready_for_test_2.svg',
        colorCode: '#ebd3ef'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/8f6ccb60ac1972241e24d17b1a74aad9/ready_for_test_3.svg',
        colorCode: '#fcedcc'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/d39b361dadf403e8a9c37cae2245a7b4/ready_for_test_4.svg',
        colorCode: '#fbdbdd'
      },
    ],
  },
  {
    name: 'Fixed',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/929f2ae0390365fb779141b86332ff9c/fixed.svg',
        colorCode: '#e4f2e4',
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/9d22156a0617bd719914b3d2ae547e02/fixed_2.svg',
        colorCode: '#ebd3ef'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/a53ac258953efe1cf70886b43a9436fe/fixed_3.svg',
        colorCode: '#fcedcc'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/96aaa13017271c0449a0c7c54cd16a52/fixed_4.svg',
        colorCode: '#c4caf0'
      },
    ],
  },
  {
    name: 'Done',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/16465c8af5aa5899f02d0c0ffc84092c/done.svg',
        colorCode: '#e4f2e4',
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/3db7bb138f5be1346193206127a70c9f/done_2.svg',
        colorCode: '#d2e5fd'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/ad9d21306193bea11e753987ad28720e/done_3.svg',
        colorCode: '#fcedcc'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/f250badad33e47228224cf4052cffc65/done_4.svg',
        colorCode: '#ccf3ff'
      },
    ],
  },
  {
    name: 'Production deployed',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/3eb596b1d424469714e8dfa90a38918c/production_deployed.svg',
        colorCode: '#d2e5fd',
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/fb56fdbb5ee830222be35f744010fb99/production_deployed_2.svg',
        colorCode: '#cceae7'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/26f12495b356db42d25948a4f60b8426/production_deployed_3.svg',
        colorCode: '#ebd3ef'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/73a9d7472f7da4ba0f374eea7edaae5a/production_deployed_4.svg',
        colorCode: '#fbdbdd'
      },
    ],
  },
  {
    name: 'Verified',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/3cd1f7ac9e356c19c04fc96912389360/verified.svg',
        colorCode: '#d2e5fd',
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/fdfc8c898cd8902688929fd507e4e679/verified_2.svg',
        colorCode: '#e4f2e4'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/ab2e4f6939dbfa9f34840f8fd3348504/verified_3.svg',
        colorCode: '#ebd3ef'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/f3a9ec707e2c6e27605b24a4359231d9/verified_4.svg',
        colorCode: '#fcedcc'
      },
    ],
  },
  {
    name: 'Release',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/d03307f9010ae7ce55ac9889cc090628/release.svg',
        colorCode: '#e4f2e4',
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/32e18555e256404ccf843356995c369c/release_2.svg',
        colorCode: '#d2e5fd'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/490e88284cb783f89a0e32b69d6d58eb/release_3.svg',
        colorCode: '#ccf3ff'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/be5288dbcb459971ed83bb86d0afed73/release_4.svg',
        colorCode: '#fcedcc'
      },
    ],
  },
  {
    name: 'Closed',
    icons: [
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/36373de8fa9cd7cc3a1510a1321d8928/closed.svg',
        colorCode: '#d2e5fd',
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/f903085eaef00f1727650fbcb9da0c22/closed_2.svg',
        colorCode: '#eddadb'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/e8939d42f4a7777f26d43619fddb41ba/closed_3.svg',
        colorCode: '#e3e3e3'
      },
      {
        icon: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/3d1c605828d5aca2499b43933118dbe6/closed_4.svg',
        colorCode: '#ebd3ef'
      },
    ],
  },
];

export const defaultIcons = {
  project: 'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/449e15e1ab79c1f5a3195e687fda2a84/project_default_1.svg',
  projects: [
    'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/449e15e1ab79c1f5a3195e687fda2a84/project_default_1.svg',
    'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/32fd604a858617579c135d6164382cb0/project_default_2.svg',
    'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/3a13457347f73d3174410c31a119f897/project_default_3.svg',
    'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/0044707b7eff865bb45a7132997ae599/project_default_4.svg',
    'https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/resources/cb2b251e5a5131a8942deca4a0c582f9/project_default_5.svg',
  ],
};

export const companySizes = [
  {
    'display': '1 - 10',
    'value': 10
  },
  {
    'display': '11 - 20',
    'value': 20
  },
  {
    'display': '21 - 35',
    'value': 35
  },
  {
    'display': '36 - 50',
    'value': 50
  },
  {
    'display': '51 - 75',
    'value': 75
  },
  {
    'display': '76 - 100',
    'value': 100
  },
  {
    'display': '101 - 150',
    'value': 150
  },
  {
    'display': '151 - 200',
    'value': 200
  },
  {
    'display': '201 - 500',
    'value': 500
  },
  {
    'display': '501+',
    'value': 501
  }
];


export const routeLandingSeo: RouteSeoOrgDataLanding = {
  home: {
    seoTitle: 'XCORP | X Corporation | X Corp | Company Management System',
    seoImage: 'home.png',
    seoDescription: 'XCORP, a powerful corporation management system, support easy-to-use task management, project management, timesheet, work tracking, leave management, document management, OKR, Agile Scrum, Kanban, gantt, HR hiring, HR boarding and policy/benefit management.',
  },
  productLeave: {
    seoTitle: 'Leave Management',
    seoImage: 'leave-management.png',
    seoDescription: 'Help you and your employee easily manage time off and absences',
  },
  productWorkTracking: {
    seoTitle: 'Work Tracking',
    seoImage: 'work-tracking.png',
    seoDescription: 'Track employee daily progress the smart way',
  },
  productOkr: {
    seoTitle: 'OKR',
    seoImage: 'okr.png',
    seoDescription: 'xCorp OKR app manages Company objective, Group objective, Team objective, Employee objective and Key Result',
  },
  productTask: {
    seoTitle: 'Task Management',
    seoImage: 'task-management.png',
    seoDescription: 'XCORP implements task management tool for speeding agile project, allows teams to plan backlog tasks & track sprint boards, releases, milestones, roadmaps, epics and resources',
  },
  productTimesheet: {
    seoTitle: 'Timesheet',
    seoImage: 'timesheet.png',
    seoDescription: 'Track time from anywhere and anytime across devices, all data is synced online',
  },
  productDocument: {
    seoTitle: 'Document Management',
    seoImage: 'document.png',
    seoDescription: 'Reduce paper, track, manage and store company, project and HR documents',
  },
  productSlack: {
    seoTitle: 'Slack Integration',
    seoImage: 'integration.png',
    seoDescription: 'You can integrate xCorp with Slack and get user’s messages from xCorp Leave Management',
  },
  support: {
    seoTitle: 'Support',
    seoImage: 'document.png',
    seoDescription: 'Support',
  },
};

export const timeZoneResponse = {
  'countries': [
    {
      'code': 'AF',
      'name': 'Afghanistan',
      'timeZones': [
        'Asia/Kabul'
      ]
    },
    {
      'code': 'AL',
      'name': 'Albania',
      'timeZones': [
        'Europe/Tirane'
      ]
    },
    {
      'code': 'DZ',
      'name': 'Algeria',
      'timeZones': [
        'Africa/Algiers'
      ]
    },
    {
      'code': 'AS',
      'name': 'American Samoa',
      'timeZones': [
        'Pacific/Pago_Pago',
        'Pacific/Samoa',
        'US/Samoa'
      ]
    },
    {
      'code': 'AD',
      'name': 'Andorra',
      'timeZones': [
        'Europe/Andorra'
      ]
    },
    {
      'code': 'AO',
      'name': 'Angola',
      'timeZones': [
        'Africa/Luanda'
      ]
    },
    {
      'code': 'AI',
      'name': 'Anguilla',
      'timeZones': [
        'America/Anguilla'
      ]
    },
    {
      'code': 'AQ',
      'name': 'Antarctica',
      'timeZones': [
        'Antarctica/Casey',
        'Antarctica/Davis',
        'Antarctica/DumontDUrville',
        'Antarctica/Mawson',
        'Antarctica/McMurdo',
        'Antarctica/Palmer',
        'Antarctica/Rothera',
        'Antarctica/Syowa',
        'Antarctica/Troll',
        'Antarctica/Vostok'
      ]
    },
    {
      'code': 'AG',
      'name': 'Antigua & Barbuda',
      'timeZones': [
        'America/Antigua'
      ]
    },
    {
      'code': 'AR',
      'name': 'Argentina',
      'timeZones': [
        'America/Argentina/Buenos_Aires',
        'America/Argentina/Catamarca',
        'America/Argentina/ComodRivadavia',
        'America/Argentina/Cordoba',
        'America/Argentina/Jujuy',
        'America/Argentina/La_Rioja',
        'America/Argentina/Mendoza',
        'America/Argentina/Rio_Gallegos',
        'America/Argentina/Salta',
        'America/Argentina/San_Juan',
        'America/Argentina/San_Luis',
        'America/Argentina/Tucuman',
        'America/Argentina/Ushuaia',
        'America/Buenos_Aires',
        'America/Catamarca',
        'America/Cordoba',
        'America/Jujuy',
        'America/Mendoza',
        'America/Rosario'
      ]
    },
    {
      'code': 'AM',
      'name': 'Armenia',
      'timeZones': [
        'Asia/Yerevan'
      ]
    },
    {
      'code': 'AW',
      'name': 'Aruba',
      'timeZones': [
        'America/Aruba'
      ]
    },
    {
      'code': 'AU',
      'name': 'Australia',
      'timeZones': [
        'Antarctica/Macquarie',
        'Australia/ACT',
        'Australia/Adelaide',
        'Australia/Brisbane',
        'Australia/Broken_Hill',
        'Australia/Canberra',
        'Australia/Currie',
        'Australia/Darwin',
        'Australia/Eucla',
        'Australia/Hobart',
        'Australia/LHI',
        'Australia/Lindeman',
        'Australia/Lord_Howe',
        'Australia/Melbourne',
        'Australia/NSW',
        'Australia/North',
        'Australia/Perth',
        'Australia/Queensland',
        'Australia/South',
        'Australia/Sydney',
        'Australia/Tasmania',
        'Australia/Victoria',
        'Australia/West',
        'Australia/Yancowinna'
      ]
    },
    {
      'code': 'AT',
      'name': 'Austria',
      'timeZones': [
        'Europe/Vienna'
      ]
    },
    {
      'code': 'AZ',
      'name': 'Azerbaijan',
      'timeZones': [
        'Asia/Baku'
      ]
    },
    {
      'code': 'BS',
      'name': 'Bahamas',
      'timeZones': [
        'America/Nassau'
      ]
    },
    {
      'code': 'BH',
      'name': 'Bahrain',
      'timeZones': [
        'Asia/Bahrain'
      ]
    },
    {
      'code': 'BD',
      'name': 'Bangladesh',
      'timeZones': [
        'Asia/Dacca',
        'Asia/Dhaka'
      ]
    },
    {
      'code': 'BB',
      'name': 'Barbados',
      'timeZones': [
        'America/Barbados'
      ]
    },
    {
      'code': 'BY',
      'name': 'Belarus',
      'timeZones': [
        'Europe/Minsk'
      ]
    },
    {
      'code': 'BE',
      'name': 'Belgium',
      'timeZones': [
        'Europe/Brussels'
      ]
    },
    {
      'code': 'BZ',
      'name': 'Belize',
      'timeZones': [
        'America/Belize'
      ]
    },
    {
      'code': 'BJ',
      'name': 'Benin',
      'timeZones': [
        'Africa/Porto-Novo'
      ]
    },
    {
      'code': 'BM',
      'name': 'Bermuda',
      'timeZones': [
        'Atlantic/Bermuda'
      ]
    },
    {
      'code': 'BT',
      'name': 'Bhutan',
      'timeZones': [
        'Asia/Thimbu',
        'Asia/Thimphu'
      ]
    },
    {
      'code': 'BO',
      'name': 'Bolivia',
      'timeZones': [
        'America/La_Paz'
      ]
    },
    {
      'code': 'BA',
      'name': 'Bosnia & Herzegovina',
      'timeZones': [
        'Europe/Sarajevo'
      ]
    },
    {
      'code': 'BW',
      'name': 'Botswana',
      'timeZones': [
        'Africa/Gaborone'
      ]
    },
    {
      'code': 'BV',
      'name': 'Bouvet Island',
      'timeZones': [

      ]
    },
    {
      'code': 'BR',
      'name': 'Brazil',
      'timeZones': [
        'America/Araguaina',
        'America/Bahia',
        'America/Belem',
        'America/Boa_Vista',
        'America/Campo_Grande',
        'America/Cuiaba',
        'America/Eirunepe',
        'America/Fortaleza',
        'America/Maceio',
        'America/Manaus',
        'America/Noronha',
        'America/Porto_Acre',
        'America/Porto_Velho',
        'America/Recife',
        'America/Rio_Branco',
        'America/Santarem',
        'America/Sao_Paulo',
        'Brazil/Acre',
        'Brazil/DeNoronha',
        'Brazil/East',
        'Brazil/West'
      ]
    },
    {
      'code': 'IO',
      'name': 'British Indian Ocean Territory',
      'timeZones': [
        'Indian/Chagos'
      ]
    },
    {
      'code': 'VG',
      'name': 'British Virgin Islands',
      'timeZones': [
        'America/Tortola'
      ]
    },
    {
      'code': 'BN',
      'name': 'Brunei',
      'timeZones': [
        'Asia/Brunei'
      ]
    },
    {
      'code': 'BG',
      'name': 'Bulgaria',
      'timeZones': [
        'Europe/Sofia'
      ]
    },
    {
      'code': 'BF',
      'name': 'Burkina Faso',
      'timeZones': [
        'Africa/Ouagadougou'
      ]
    },
    {
      'code': 'BI',
      'name': 'Burundi',
      'timeZones': [
        'Africa/Bujumbura'
      ]
    },
    {
      'code': 'KH',
      'name': 'Cambodia',
      'timeZones': [
        'Asia/Phnom_Penh'
      ]
    },
    {
      'code': 'CM',
      'name': 'Cameroon',
      'timeZones': [
        'Africa/Douala'
      ]
    },
    {
      'code': 'CA',
      'name': 'Canada',
      'timeZones': [
        'America/Atikokan',
        'America/Blanc-Sablon',
        'America/Cambridge_Bay',
        'America/Coral_Harbour',
        'America/Creston',
        'America/Dawson',
        'America/Dawson_Creek',
        'America/Edmonton',
        'America/Fort_Nelson',
        'America/Glace_Bay',
        'America/Goose_Bay',
        'America/Halifax',
        'America/Inuvik',
        'America/Iqaluit',
        'America/Moncton',
        'America/Montreal',
        'America/Nipigon',
        'America/Pangnirtung',
        'America/Rainy_River',
        'America/Rankin_Inlet',
        'America/Regina',
        'America/Resolute',
        'America/St_Johns',
        'America/Swift_Current',
        'America/Thunder_Bay',
        'America/Toronto',
        'America/Vancouver',
        'America/Whitehorse',
        'America/Winnipeg',
        'America/Yellowknife',
        'Canada/Atlantic',
        'Canada/Central',
        'Canada/East-Saskatchewan',
        'Canada/Eastern',
        'Canada/Mountain',
        'Canada/Newfoundland',
        'Canada/Pacific',
        'Canada/Saskatchewan',
        'Canada/Yukon'
      ]
    },
    {
      'code': 'CV',
      'name': 'Cape Verde',
      'timeZones': [
        'Atlantic/Cape_Verde'
      ]
    },
    {
      'code': 'BQ',
      'name': 'Caribbean Netherlands',
      'timeZones': [
        'America/Kralendijk'
      ]
    },
    {
      'code': 'KY',
      'name': 'Cayman Islands',
      'timeZones': [
        'America/Cayman'
      ]
    },
    {
      'code': 'CF',
      'name': 'Central African Republic',
      'timeZones': [
        'Africa/Bangui'
      ]
    },
    {
      'code': 'TD',
      'name': 'Chad',
      'timeZones': [
        'Africa/Ndjamena'
      ]
    },
    {
      'code': 'CL',
      'name': 'Chile',
      'timeZones': [
        'America/Santiago',
        'Chile/Continental',
        'Chile/EasterIsland',
        'Pacific/Easter'
      ]
    },
    {
      'code': 'CN',
      'name': 'China',
      'timeZones': [
        'Asia/Chongqing',
        'Asia/Chungking',
        'Asia/Harbin',
        'Asia/Kashgar',
        'Asia/Shanghai',
        'Asia/Urumqi'
      ]
    },
    {
      'code': 'CX',
      'name': 'Christmas Island',
      'timeZones': [
        'Indian/Christmas'
      ]
    },
    {
      'code': 'CC',
      'name': 'Cocos (Keeling) Islands',
      'timeZones': [
        'Indian/Cocos'
      ]
    },
    {
      'code': 'CO',
      'name': 'Colombia',
      'timeZones': [
        'America/Bogota'
      ]
    },
    {
      'code': 'KM',
      'name': 'Comoros',
      'timeZones': [
        'Indian/Comoro'
      ]
    },
    {
      'code': 'CG',
      'name': 'Congo - Brazzaville',
      'timeZones': [
        'Africa/Brazzaville'
      ]
    },
    {
      'code': 'CD',
      'name': 'Congo - Kinshasa',
      'timeZones': [
        'Africa/Kinshasa',
        'Africa/Lubumbashi'
      ]
    },
    {
      'code': 'CK',
      'name': 'Cook Islands',
      'timeZones': [
        'Pacific/Rarotonga'
      ]
    },
    {
      'code': 'CR',
      'name': 'Costa Rica',
      'timeZones': [
        'America/Costa_Rica'
      ]
    },
    {
      'code': 'HR',
      'name': 'Croatia',
      'timeZones': [
        'Europe/Zagreb'
      ]
    },
    {
      'code': 'CU',
      'name': 'Cuba',
      'timeZones': [
        'America/Havana'
      ]
    },
    {
      'code': 'CW',
      'name': 'Curaçao',
      'timeZones': [
        'America/Curacao'
      ]
    },
    {
      'code': 'CY',
      'name': 'Cyprus',
      'timeZones': [
        'Asia/Famagusta',
        'Asia/Nicosia',
        'Europe/Nicosia'
      ]
    },
    {
      'code': 'CZ',
      'name': 'Czechia',
      'timeZones': [
        'Europe/Prague'
      ]
    },
    {
      'code': 'CI',
      'name': 'Côte d’Ivoire',
      'timeZones': [
        'Africa/Abidjan',
        'Africa/Timbuktu'
      ]
    },
    {
      'code': 'DK',
      'name': 'Denmark',
      'timeZones': [
        'Europe/Copenhagen'
      ]
    },
    {
      'code': 'DJ',
      'name': 'Djibouti',
      'timeZones': [
        'Africa/Djibouti'
      ]
    },
    {
      'code': 'DM',
      'name': 'Dominica',
      'timeZones': [
        'America/Dominica'
      ]
    },
    {
      'code': 'DO',
      'name': 'Dominican Republic',
      'timeZones': [
        'America/Santo_Domingo'
      ]
    },
    {
      'code': 'EC',
      'name': 'Ecuador',
      'timeZones': [
        'America/Guayaquil',
        'Pacific/Galapagos'
      ]
    },
    {
      'code': 'EG',
      'name': 'Egypt',
      'timeZones': [
        'Africa/Cairo'
      ]
    },
    {
      'code': 'SV',
      'name': 'El Salvador',
      'timeZones': [
        'America/El_Salvador'
      ]
    },
    {
      'code': 'GQ',
      'name': 'Equatorial Guinea',
      'timeZones': [
        'Africa/Malabo'
      ]
    },
    {
      'code': 'ER',
      'name': 'Eritrea',
      'timeZones': [
        'Africa/Asmara',
        'Africa/Asmera'
      ]
    },
    {
      'code': 'EE',
      'name': 'Estonia',
      'timeZones': [
        'Europe/Tallinn'
      ]
    },
    {
      'code': 'SZ',
      'name': 'Eswatini',
      'timeZones': [
        'Africa/Mbabane'
      ]
    },
    {
      'code': 'ET',
      'name': 'Ethiopia',
      'timeZones': [
        'Africa/Addis_Ababa'
      ]
    },
    {
      'code': 'FK',
      'name': 'Falkland Islands',
      'timeZones': [
        'Atlantic/Stanley'
      ]
    },
    {
      'code': 'FO',
      'name': 'Faroe Islands',
      'timeZones': [
        'Atlantic/Faeroe',
        'Atlantic/Faroe'
      ]
    },
    {
      'code': 'FJ',
      'name': 'Fiji',
      'timeZones': [
        'Pacific/Fiji'
      ]
    },
    {
      'code': 'FI',
      'name': 'Finland',
      'timeZones': [
        'Europe/Helsinki'
      ]
    },
    {
      'code': 'FR',
      'name': 'France',
      'timeZones': [
        'Europe/Paris'
      ]
    },
    {
      'code': 'GF',
      'name': 'French Guiana',
      'timeZones': [
        'America/Cayenne'
      ]
    },
    {
      'code': 'PF',
      'name': 'French Polynesia',
      'timeZones': [
        'Pacific/Gambier',
        'Pacific/Marquesas',
        'Pacific/Tahiti'
      ]
    },
    {
      'code': 'TF',
      'name': 'French Southern Territories',
      'timeZones': [
        'Indian/Kerguelen'
      ]
    },
    {
      'code': 'GA',
      'name': 'Gabon',
      'timeZones': [
        'Africa/Libreville'
      ]
    },
    {
      'code': 'GM',
      'name': 'Gambia',
      'timeZones': [
        'Africa/Banjul'
      ]
    },
    {
      'code': 'GE',
      'name': 'Georgia',
      'timeZones': [
        'Asia/Tbilisi'
      ]
    },
    {
      'code': 'DE',
      'name': 'Germany',
      'timeZones': [
        'Europe/Berlin',
        'Europe/Busingen'
      ]
    },
    {
      'code': 'GH',
      'name': 'Ghana',
      'timeZones': [
        'Africa/Accra'
      ]
    },
    {
      'code': 'GI',
      'name': 'Gibraltar',
      'timeZones': [
        'Europe/Gibraltar'
      ]
    },
    {
      'code': 'GR',
      'name': 'Greece',
      'timeZones': [
        'Europe/Athens'
      ]
    },
    {
      'code': 'GL',
      'name': 'Greenland',
      'timeZones': [
        'America/Danmarkshavn',
        'America/Godthab',
        'America/Scoresbysund',
        'America/Thule'
      ]
    },
    {
      'code': 'GD',
      'name': 'Grenada',
      'timeZones': [
        'America/Grenada'
      ]
    },
    {
      'code': 'GP',
      'name': 'Guadeloupe',
      'timeZones': [
        'America/Guadeloupe'
      ]
    },
    {
      'code': 'GU',
      'name': 'Guam',
      'timeZones': [
        'Pacific/Guam'
      ]
    },
    {
      'code': 'GT',
      'name': 'Guatemala',
      'timeZones': [
        'America/Guatemala'
      ]
    },
    {
      'code': 'GG',
      'name': 'Guernsey',
      'timeZones': [
        'Europe/Guernsey'
      ]
    },
    {
      'code': 'GN',
      'name': 'Guinea',
      'timeZones': [
        'Africa/Conakry'
      ]
    },
    {
      'code': 'GW',
      'name': 'Guinea-Bissau',
      'timeZones': [
        'Africa/Bissau'
      ]
    },
    {
      'code': 'GY',
      'name': 'Guyana',
      'timeZones': [
        'America/Guyana'
      ]
    },
    {
      'code': 'HT',
      'name': 'Haiti',
      'timeZones': [
        'America/Port-au-Prince'
      ]
    },
    {
      'code': 'HM',
      'name': 'Heard & McDonald Islands',
      'timeZones': [

      ]
    },
    {
      'code': 'HN',
      'name': 'Honduras',
      'timeZones': [
        'America/Tegucigalpa'
      ]
    },
    {
      'code': 'HK',
      'name': 'Hong Kong SAR China',
      'timeZones': [
        'Asia/Hong_Kong'
      ]
    },
    {
      'code': 'HU',
      'name': 'Hungary',
      'timeZones': [
        'Europe/Budapest'
      ]
    },
    {
      'code': 'IS',
      'name': 'Iceland',
      'timeZones': [
        'Atlantic/Reykjavik'
      ]
    },
    {
      'code': 'IN',
      'name': 'India',
      'timeZones': [
        'Asia/Calcutta',
        'Asia/Kolkata'
      ]
    },
    {
      'code': 'ID',
      'name': 'Indonesia',
      'timeZones': [
        'Asia/Jakarta',
        'Asia/Jayapura',
        'Asia/Makassar',
        'Asia/Pontianak',
        'Asia/Ujung_Pandang'
      ]
    },
    {
      'code': 'IR',
      'name': 'Iran',
      'timeZones': [
        'Asia/Tehran'
      ]
    },
    {
      'code': 'IQ',
      'name': 'Iraq',
      'timeZones': [
        'Asia/Baghdad'
      ]
    },
    {
      'code': 'IE',
      'name': 'Ireland',
      'timeZones': [
        'Europe/Dublin'
      ]
    },
    {
      'code': 'IM',
      'name': 'Isle of Man',
      'timeZones': [
        'Europe/Isle_of_Man'
      ]
    },
    {
      'code': 'IL',
      'name': 'Israel',
      'timeZones': [
        'Asia/Jerusalem',
        'Asia/Tel_Aviv'
      ]
    },
    {
      'code': 'IT',
      'name': 'Italy',
      'timeZones': [
        'Europe/Rome'
      ]
    },
    {
      'code': 'JM',
      'name': 'Jamaica',
      'timeZones': [
        'America/Jamaica'
      ]
    },
    {
      'code': 'JP',
      'name': 'Japan',
      'timeZones': [
        'Asia/Tokyo'
      ]
    },
    {
      'code': 'JE',
      'name': 'Jersey',
      'timeZones': [
        'Europe/Jersey'
      ]
    },
    {
      'code': 'JO',
      'name': 'Jordan',
      'timeZones': [
        'Asia/Amman'
      ]
    },
    {
      'code': 'KZ',
      'name': 'Kazakhstan',
      'timeZones': [
        'Asia/Almaty',
        'Asia/Aqtau',
        'Asia/Aqtobe',
        'Asia/Atyrau',
        'Asia/Oral',
        'Asia/Qyzylorda'
      ]
    },
    {
      'code': 'KE',
      'name': 'Kenya',
      'timeZones': [
        'Africa/Nairobi'
      ]
    },
    {
      'code': 'KI',
      'name': 'Kiribati',
      'timeZones': [
        'Pacific/Enderbury',
        'Pacific/Kiritimati',
        'Pacific/Tarawa'
      ]
    },
    {
      'code': 'KW',
      'name': 'Kuwait',
      'timeZones': [
        'Asia/Kuwait'
      ]
    },
    {
      'code': 'KG',
      'name': 'Kyrgyzstan',
      'timeZones': [
        'Asia/Bishkek'
      ]
    },
    {
      'code': 'LA',
      'name': 'Laos',
      'timeZones': [
        'Asia/Vientiane'
      ]
    },
    {
      'code': 'LV',
      'name': 'Latvia',
      'timeZones': [
        'Europe/Riga'
      ]
    },
    {
      'code': 'LB',
      'name': 'Lebanon',
      'timeZones': [
        'Asia/Beirut'
      ]
    },
    {
      'code': 'LS',
      'name': 'Lesotho',
      'timeZones': [
        'Africa/Maseru'
      ]
    },
    {
      'code': 'LR',
      'name': 'Liberia',
      'timeZones': [
        'Africa/Monrovia'
      ]
    },
    {
      'code': 'LY',
      'name': 'Libya',
      'timeZones': [
        'Africa/Tripoli'
      ]
    },
    {
      'code': 'LI',
      'name': 'Liechtenstein',
      'timeZones': [
        'Europe/Vaduz'
      ]
    },
    {
      'code': 'LT',
      'name': 'Lithuania',
      'timeZones': [
        'Europe/Vilnius'
      ]
    },
    {
      'code': 'LU',
      'name': 'Luxembourg',
      'timeZones': [
        'Europe/Luxembourg'
      ]
    },
    {
      'code': 'MO',
      'name': 'Macao SAR China',
      'timeZones': [
        'Asia/Macao',
        'Asia/Macau'
      ]
    },
    {
      'code': 'MG',
      'name': 'Madagascar',
      'timeZones': [
        'Indian/Antananarivo'
      ]
    },
    {
      'code': 'MW',
      'name': 'Malawi',
      'timeZones': [
        'Africa/Blantyre'
      ]
    },
    {
      'code': 'MY',
      'name': 'Malaysia',
      'timeZones': [
        'Asia/Kuala_Lumpur',
        'Asia/Kuching'
      ]
    },
    {
      'code': 'MV',
      'name': 'Maldives',
      'timeZones': [
        'Indian/Maldives'
      ]
    },
    {
      'code': 'ML',
      'name': 'Mali',
      'timeZones': [
        'Africa/Bamako'
      ]
    },
    {
      'code': 'MT',
      'name': 'Malta',
      'timeZones': [
        'Europe/Malta'
      ]
    },
    {
      'code': 'MH',
      'name': 'Marshall Islands',
      'timeZones': [
        'Pacific/Kwajalein',
        'Pacific/Majuro'
      ]
    },
    {
      'code': 'MQ',
      'name': 'Martinique',
      'timeZones': [
        'America/Martinique'
      ]
    },
    {
      'code': 'MR',
      'name': 'Mauritania',
      'timeZones': [
        'Africa/Nouakchott'
      ]
    },
    {
      'code': 'MU',
      'name': 'Mauritius',
      'timeZones': [
        'Indian/Mauritius'
      ]
    },
    {
      'code': 'YT',
      'name': 'Mayotte',
      'timeZones': [
        'Indian/Mayotte'
      ]
    },
    {
      'code': 'MX',
      'name': 'Mexico',
      'timeZones': [
        'America/Bahia_Banderas',
        'America/Cancun',
        'America/Chihuahua',
        'America/Ensenada',
        'America/Hermosillo',
        'America/Matamoros',
        'America/Mazatlan',
        'America/Merida',
        'America/Mexico_City',
        'America/Monterrey',
        'America/Ojinaga',
        'America/Santa_Isabel',
        'America/Tijuana',
        'Mexico/BajaNorte',
        'Mexico/BajaSur',
        'Mexico/General'
      ]
    },
    {
      'code': 'FM',
      'name': 'Micronesia',
      'timeZones': [
        'Pacific/Chuuk',
        'Pacific/Kosrae',
        'Pacific/Pohnpei',
        'Pacific/Ponape',
        'Pacific/Truk',
        'Pacific/Yap'
      ]
    },
    {
      'code': 'MD',
      'name': 'Moldova',
      'timeZones': [
        'Europe/Chisinau',
        'Europe/Tiraspol'
      ]
    },
    {
      'code': 'MC',
      'name': 'Monaco',
      'timeZones': [
        'Europe/Monaco'
      ]
    },
    {
      'code': 'MN',
      'name': 'Mongolia',
      'timeZones': [
        'Asia/Choibalsan',
        'Asia/Hovd',
        'Asia/Ulaanbaatar',
        'Asia/Ulan_Bator'
      ]
    },
    {
      'code': 'ME',
      'name': 'Montenegro',
      'timeZones': [
        'Europe/Podgorica'
      ]
    },
    {
      'code': 'MS',
      'name': 'Montserrat',
      'timeZones': [
        'America/Montserrat'
      ]
    },
    {
      'code': 'MA',
      'name': 'Morocco',
      'timeZones': [
        'Africa/Casablanca'
      ]
    },
    {
      'code': 'MZ',
      'name': 'Mozambique',
      'timeZones': [
        'Africa/Maputo'
      ]
    },
    {
      'code': 'MM',
      'name': 'Myanmar (Burma)',
      'timeZones': [
        'Asia/Rangoon',
        'Asia/Yangon'
      ]
    },
    {
      'code': 'NA',
      'name': 'Namibia',
      'timeZones': [
        'Africa/Windhoek'
      ]
    },
    {
      'code': 'NR',
      'name': 'Nauru',
      'timeZones': [
        'Pacific/Nauru'
      ]
    },
    {
      'code': 'NP',
      'name': 'Nepal',
      'timeZones': [
        'Asia/Kathmandu',
        'Asia/Katmandu'
      ]
    },
    {
      'code': 'NL',
      'name': 'Netherlands',
      'timeZones': [
        'Europe/Amsterdam'
      ]
    },
    {
      'code': 'NC',
      'name': 'New Caledonia',
      'timeZones': [
        'Pacific/Noumea'
      ]
    },
    {
      'code': 'NZ',
      'name': 'New Zealand',
      'timeZones': [
        'Antarctica/South_Pole',
        'Pacific/Auckland',
        'Pacific/Chatham'
      ]
    },
    {
      'code': 'NI',
      'name': 'Nicaragua',
      'timeZones': [
        'America/Managua'
      ]
    },
    {
      'code': 'NE',
      'name': 'Niger',
      'timeZones': [
        'Africa/Niamey'
      ]
    },
    {
      'code': 'NG',
      'name': 'Nigeria',
      'timeZones': [
        'Africa/Lagos'
      ]
    },
    {
      'code': 'NU',
      'name': 'Niue',
      'timeZones': [
        'Pacific/Niue'
      ]
    },
    {
      'code': 'NF',
      'name': 'Norfolk Island',
      'timeZones': [
        'Pacific/Norfolk'
      ]
    },
    {
      'code': 'KP',
      'name': 'North Korea',
      'timeZones': [
        'Asia/Pyongyang'
      ]
    },
    {
      'code': 'MK',
      'name': 'North Macedonia',
      'timeZones': [
        'Europe/Skopje'
      ]
    },
    {
      'code': 'MP',
      'name': 'Northern Mariana Islands',
      'timeZones': [
        'Pacific/Saipan'
      ]
    },
    {
      'code': 'NO',
      'name': 'Norway',
      'timeZones': [
        'Atlantic/Jan_Mayen',
        'Europe/Oslo'
      ]
    },
    {
      'code': 'OM',
      'name': 'Oman',
      'timeZones': [
        'Asia/Muscat'
      ]
    },
    {
      'code': 'PK',
      'name': 'Pakistan',
      'timeZones': [
        'Asia/Karachi'
      ]
    },
    {
      'code': 'PW',
      'name': 'Palau',
      'timeZones': [
        'Pacific/Palau'
      ]
    },
    {
      'code': 'PS',
      'name': 'Palestinian Territories',
      'timeZones': [
        'Asia/Gaza',
        'Asia/Hebron'
      ]
    },
    {
      'code': 'PA',
      'name': 'Panama',
      'timeZones': [
        'America/Panama'
      ]
    },
    {
      'code': 'PG',
      'name': 'Papua New Guinea',
      'timeZones': [
        'Pacific/Bougainville',
        'Pacific/Port_Moresby'
      ]
    },
    {
      'code': 'PY',
      'name': 'Paraguay',
      'timeZones': [
        'America/Asuncion'
      ]
    },
    {
      'code': 'PE',
      'name': 'Peru',
      'timeZones': [
        'America/Lima'
      ]
    },
    {
      'code': 'PH',
      'name': 'Philippines',
      'timeZones': [
        'Asia/Manila'
      ]
    },
    {
      'code': 'PN',
      'name': 'Pitcairn Islands',
      'timeZones': [
        'Pacific/Pitcairn'
      ]
    },
    {
      'code': 'PL',
      'name': 'Poland',
      'timeZones': [
        'Europe/Warsaw'
      ]
    },
    {
      'code': 'PT',
      'name': 'Portugal',
      'timeZones': [
        'Atlantic/Azores',
        'Atlantic/Madeira',
        'Europe/Lisbon'
      ]
    },
    {
      'code': 'PR',
      'name': 'Puerto Rico',
      'timeZones': [
        'America/Puerto_Rico'
      ]
    },
    {
      'code': 'QA',
      'name': 'Qatar',
      'timeZones': [
        'Asia/Qatar'
      ]
    },
    {
      'code': 'RO',
      'name': 'Romania',
      'timeZones': [
        'Europe/Bucharest'
      ]
    },
    {
      'code': 'RU',
      'name': 'Russia',
      'timeZones': [
        'Asia/Anadyr',
        'Asia/Barnaul',
        'Asia/Chita',
        'Asia/Irkutsk',
        'Asia/Kamchatka',
        'Asia/Khandyga',
        'Asia/Krasnoyarsk',
        'Asia/Magadan',
        'Asia/Novokuznetsk',
        'Asia/Novosibirsk',
        'Asia/Omsk',
        'Asia/Sakhalin',
        'Asia/Srednekolymsk',
        'Asia/Tomsk',
        'Asia/Ust-Nera',
        'Asia/Vladivostok',
        'Asia/Yakutsk',
        'Asia/Yekaterinburg',
        'Europe/Astrakhan',
        'Europe/Kaliningrad',
        'Europe/Kirov',
        'Europe/Moscow',
        'Europe/Samara',
        'Europe/Saratov',
        'Europe/Ulyanovsk',
        'Europe/Volgograd'
      ]
    },
    {
      'code': 'RW',
      'name': 'Rwanda',
      'timeZones': [
        'Africa/Kigali'
      ]
    },
    {
      'code': 'RE',
      'name': 'Réunion',
      'timeZones': [
        'Indian/Reunion'
      ]
    },
    {
      'code': 'WS',
      'name': 'Samoa',
      'timeZones': [
        'Pacific/Apia'
      ]
    },
    {
      'code': 'SM',
      'name': 'San Marino',
      'timeZones': [
        'Europe/San_Marino'
      ]
    },
    {
      'code': 'SA',
      'name': 'Saudi Arabia',
      'timeZones': [
        'Asia/Riyadh'
      ]
    },
    {
      'code': 'SN',
      'name': 'Senegal',
      'timeZones': [
        'Africa/Dakar'
      ]
    },
    {
      'code': 'RS',
      'name': 'Serbia',
      'timeZones': [
        'Europe/Belgrade'
      ]
    },
    {
      'code': 'SC',
      'name': 'Seychelles',
      'timeZones': [
        'Indian/Mahe'
      ]
    },
    {
      'code': 'SL',
      'name': 'Sierra Leone',
      'timeZones': [
        'Africa/Freetown'
      ]
    },
    {
      'code': 'SG',
      'name': 'Singapore',
      'timeZones': [
        'Asia/Singapore'
      ]
    },
    {
      'code': 'SX',
      'name': 'Sint Maarten',
      'timeZones': [
        'America/Lower_Princes'
      ]
    },
    {
      'code': 'SK',
      'name': 'Slovakia',
      'timeZones': [
        'Europe/Bratislava'
      ]
    },
    {
      'code': 'SI',
      'name': 'Slovenia',
      'timeZones': [
        'Europe/Ljubljana'
      ]
    },
    {
      'code': 'SB',
      'name': 'Solomon Islands',
      'timeZones': [
        'Pacific/Guadalcanal'
      ]
    },
    {
      'code': 'SO',
      'name': 'Somalia',
      'timeZones': [
        'Africa/Mogadishu'
      ]
    },
    {
      'code': 'ZA',
      'name': 'South Africa',
      'timeZones': [
        'Africa/Johannesburg'
      ]
    },
    {
      'code': 'GS',
      'name': 'South Georgia & South Sandwich Islands',
      'timeZones': [
        'Atlantic/South_Georgia'
      ]
    },
    {
      'code': 'KR',
      'name': 'South Korea',
      'timeZones': [
        'Asia/Seoul'
      ]
    },
    {
      'code': 'SS',
      'name': 'South Sudan',
      'timeZones': [
        'Africa/Juba'
      ]
    },
    {
      'code': 'ES',
      'name': 'Spain',
      'timeZones': [
        'Africa/Ceuta',
        'Atlantic/Canary',
        'Europe/Madrid'
      ]
    },
    {
      'code': 'LK',
      'name': 'Sri Lanka',
      'timeZones': [
        'Asia/Colombo'
      ]
    },
    {
      'code': 'BL',
      'name': 'St. Barthélemy',
      'timeZones': [
        'America/St_Barthelemy'
      ]
    },
    {
      'code': 'SH',
      'name': 'St. Helena',
      'timeZones': [
        'Atlantic/St_Helena'
      ]
    },
    {
      'code': 'KN',
      'name': 'St. Kitts & Nevis',
      'timeZones': [
        'America/St_Kitts'
      ]
    },
    {
      'code': 'LC',
      'name': 'St. Lucia',
      'timeZones': [
        'America/St_Lucia'
      ]
    },
    {
      'code': 'MF',
      'name': 'St. Martin',
      'timeZones': [
        'America/Marigot'
      ]
    },
    {
      'code': 'PM',
      'name': 'St. Pierre & Miquelon',
      'timeZones': [
        'America/Miquelon'
      ]
    },
    {
      'code': 'VC',
      'name': 'St. Vincent & Grenadines',
      'timeZones': [
        'America/St_Vincent'
      ]
    },
    {
      'code': 'SD',
      'name': 'Sudan',
      'timeZones': [
        'Africa/Khartoum'
      ]
    },
    {
      'code': 'SR',
      'name': 'Suriname',
      'timeZones': [
        'America/Paramaribo'
      ]
    },
    {
      'code': 'SJ',
      'name': 'Svalbard & Jan Mayen',
      'timeZones': [
        'Arctic/Longyearbyen'
      ]
    },
    {
      'code': 'SE',
      'name': 'Sweden',
      'timeZones': [
        'Europe/Stockholm'
      ]
    },
    {
      'code': 'CH',
      'name': 'Switzerland',
      'timeZones': [
        'Europe/Zurich'
      ]
    },
    {
      'code': 'SY',
      'name': 'Syria',
      'timeZones': [
        'Asia/Damascus'
      ]
    },
    {
      'code': 'ST',
      'name': 'São Tomé & Príncipe',
      'timeZones': [
        'Africa/Sao_Tome'
      ]
    },
    {
      'code': 'TW',
      'name': 'Taiwan',
      'timeZones': [
        'Asia/Taipei'
      ]
    },
    {
      'code': 'TJ',
      'name': 'Tajikistan',
      'timeZones': [
        'Asia/Dushanbe'
      ]
    },
    {
      'code': 'TZ',
      'name': 'Tanzania',
      'timeZones': [
        'Africa/Dar_es_Salaam'
      ]
    },
    {
      'code': 'TH',
      'name': 'Thailand',
      'timeZones': [
        'Asia/Bangkok'
      ]
    },
    {
      'code': 'TL',
      'name': 'Timor-Leste',
      'timeZones': [
        'Asia/Dili'
      ]
    },
    {
      'code': 'TG',
      'name': 'Togo',
      'timeZones': [
        'Africa/Lome'
      ]
    },
    {
      'code': 'TK',
      'name': 'Tokelau',
      'timeZones': [
        'Pacific/Fakaofo'
      ]
    },
    {
      'code': 'TO',
      'name': 'Tonga',
      'timeZones': [
        'Pacific/Tongatapu'
      ]
    },
    {
      'code': 'TT',
      'name': 'Trinidad & Tobago',
      'timeZones': [
        'America/Port_of_Spain',
        'America/Virgin'
      ]
    },
    {
      'code': 'TN',
      'name': 'Tunisia',
      'timeZones': [
        'Africa/Tunis'
      ]
    },
    {
      'code': 'TR',
      'name': 'Turkey',
      'timeZones': [
        'Asia/Istanbul',
        'Europe/Istanbul'
      ]
    },
    {
      'code': 'TM',
      'name': 'Turkmenistan',
      'timeZones': [
        'Asia/Ashgabat',
        'Asia/Ashkhabad'
      ]
    },
    {
      'code': 'TC',
      'name': 'Turks & Caicos Islands',
      'timeZones': [
        'America/Grand_Turk'
      ]
    },
    {
      'code': 'TV',
      'name': 'Tuvalu',
      'timeZones': [
        'Pacific/Funafuti'
      ]
    },
    {
      'code': 'UM',
      'name': 'U.S. Outlying Islands',
      'timeZones': [
        'Pacific/Johnston',
        'Pacific/Midway',
        'Pacific/Wake'
      ]
    },
    {
      'code': 'VI',
      'name': 'U.S. Virgin Islands',
      'timeZones': [
        'America/St_Thomas'
      ]
    },
    {
      'code': 'UG',
      'name': 'Uganda',
      'timeZones': [
        'Africa/Kampala'
      ]
    },
    {
      'code': 'UA',
      'name': 'Ukraine',
      'timeZones': [
        'Europe/Kiev',
        'Europe/Simferopol',
        'Europe/Uzhgorod',
        'Europe/Zaporozhye'
      ]
    },
    {
      'code': 'AE',
      'name': 'United Arab Emirates',
      'timeZones': [
        'Asia/Dubai'
      ]
    },
    {
      'code': 'GB',
      'name': 'United Kingdom',
      'timeZones': [
        'Europe/Belfast',
        'Europe/London'
      ]
    },
    {
      'code': 'US',
      'name': 'United States',
      'timeZones': [
        'America/Adak',
        'America/Anchorage',
        'America/Atka',
        'America/Boise',
        'America/Chicago',
        'America/Denver',
        'America/Detroit',
        'America/Fort_Wayne',
        'America/Indiana/Indianapolis',
        'America/Indiana/Knox',
        'America/Indiana/Marengo',
        'America/Indiana/Petersburg',
        'America/Indiana/Tell_City',
        'America/Indiana/Vevay',
        'America/Indiana/Vincennes',
        'America/Indiana/Winamac',
        'America/Indianapolis',
        'America/Juneau',
        'America/Kentucky/Louisville',
        'America/Kentucky/Monticello',
        'America/Knox_IN',
        'America/Los_Angeles',
        'America/Louisville',
        'America/Menominee',
        'America/Metlakatla',
        'America/New_York',
        'America/Nome',
        'America/North_Dakota/Beulah',
        'America/North_Dakota/Center',
        'America/North_Dakota/New_Salem',
        'America/Phoenix',
        'America/Shiprock',
        'America/Sitka',
        'America/Yakutat',
        'Pacific/Honolulu',
        'US/Alaska',
        'US/Aleutian',
        'US/Arizona',
        'US/Central',
        'US/East-Indiana',
        'US/Eastern',
        'US/Hawaii',
        'US/Indiana-Starke',
        'US/Michigan',
        'US/Mountain',
        'US/Pacific',
        'US/Pacific-New'
      ]
    },
    {
      'code': 'UY',
      'name': 'Uruguay',
      'timeZones': [
        'America/Montevideo'
      ]
    },
    {
      'code': 'UZ',
      'name': 'Uzbekistan',
      'timeZones': [
        'Asia/Samarkand',
        'Asia/Tashkent'
      ]
    },
    {
      'code': 'VU',
      'name': 'Vanuatu',
      'timeZones': [
        'Pacific/Efate'
      ]
    },
    {
      'code': 'VA',
      'name': 'Vatican City',
      'timeZones': [
        'Europe/Vatican'
      ]
    },
    {
      'code': 'VE',
      'name': 'Venezuela',
      'timeZones': [
        'America/Caracas'
      ]
    },
    {
      'code': 'VN',
      'name': 'Vietnam',
      'timeZones': [
        'Asia/Ho_Chi_Minh',
        'Asia/Saigon'
      ]
    },
    {
      'code': 'WF',
      'name': 'Wallis & Futuna',
      'timeZones': [
        'Pacific/Wallis'
      ]
    },
    {
      'code': 'EH',
      'name': 'Western Sahara',
      'timeZones': [
        'Africa/El_Aaiun'
      ]
    },
    {
      'code': 'YE',
      'name': 'Yemen',
      'timeZones': [
        'Asia/Aden'
      ]
    },
    {
      'code': 'ZM',
      'name': 'Zambia',
      'timeZones': [
        'Africa/Lusaka'
      ]
    },
    {
      'code': 'ZW',
      'name': 'Zimbabwe',
      'timeZones': [
        'Africa/Harare'
      ]
    },
    {
      'code': 'AX',
      'name': 'Åland Islands',
      'timeZones': [
        'Europe/Mariehamn'
      ]
    }
  ],
  'allTimeZones': [
    'Africa/Abidjan',
    'Africa/Accra',
    'Africa/Addis_Ababa',
    'Africa/Algiers',
    'Africa/Asmara',
    'Africa/Asmera',
    'Africa/Bamako',
    'Africa/Bangui',
    'Africa/Banjul',
    'Africa/Bissau',
    'Africa/Blantyre',
    'Africa/Brazzaville',
    'Africa/Bujumbura',
    'Africa/Cairo',
    'Africa/Casablanca',
    'Africa/Ceuta',
    'Africa/Conakry',
    'Africa/Dakar',
    'Africa/Dar_es_Salaam',
    'Africa/Djibouti',
    'Africa/Douala',
    'Africa/El_Aaiun',
    'Africa/Freetown',
    'Africa/Gaborone',
    'Africa/Harare',
    'Africa/Johannesburg',
    'Africa/Juba',
    'Africa/Kampala',
    'Africa/Khartoum',
    'Africa/Kigali',
    'Africa/Kinshasa',
    'Africa/Lagos',
    'Africa/Libreville',
    'Africa/Lome',
    'Africa/Luanda',
    'Africa/Lubumbashi',
    'Africa/Lusaka',
    'Africa/Malabo',
    'Africa/Maputo',
    'Africa/Maseru',
    'Africa/Mbabane',
    'Africa/Mogadishu',
    'Africa/Monrovia',
    'Africa/Nairobi',
    'Africa/Ndjamena',
    'Africa/Niamey',
    'Africa/Nouakchott',
    'Africa/Ouagadougou',
    'Africa/Porto-Novo',
    'Africa/Sao_Tome',
    'Africa/Timbuktu',
    'Africa/Tripoli',
    'Africa/Tunis',
    'Africa/Windhoek',
    'America/Adak',
    'America/Anchorage',
    'America/Anguilla',
    'America/Antigua',
    'America/Araguaina',
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Catamarca',
    'America/Argentina/ComodRivadavia',
    'America/Argentina/Cordoba',
    'America/Argentina/Jujuy',
    'America/Argentina/La_Rioja',
    'America/Argentina/Mendoza',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Salta',
    'America/Argentina/San_Juan',
    'America/Argentina/San_Luis',
    'America/Argentina/Tucuman',
    'America/Argentina/Ushuaia',
    'America/Aruba',
    'America/Asuncion',
    'America/Atikokan',
    'America/Atka',
    'America/Bahia',
    'America/Bahia_Banderas',
    'America/Barbados',
    'America/Belem',
    'America/Belize',
    'America/Blanc-Sablon',
    'America/Boa_Vista',
    'America/Bogota',
    'America/Boise',
    'America/Buenos_Aires',
    'America/Cambridge_Bay',
    'America/Campo_Grande',
    'America/Cancun',
    'America/Caracas',
    'America/Catamarca',
    'America/Cayenne',
    'America/Cayman',
    'America/Chicago',
    'America/Chihuahua',
    'America/Coral_Harbour',
    'America/Cordoba',
    'America/Costa_Rica',
    'America/Creston',
    'America/Cuiaba',
    'America/Curacao',
    'America/Danmarkshavn',
    'America/Dawson',
    'America/Dawson_Creek',
    'America/Denver',
    'America/Detroit',
    'America/Dominica',
    'America/Edmonton',
    'America/Eirunepe',
    'America/El_Salvador',
    'America/Ensenada',
    'America/Fort_Nelson',
    'America/Fort_Wayne',
    'America/Fortaleza',
    'America/Glace_Bay',
    'America/Godthab',
    'America/Goose_Bay',
    'America/Grand_Turk',
    'America/Grenada',
    'America/Guadeloupe',
    'America/Guatemala',
    'America/Guayaquil',
    'America/Guyana',
    'America/Halifax',
    'America/Havana',
    'America/Hermosillo',
    'America/Indiana/Indianapolis',
    'America/Indiana/Knox',
    'America/Indiana/Marengo',
    'America/Indiana/Petersburg',
    'America/Indiana/Tell_City',
    'America/Indiana/Vevay',
    'America/Indiana/Vincennes',
    'America/Indiana/Winamac',
    'America/Indianapolis',
    'America/Inuvik',
    'America/Iqaluit',
    'America/Jamaica',
    'America/Jujuy',
    'America/Juneau',
    'America/Kentucky/Louisville',
    'America/Kentucky/Monticello',
    'America/Knox_IN',
    'America/Kralendijk',
    'America/La_Paz',
    'America/Lima',
    'America/Los_Angeles',
    'America/Louisville',
    'America/Lower_Princes',
    'America/Maceio',
    'America/Managua',
    'America/Manaus',
    'America/Marigot',
    'America/Martinique',
    'America/Matamoros',
    'America/Mazatlan',
    'America/Mendoza',
    'America/Menominee',
    'America/Merida',
    'America/Metlakatla',
    'America/Mexico_City',
    'America/Miquelon',
    'America/Moncton',
    'America/Monterrey',
    'America/Montevideo',
    'America/Montreal',
    'America/Montserrat',
    'America/Nassau',
    'America/New_York',
    'America/Nipigon',
    'America/Nome',
    'America/Noronha',
    'America/North_Dakota/Beulah',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'America/Ojinaga',
    'America/Panama',
    'America/Pangnirtung',
    'America/Paramaribo',
    'America/Phoenix',
    'America/Port-au-Prince',
    'America/Port_of_Spain',
    'America/Porto_Acre',
    'America/Porto_Velho',
    'America/Puerto_Rico',
    'America/Punta_Arenas',
    'America/Rainy_River',
    'America/Rankin_Inlet',
    'America/Recife',
    'America/Regina',
    'America/Resolute',
    'America/Rio_Branco',
    'America/Rosario',
    'America/Santa_Isabel',
    'America/Santarem',
    'America/Santiago',
    'America/Santo_Domingo',
    'America/Sao_Paulo',
    'America/Scoresbysund',
    'America/Shiprock',
    'America/Sitka',
    'America/St_Barthelemy',
    'America/St_Johns',
    'America/St_Kitts',
    'America/St_Lucia',
    'America/St_Thomas',
    'America/St_Vincent',
    'America/Swift_Current',
    'America/Tegucigalpa',
    'America/Thule',
    'America/Thunder_Bay',
    'America/Tijuana',
    'America/Toronto',
    'America/Tortola',
    'America/Vancouver',
    'America/Virgin',
    'America/Whitehorse',
    'America/Winnipeg',
    'America/Yakutat',
    'America/Yellowknife',
    'Antarctica/Casey',
    'Antarctica/Davis',
    'Antarctica/DumontDUrville',
    'Antarctica/Macquarie',
    'Antarctica/Mawson',
    'Antarctica/McMurdo',
    'Antarctica/Palmer',
    'Antarctica/Rothera',
    'Antarctica/South_Pole',
    'Antarctica/Syowa',
    'Antarctica/Troll',
    'Antarctica/Vostok',
    'Arctic/Longyearbyen',
    'Asia/Aden',
    'Asia/Almaty',
    'Asia/Amman',
    'Asia/Anadyr',
    'Asia/Aqtau',
    'Asia/Aqtobe',
    'Asia/Ashgabat',
    'Asia/Ashkhabad',
    'Asia/Atyrau',
    'Asia/Baghdad',
    'Asia/Bahrain',
    'Asia/Baku',
    'Asia/Bangkok',
    'Asia/Barnaul',
    'Asia/Beirut',
    'Asia/Bishkek',
    'Asia/Brunei',
    'Asia/Calcutta',
    'Asia/Chita',
    'Asia/Choibalsan',
    'Asia/Chongqing',
    'Asia/Chungking',
    'Asia/Colombo',
    'Asia/Dacca',
    'Asia/Damascus',
    'Asia/Dhaka',
    'Asia/Dili',
    'Asia/Dubai',
    'Asia/Dushanbe',
    'Asia/Famagusta',
    'Asia/Gaza',
    'Asia/Harbin',
    'Asia/Hebron',
    'Asia/Ho_Chi_Minh',
    'Asia/Hong_Kong',
    'Asia/Hovd',
    'Asia/Irkutsk',
    'Asia/Istanbul',
    'Asia/Jakarta',
    'Asia/Jayapura',
    'Asia/Jerusalem',
    'Asia/Kabul',
    'Asia/Kamchatka',
    'Asia/Karachi',
    'Asia/Kashgar',
    'Asia/Kathmandu',
    'Asia/Katmandu',
    'Asia/Khandyga',
    'Asia/Kolkata',
    'Asia/Krasnoyarsk',
    'Asia/Kuala_Lumpur',
    'Asia/Kuching',
    'Asia/Kuwait',
    'Asia/Macao',
    'Asia/Macau',
    'Asia/Magadan',
    'Asia/Makassar',
    'Asia/Manila',
    'Asia/Muscat',
    'Asia/Nicosia',
    'Asia/Novokuznetsk',
    'Asia/Novosibirsk',
    'Asia/Omsk',
    'Asia/Oral',
    'Asia/Phnom_Penh',
    'Asia/Pontianak',
    'Asia/Pyongyang',
    'Asia/Qatar',
    'Asia/Qostanay',
    'Asia/Qyzylorda',
    'Asia/Rangoon',
    'Asia/Riyadh',
    'Asia/Saigon',
    'Asia/Sakhalin',
    'Asia/Samarkand',
    'Asia/Seoul',
    'Asia/Shanghai',
    'Asia/Singapore',
    'Asia/Srednekolymsk',
    'Asia/Taipei',
    'Asia/Tashkent',
    'Asia/Tbilisi',
    'Asia/Tehran',
    'Asia/Tel_Aviv',
    'Asia/Thimbu',
    'Asia/Thimphu',
    'Asia/Tokyo',
    'Asia/Tomsk',
    'Asia/Ujung_Pandang',
    'Asia/Ulaanbaatar',
    'Asia/Ulan_Bator',
    'Asia/Urumqi',
    'Asia/Ust-Nera',
    'Asia/Vientiane',
    'Asia/Vladivostok',
    'Asia/Yakutsk',
    'Asia/Yangon',
    'Asia/Yekaterinburg',
    'Asia/Yerevan',
    'Atlantic/Azores',
    'Atlantic/Bermuda',
    'Atlantic/Canary',
    'Atlantic/Cape_Verde',
    'Atlantic/Faeroe',
    'Atlantic/Faroe',
    'Atlantic/Jan_Mayen',
    'Atlantic/Madeira',
    'Atlantic/Reykjavik',
    'Atlantic/South_Georgia',
    'Atlantic/St_Helena',
    'Atlantic/Stanley',
    'Australia/ACT',
    'Australia/Adelaide',
    'Australia/Brisbane',
    'Australia/Broken_Hill',
    'Australia/Canberra',
    'Australia/Currie',
    'Australia/Darwin',
    'Australia/Eucla',
    'Australia/Hobart',
    'Australia/LHI',
    'Australia/Lindeman',
    'Australia/Lord_Howe',
    'Australia/Melbourne',
    'Australia/NSW',
    'Australia/North',
    'Australia/Perth',
    'Australia/Queensland',
    'Australia/South',
    'Australia/Sydney',
    'Australia/Tasmania',
    'Australia/Victoria',
    'Australia/West',
    'Australia/Yancowinna',
    'Brazil/Acre',
    'Brazil/DeNoronha',
    'Brazil/East',
    'Brazil/West',
    'Canada/Atlantic',
    'Canada/Central',
    'Canada/Eastern',
    'Canada/Mountain',
    'Canada/Newfoundland',
    'Canada/Pacific',
    'Canada/Saskatchewan',
    'Canada/Yukon',
    'Chile/Continental',
    'Chile/EasterIsland',
    'Etc/GMT',
    'Etc/GMT+0',
    'Etc/GMT+1',
    'Etc/GMT+10',
    'Etc/GMT+11',
    'Etc/GMT+12',
    'Etc/GMT+2',
    'Etc/GMT+3',
    'Etc/GMT+4',
    'Etc/GMT+5',
    'Etc/GMT+6',
    'Etc/GMT+7',
    'Etc/GMT+8',
    'Etc/GMT+9',
    'Etc/GMT-0',
    'Etc/GMT-1',
    'Etc/GMT-10',
    'Etc/GMT-11',
    'Etc/GMT-12',
    'Etc/GMT-13',
    'Etc/GMT-14',
    'Etc/GMT-2',
    'Etc/GMT-3',
    'Etc/GMT-4',
    'Etc/GMT-5',
    'Etc/GMT-6',
    'Etc/GMT-7',
    'Etc/GMT-8',
    'Etc/GMT-9',
    'Etc/GMT0',
    'Etc/Greenwich',
    'Etc/UCT',
    'Etc/UTC',
    'Etc/Universal',
    'Etc/Zulu',
    'Europe/Amsterdam',
    'Europe/Andorra',
    'Europe/Astrakhan',
    'Europe/Athens',
    'Europe/Belfast',
    'Europe/Belgrade',
    'Europe/Berlin',
    'Europe/Bratislava',
    'Europe/Brussels',
    'Europe/Bucharest',
    'Europe/Budapest',
    'Europe/Busingen',
    'Europe/Chisinau',
    'Europe/Copenhagen',
    'Europe/Dublin',
    'Europe/Gibraltar',
    'Europe/Guernsey',
    'Europe/Helsinki',
    'Europe/Isle_of_Man',
    'Europe/Istanbul',
    'Europe/Jersey',
    'Europe/Kaliningrad',
    'Europe/Kiev',
    'Europe/Kirov',
    'Europe/Lisbon',
    'Europe/Ljubljana',
    'Europe/London',
    'Europe/Luxembourg',
    'Europe/Madrid',
    'Europe/Malta',
    'Europe/Mariehamn',
    'Europe/Minsk',
    'Europe/Monaco',
    'Europe/Moscow',
    'Europe/Nicosia',
    'Europe/Oslo',
    'Europe/Paris',
    'Europe/Podgorica',
    'Europe/Prague',
    'Europe/Riga',
    'Europe/Rome',
    'Europe/Samara',
    'Europe/San_Marino',
    'Europe/Sarajevo',
    'Europe/Saratov',
    'Europe/Simferopol',
    'Europe/Skopje',
    'Europe/Sofia',
    'Europe/Stockholm',
    'Europe/Tallinn',
    'Europe/Tirane',
    'Europe/Tiraspol',
    'Europe/Ulyanovsk',
    'Europe/Uzhgorod',
    'Europe/Vaduz',
    'Europe/Vatican',
    'Europe/Vienna',
    'Europe/Vilnius',
    'Europe/Volgograd',
    'Europe/Warsaw',
    'Europe/Zagreb',
    'Europe/Zaporozhye',
    'Europe/Zurich',
    'Indian/Antananarivo',
    'Indian/Chagos',
    'Indian/Christmas',
    'Indian/Cocos',
    'Indian/Comoro',
    'Indian/Kerguelen',
    'Indian/Mahe',
    'Indian/Maldives',
    'Indian/Mauritius',
    'Indian/Mayotte',
    'Indian/Reunion',
    'Mexico/BajaNorte',
    'Mexico/BajaSur',
    'Mexico/General',
    'Pacific/Apia',
    'Pacific/Auckland',
    'Pacific/Bougainville',
    'Pacific/Chatham',
    'Pacific/Chuuk',
    'Pacific/Easter',
    'Pacific/Efate',
    'Pacific/Enderbury',
    'Pacific/Fakaofo',
    'Pacific/Fiji',
    'Pacific/Funafuti',
    'Pacific/Galapagos',
    'Pacific/Gambier',
    'Pacific/Guadalcanal',
    'Pacific/Guam',
    'Pacific/Honolulu',
    'Pacific/Johnston',
    'Pacific/Kiritimati',
    'Pacific/Kosrae',
    'Pacific/Kwajalein',
    'Pacific/Majuro',
    'Pacific/Marquesas',
    'Pacific/Midway',
    'Pacific/Nauru',
    'Pacific/Niue',
    'Pacific/Norfolk',
    'Pacific/Noumea',
    'Pacific/Pago_Pago',
    'Pacific/Palau',
    'Pacific/Pitcairn',
    'Pacific/Pohnpei',
    'Pacific/Ponape',
    'Pacific/Port_Moresby',
    'Pacific/Rarotonga',
    'Pacific/Saipan',
    'Pacific/Samoa',
    'Pacific/Tahiti',
    'Pacific/Tarawa',
    'Pacific/Tongatapu',
    'Pacific/Truk',
    'Pacific/Wake',
    'Pacific/Wallis',
    'Pacific/Yap',
    'US/Alaska',
    'US/Aleutian',
    'US/Arizona',
    'US/Central',
    'US/East-Indiana',
    'US/Eastern',
    'US/Hawaii',
    'US/Indiana-Starke',
    'US/Michigan',
    'US/Mountain',
    'US/Pacific',
    'US/Pacific-New',
    'US/Samoa'
  ]
};

export const PROJECT_LABEL_COLORS = [
  {
    colorCode: '#00c4ff'
  },
  {
    colorCode: '#737373'
  },
  {
    colorCode: '#77be79'
  },
  {
    colorCode: '#f1a404'
  },
  {
    colorCode: '#207cf3'
  },
  {
    colorCode: '#a5464c'
  },
  {
    colorCode: '#ec4d57'
  }
];

export const taskLabelHistory = [
  {
    name: 'name',
    label: 'Task Name',
  },
  {
    name: 'description',
    label: 'Description',
  },
  {
    name: 'assignee',
    label: 'Assignee',
  },
  {
    name: 'reporter',
    label: 'Reporter',
  },
  {
    name: 'dueDate',
    label: 'Due Date'
  },
  {
    name: 'timeOriginalEstimate',
    label: 'Estimate',
  },
  {
    name: 'storyLine',
    label: 'Story Line',
  },
  {
    name: 'storyPoint',
    label: 'Story Point',
  },
  {
    name: 'metricValue',
    label: 'Expected Metric Value',
  },
  {
    name: 'self',
    label: 'Task',
  },
  {
    name: 'cc',
    label: 'CC',
  },
  {
    name: 'type',
    label: 'Type',
  },
  {
    name: 'priority',
    label: 'Priority',
  },
  {
    name: 'sprint',
    label: 'Sprint',
  },
  {
    name: 'versions',
    label: 'Releases',
  },
  {
    name: 'epic',
    label: 'Epic',
  },
  {
    name: 'platform',
    label: 'Platform',
  },
  {
    name: 'labels',
    label: 'Labels'
  },
  {
    name: 'metric',
    label: 'Metric',
  },
  {
    name: 'status',
    label: 'Status',
  },
  {
    name: 'currentMetricValue',
    label: 'Current Metric Value',
  },
  {
    name: 'startMetricValue',
    label: 'Start Metric Value',
  },
  {
    name: 'progress',
    label: 'Progress',
  },
  {
    name: 'link',
    label: 'Link task',
  },
  {
    name: 'startDate',
    label: 'Start Date',
  },
  {
    name: 'endDate',
    label: 'End Date',
  },
  {
    name: 'taskTemplate',
    label: 'Task template',
  },
  {
    name: 'startTime',
    label: 'Start Time',
  },
  {
    name: 'endTime',
    label: 'End Time',
  },
  {
    name: 'comment',
    label: 'Comment',
  }
];

export const okrLabelHistory = [
  ...taskLabelHistory,
  {
    name: 'weight',
    label: 'Weight',
  },
  {
    name: 'parentWeight',
    label: 'Weight',
  },
  {
    name: 'objectiveType',
    label: 'Objective Type',
  },
  {
    name: 'stakeHolder',
    label: 'Stakeholders',
  },
  {
    name: 'resultType',
    label: 'Result',
  },
  {
    name: 'start',
    label: 'Start',
  },
  {
    name: 'current',
    label: 'Current',
  },
  {
    name: 'expected',
    label: 'Expected',
  },
  {
    name: 'justify',
    label: 'Justify',
  },
  {
    name: 'riskLevel',
    label: 'Risk Level',
  },
  {
    name: 'okrGroups',
    label: 'Groups',
  },
  {
    name: 'okrTeams',
    label: 'Teams',
  },
  {
    name: 'timeline',
    label: 'Timeline',
  },

]

export const krLabelHistory = [
  ...okrLabelHistory,
]

export const CompanyStructureViewChild: ViewChild[] = [
  {
    label: 'Vertical Structure',
    icon: 'assets/icons/org-tree/vertical-tree-icon.svg'
  },
  {
    label: 'Horizontal Structure',
    icon: 'assets/icons/org-tree/horizontal-tree-icon.svg'
  }
];

export const CompanyStructureColors = [
  '#00c4ff', '#737373', '#77be79', '#f1a404', '#207cf3', '#a5464c', '#ec4d57'
];
export const ServerWeekDays = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

export const updateFormatByLanguage = (language: LanguageCode) => {
  if (language === LanguageCode.vi) {
    DATE_UI_FORMAT = 'DD/MM/YYYY';
    DATE_UI_SHORT_FORMAT = 'DD/MM/YYYY';
    DATE_UI_FORMAT_ANGULAR = 'dd/MM/yyyy';
    DATE_TIME_UI_12_HOURS_FORMAT = `${DATE_UI_FORMAT} hh:mm A`;
    DATE_TIME_UI_HOUR_BEFORE_DATE_FORMAT = `${DATE_UI_FORMAT} HH:mm`;
    DATE_FORMAT_FULL_DAY = `hh:mm:ss ${DATE_UI_SHORT_FORMAT}`;
    DATE_FORMAT_MONTH_NAME_DAY = 'DD/MM';
    DATE_FORMAT_SHORT = 'dd/MM';
    REMINDER_DATE_UI = `${DATE_UI_FORMAT} [lúc] ${HOUR_MINUTE}`;
    DATE_MONTH_YEAR_SHORT_UI_FORMAT = 'MMMM, y';
  }

  if (language === LanguageCode.en) {
    DATE_UI_FORMAT = 'MMM DD, YYYY';
    DATE_UI_SHORT_FORMAT = 'MMM DD, YYYY';
    DATE_UI_FORMAT_ANGULAR = 'MMM dd, yyyy';
    DATE_TIME_UI_12_HOURS_FORMAT = `${DATE_UI_FORMAT} hh:mm A`;
    DATE_TIME_UI_HOUR_BEFORE_DATE_FORMAT = `${DATE_UI_FORMAT} HH:mm`;
    DATE_FORMAT_FULL_DAY = `hh:mm:ss ${DATE_UI_SHORT_FORMAT}`;
    DATE_FORMAT_MONTH_NAME_DAY = 'MMM DD';
    DATE_FORMAT_SHORT = 'MMM d';
    REMINDER_DATE_UI = `${DATE_UI_FORMAT} [at] ${HOUR_MINUTE}`;
  }
};

export const LeaveChartLegend = [
  {
    label: 'Remain',
    colorCode: '#77be79'
  },
  {
    label: 'Used',
    colorCode: '#ec4d57'
  }
];

export const LisenseName = [
  {
    value: 'Professional',
    name: 'PRO'
  },
  {
    value: 'Free',
    name: 'Free'
  },
  {
    value: 'Company Management',
    name: 'CM'
  },
  {
    value: 'Time Management',
    name: 'TM'
  },
];

