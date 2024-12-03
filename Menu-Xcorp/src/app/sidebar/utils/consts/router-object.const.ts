import { DynamicFieldHash } from './dynamic-field.consts';

export interface RouterObject {
  [k: string]: {
    text?: string;
    fullPath?: string;
    hash?: string;
  }
}

export const getRouterObjectByFullPath = (path: string) => {
  const taskStartsWith = '/task-mgmt/projects/';
  const objKey = Object.keys(routerObject).find((key) => {
    const obj = routerObject[key];
    if (
      path.startsWith(taskStartsWith) &&
      obj.fullPath?.startsWith(taskStartsWith)
    ) {
      const splits = obj.fullPath.split('/:projectKey');
      return path.startsWith(splits[0] || '') && path.endsWith(splits[1] || '');
    }
    return routerObject[key].fullPath === path;
  });
  return objKey ? routerObject[objKey] : {};
};

export const getRouterObjectByHash = (hash: string) => {
  const objKey = Object.keys(routerObject).find((key) => {
    return routerObject[key].hash === hash;
  });
  return objKey ? routerObject[objKey] : {};
};

export const projectRouteParam = ':projectKey';
export const LOCALHOST = 'localhost:4200';
export const LOCAL_ENV = 'local';
export const DEV_ENV = 'dev';
export const STAGING_ENV = 'staging';
export const PROD_ENV = 'prod';

export const routerObject: RouterObject = {
  noPermission: {
    text: 'No Permission',
    fullPath: '/no-permission',
  },
  // AUTH PAGES
  authSignIn: {
    text: 'Sign In',
    fullPath: '/auth/sign-in'
  },
  extendCompanyTrial: {
    text: 'Extend Company Trial',
    fullPath: '/auth/extend-company-trial'
  },
  selectCompany: {
    text: 'Select Company',
    fullPath: '/auth/select-company'
  },
  signIn: {
    text: 'Sign In',
    fullPath: '/auth/sign-in'
  },
  signUp: {
    text: 'Sign Up',
    fullPath: '/home/sign-up'
  },

  // LANDING PAGES
  landingPage: {
    text: 'Landing Page',
    fullPath: '/w'
  },
  support: {
    text: 'Support',
    fullPath: '/w/support'
  },
  productLanding: {
    text: 'Product',
    fullPath: '/w/product'
  },
  productTaskManagement: {
    text: 'Task Management',
    fullPath: '/w/product/task-management'
  },
  productTimesheet: {
    text: 'Timesheet',
    fullPath: '/w/product/timesheet'
  },
  productWorkTracking: {
    text: 'Work Tracking',
    fullPath: '/w/product/work-tracking'
  },
  productLeaveManagement: {
    text: 'Leave Management',
    fullPath: '/w/product/leave-management'
  },
  productDocumentManagement: {
    text: 'Document Management',
    fullPath: '/w/product/document-management'
  },
  productOkr: {
    text: 'OKR',
    fullPath: '/w/product/okr'
  },
  productSlack: {
    text: 'Slack Integration',
    fullPath: '/w/product/slack'
  },
  home: {
    text: 'Home',
    fullPath: '/w/home'
  },
  pricing: {
    text: 'Pricing',
    fullPath: '/w/pricing'
  },
  contactUs: {
    text: 'Contact Us',
    fullPath: '/w/contact-us'
  },
  // WIDGET MODULES
  widgetBoard: {
    text: 'User Dashboard',
    fullPath: '/widget-board'
    // hash: '',
  },
  // LEAVE MODULES
  leave: {
    text: 'Leave',
    fullPath: '/leave-management',
    hash: DynamicFieldHash.LEAVE
  },
  leaveDashboard: {
    text: 'Dashboard',
    fullPath: '/leave-management/dashboard',
    hash: DynamicFieldHash.LEAVE_DASHBOARD
  },
  leaveRequest: {
    text: 'My Requests',
    fullPath: '/leave-management/leave-requests',
    hash: DynamicFieldHash.MY_REQUESTS
  },
  leaveApproval: {
    text: 'Approval',
    fullPath: '/leave-management/leave-approves',
    hash: DynamicFieldHash.APPROVAL
  },
  leaveBalance: {
    text: 'Balance',
    fullPath: '/leave-management/balance',
    hash: DynamicFieldHash.BALANCE
  },
  leaveReport: {
    text: 'Report',
    fullPath: '/leave-management/leave-report',
    hash: DynamicFieldHash.REPORT
  },
  leaveSetting: {
    text: 'Setting',
    fullPath: '/leave-management/setting',
    hash: DynamicFieldHash.LEAVE_SETTING
  },
  leaveSettingCategory: {
    text: 'Category',
    fullPath: '/leave-management/setting/categories',
    hash: DynamicFieldHash.LEAVE_SETTING_CATEGORY_TAB
  },
  leaveSettingLeaveType: {
    text: 'Type',
    fullPath: '/leave-management/setting/leave-types',
    hash: DynamicFieldHash.LEAVE_SETTING_TYPE_TAB
  },
  leaveSettingCarryOver: {
    text: 'Carry Over',
    fullPath: '/leave-management/setting/carry-over',
    hash: DynamicFieldHash.LEAVE_SETTING_CARRY_OVER
  },

  // WORK TRACKING MODULE
  workTracking: {
    text: 'Work Tracking',
    fullPath: '/work-tracking',
    hash: DynamicFieldHash.WORK_TRACKING
  },
  workTrackingMyTracking: {
    text: 'My Tracking',
    fullPath: '/work-tracking/my-work-tracking',
    hash: DynamicFieldHash.MY_TRACKING
  },
  workTrackingManager: {
    text: 'Dashboard',
    fullPath: '/work-tracking/manager-work-tracking',
    hash: DynamicFieldHash.WORK_TRACKING_DASHBOARD
  },
  workTrackingSetting: {
    text: 'Setting',
    fullPath: '/work-tracking/work-tracking-setting',
    hash: DynamicFieldHash.WORK_TRACKING_SETTING
  },

  // TIMESHEET MODULE
  timesheet: {
    text: 'Timesheet',
    fullPath: '/timesheet',
    hash: DynamicFieldHash.TIMESHEET
  },
  timesheetMyLogwork: {
    text: 'My Logwork',
    fullPath: '/timesheet/my-logwork',
    hash: DynamicFieldHash.MY_LOGWORK
  },
  timesheetReport: {
    text: 'Reports',
    fullPath: '/timesheet/reports',
    hash: DynamicFieldHash.TIMESHEET_REPORT
  },
  timesheetSetting: {
    text: 'Setting',
    fullPath: '/timesheet/setting'
  },

  // TASK MANAGEMENT MODULE
  workCalendar: {
    text: 'Work Calendar',
    fullPath: '/work-calendar',
    hash: DynamicFieldHash.WORK_CALENDAR_MENULEVEL1
  },
  taskMgmt: {
    text: 'Task Management',
    fullPath: '/task-mgmt',
    hash: DynamicFieldHash.TASK_MANAGEMENT
  },
  taskMgmtGantt: {
    text: 'Gantt',
    fullPath: '/task-mgmt/gantt',
    hash: DynamicFieldHash.GANTT
  },
  taskMgmtProject: {
    text: 'Projects',
    fullPath: '/task-mgmt/projects',
    hash: DynamicFieldHash.PROJECTS
  },
  taskMgmtTaskList: {
    text: 'Task Finder',
    fullPath: '/task-mgmt/tasks',
    hash: ''
  },
  taskMgmtMyFilter: {
    text: 'My Filters',
    fullPath: '/task-mgmt/tasks/filter/my-filter'
  },
  taskMgmtSharedFilter: {
    text: 'Shared Filter',
    fullPath: '/task-mgmt/tasks/filter/shared-filter'
  },
  taskMgmtActiveSprint: {
    text: 'Active Sprint',
    fullPath: '/task-mgmt/projects/:projectKey/active-sprint',
    hash: DynamicFieldHash.ACTIVE_SPRINT
  },
  taskMgmtKanban: {
    text: 'Kanban Board',
    fullPath: '/task-mgmt/projects/:projectKey/kanban',
    hash: DynamicFieldHash.ACTIVE_SPRINT
  },
  taskMgmtRelease: {
    text: 'Release',
    fullPath: '/task-mgmt/projects/:projectKey/board-releases',
    hash: DynamicFieldHash.RELEASE
  },
  taskMgmtBacklog: {
    text: 'Backlog',
    fullPath: '/task-mgmt/projects/:projectKey/backlog',
    hash: DynamicFieldHash.BACKLOG
  },
  taskMgmtTaskTemplate: {
    text: 'Task Template',
    fullPath: '/task-mgmt/projects/:projectKey/task-template',
    hash: DynamicFieldHash.BACKLOG,
  },
  taskMgmtEpic: {
    text: 'Epic',
    fullPath: '/task-mgmt/projects/:projectKey/epic',
    hash: DynamicFieldHash.EPIC
  },
  taskMgmtStorylineBoard: {
    text: 'Storyline',
    fullPath: '/task-mgmt/projects/:projectKey/storyline',
    hash: DynamicFieldHash.STORYLINE
  },
  taskMgmtProjectSetting: {
    text: 'Project Settings',
    fullPath: '/task-mgmt/projects/:projectKey/setting',
    hash: DynamicFieldHash.PROJECT_SETTINGS
  },
  taskMgmtProjectGeneral: {
    text: 'General',
    fullPath: '/task-mgmt/projects/:projectKey/setting/general',
    hash: DynamicFieldHash.TM_PS_GENERAL_TAB
  },
  taskMgmtProjectMember: {
    text: 'Project Members',
    fullPath: '/task-mgmt/projects/:projectKey/setting/members',
    hash: DynamicFieldHash.TM_PS_PROJECT_MEMBER_TAB
  },
  taskMgmtProjectBoardSetting: {
    text: 'Board Settings',
    fullPath: '/task-mgmt/projects/:projectKey/setting/board-settings',
    hash: DynamicFieldHash.TM_PS_BOARD_SETTINGS_TAB
  },
  taskMgmtProjectStatusGroup: {
    text: 'Status Group',
    fullPath: '/task-mgmt/projects/:projectKey/setting/status-group',
    hash: DynamicFieldHash.TM_PS_BOARD_STATUS_GROUP
  },
  taskMgmtProjectStoryline: {
    text: 'Storyline',
    fullPath: '/task-mgmt/projects/:projectKey/setting/storyline',
    hash: DynamicFieldHash.TM_PS_STORYLINE_TAB
  },
  taskMgmtProjectTaskType: {
    text: 'Task Type',
    fullPath: '/task-mgmt/projects/:projectKey/setting/task-type'
  },
  taskMgmtProjectPriority: {
    text: 'Priority',
    fullPath: '/task-mgmt/projects/:projectKey/setting/priority',
    hash: DynamicFieldHash.TM_PS_PRIORITY_TAB
  },
  taskMgmtProjectLabel: {
    text: 'Label',
    fullPath: '/task-mgmt/projects/:projectKey/setting/label',
    hash: DynamicFieldHash.TM_PS_LABEL_TAB
  },
  taskMgmtProjectHistory: {
    text: 'History',
    fullPath: '/task-mgmt/projects/:projectKey/setting/history'
  },
  taskMgmtProjectTaskTemplate: {
    text: 'Task Templates',
    fullPath: '/task-mgmt/projects/:projectKey/setting/task-template'
  },
  taskMgmtProjectGit: {
    text: 'Git',
    fullPath: '/task-mgmt/projects/:projectKey/setting/git'
  },
  taskMgmtProjectSwimlane: {
    text: 'Swimlane',
    fullPath: '/task-mgmt/projects/:projectKey/setting/swimlane'
  },
  taskMgmtProjectSlackIntegration: {
    text: 'Slack Integration',
    fullPath: '/task-mgmt/projects/:projectKey/setting/slack-integration'
  },
  // DOCUMENT MODULE
  document: {
    text: 'Document',
    fullPath: '/document',
    hash: DynamicFieldHash.DOCUMENT
  },

  // OKR MODULE
  okr: {
    text: 'OKR Board',
    fullPath: '/okr',
    hash: DynamicFieldHash.OKR_BOARD
  },
  okrBoard: {
    text: 'OKR',
    fullPath: '/okr/board',
    hash: DynamicFieldHash.OKR
  },
  okrReport: {
    text: 'OKR Dashboard',
    fullPath: '/okr/report'
  },
  okrReportDetail: {
    text: 'OKR Dashboard Detail',
    fullPath: '/okr/report-detail'
  },
  okrMyBoard: {
    text: 'My OKR',
    fullPath: '/okr/my-board'
  },
  okrDashboard: {
    text: 'OKR Dashboard',
    fullPath: '/okr/dashboard'
  },
  okrDashboardDetail: {
    text: 'OKR Dashboard Detail',
    fullPath: '/okr/dashboard/detail'
  },
  okrSetting: {
    text: 'OKR Settings',
    fullPath: '/okr/settings',
    hash: DynamicFieldHash.OKR_SETTINGS
  },
  okrSettingSpace: {
    text: 'Space Members',
    fullPath: '/okr/settings/spaces'
  },
  okrSettingSpaceMembers: {
    text: 'Space Members',
    fullPath: '/okr/settings/space-members'
  },
  okrSettingTimelines: {
    text: 'Timelines',
    fullPath: '/okr/settings/timelines'
  },
  // ORGANIZATION MODULE
  org: {
    text: 'Organization',
    fullPath: '/organization',
    hash: DynamicFieldHash.ORGANIZATION
  },
  orgOraganizationTreeSetting: {
    text: 'Organization Tree',
    fullPath: '/organization/organization-tree-setting'
  },
  orgOraganizationTree: {
    text: 'Organization Tree',
    fullPath: '/organization/organization-tree-setting/organization-tree'
  },
  orgOraganizationTreeCompanyStructure: {
    text: 'Company Structure',
    fullPath: '/organization/organization-tree-setting/company-structure'
  },
  orgOraganizationTreeJobTitle: {
    text: 'Job Title',
    fullPath: '/organization/organization-tree-setting/job-title'
  },
  orgLocation: {
    text: 'Location',
    fullPath: '/organization/locations',
    hash: DynamicFieldHash.LOCATIONS
  },
  orgShiftSetting: {
    text: 'Shift',
    fullPath: '/organization/shift-setting',
    hash: DynamicFieldHash.SHIFT
  },
  orgShift: {
    text: 'Shift',
    fullPath: '/organization/shift-setting/shifts'
  },
  orgShiftProfile: {
    text: 'Shift Profile',
    fullPath: '/organization/shift-setting/shift-profile'
  },
  orgGroup: {
    text: 'Group',
    fullPath: '/organization/groups',
    hash: DynamicFieldHash.GROUP
  },
  orgTeam: {
    text: 'Team',
    fullPath: '/organization/teams',
    hash: DynamicFieldHash.TEAM
  },
  orgUser: {
    text: 'User',
    fullPath: '/organization/users',
    hash: DynamicFieldHash.USER
  },
  orgRolePermission: {
    text: 'Role & Permission',
    fullPath: '/organization/role-permission',
    hash: DynamicFieldHash.ROLE_PERMISSION
  },
  orgRole: {
    text: 'Role',
    fullPath: '/organization/role-permission/roles'
  },
  orgPermission: {
    text: 'Permission',
    fullPath: '/organization/role-permission/permissions'
  },
  orgHoliday: {
    text: 'Holiday',
    fullPath: '/organization/holidays',
    hash: DynamicFieldHash.HOLIDAY
  },
  orgIntegration: {
    text: 'Integration',
    fullPath: '/organization/integration',
    hash: DynamicFieldHash.INTEGRATION
  },
  orgIntegrationSlack: {
    text: 'Slack',
    fullPath: '/organization/integration/slack'
  },
  orgIntegrationJira: {
    text: 'Jira',
    fullPath: '/organization/integration/jira'
  },
  orgBilling: {
    text: 'Billing',
    fullPath: '/organization/billing',
    hash: DynamicFieldHash.BILLING
  },
  orgBillingChangePlan: {
    text: 'Change Plan',
    fullPath: '/organization/billing/change-plan'
  },
  // HR MODULE
  hr: {
    text: 'HR',
    fullPath: '/hr',
    hash: DynamicFieldHash.HR
  },
  hrSalaryProfile: {
    text: 'Salary Profile',
    fullPath: '/hr/salary/salary-profile',
    hash: ''
  },
  hrPaySchedule: {
    text: 'Pay Schedule',
    fullPath: '/hr/salary/pay-schedule',
    hash: ''
  },
  hrPayroll: {
    text: 'Payroll',
    fullPath: '/hr/salary/payroll',
    hash: ''
  },
  hrHiringBoard: {
    text: 'Hiring Board',
    fullPath: '/hr/hiring-board',
    hash: DynamicFieldHash.HR_HIRING_BOARD_MENULEVEL2
  },
  hrCV: {
    text: 'Cv',
    fullPath: '/hr/hiring-board/cv'
  },
  hrOnboard: {
    text: 'Onboard Management',
    fullPath: '/hr/onboard-management'
  },
  hrPolicy: {
    text: 'Policy',
    fullPath: '/hr/policy/policy',
    hash: DynamicFieldHash.POLICY
  },
  hrBenefitRule: {
    text: 'Benefit/Rule',
    fullPath: '/hr/policy/benefit-rule'
  },
  hrSettings: {
    text: 'Settings',
    fullPath: '/hr/settings'
  },
  hrHRMember: {
    text: 'HR Member',
    fullPath: '/hr/settings/hr-member'
  },
  hrOnboardMember: {
    text: 'Onboard Member',
    fullPath: '/hr/settings/onboard-member'
  },
  hrOnboardSettings: {
    text: 'Onboard Management',
    fullPath: '/hr/settings/onboard'
  },
  hrHRboardSettings: {
    text: 'Hiring Board',
    fullPath: '/hr/settings/hr-board'
  },
  cv: {
    text: 'CV',
    fullPath: '/cv'
  },
  orgUserDetail: {
    text: 'User Detail',
    fullPath: '/organization/users'
  },
  orgMyProfile: {
    text: 'My Profile',
    fullPath: '/organization/users/my-profile'
  },
  auditLog: {
    text: 'Audit Log',
    fullPath: '/audit-log'
  },
  settings: {
    text: 'Settings',
    fullPath: '/settings'
  },
  dynamicField: {
    text: 'Dynamic Field',
    fullPath: '/settings/dynamic-field'
  },
  language: {
    text: 'Language',
    fullPath: '/settings/language'
  },
  // Customer Module
  customer: {
    text: 'Customers',
    fullPath: '/customer'
  },
  notificationSetting: {
    text: 'Notifications',
    fullPath: '/settings/notification'
  },
  documentTemplateSetting: {
    text: 'Document Templates',
    fullPath: '/settings/document-template'
  },
  page: {
    text: 'Page',
    fullPath: '/page'
  },
  pageMyProfile: {
    text: 'My Profile',
    fullPath: '/organization/users'
  },
  locationSetting: {
    text: 'Event Location',
    fullPath: '/settings/location-setting'
  },
};
