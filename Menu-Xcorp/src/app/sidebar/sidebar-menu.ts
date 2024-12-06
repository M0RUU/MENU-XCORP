import { MenuItem } from "./sidebar";

export const menuItems: MenuItem[] = [
  {
    text: 'User Dashboard',
    icon: 'user_dashboard.svg',
    route: '/user_dashboard',
    open: false
  },
  {
    text: 'Task Management',
    icon: 'TM',
    route: '/task_management',
    open: false, 
    children: [
      {
        text: 'Projects',
        icon: 'ps',
        route: '/task_management/projects',
        open: false
      },
      {
        text: 'Task Finder',
        icon: 'TF',
        route: '/task_management/task-finder',
        open: false
      },
      {
        text: 'Gantt',
        icon: 'gt',
        route: '/task_management/gantt',
        open: false
      },
    ]
  },
  {
    text: 'Work Tracking',
    icon: 'WT',
    route: '/work-tracking',
    open: false,
    children: [
      {
        text: 'Dashboard',
        icon: 'dd',
        route: '/work-tracking/dashboard',
        open: false
      },
      {
        text: 'My Tracking',
        icon: 'MT',
        route: '/work-tracking/my-tracking',
        open: false
      },
      {
        text: 'Settings',
        icon: 'ss',
        route: '/work-tracking/setting',
        open: false
      },
    ]
  },
  {
    text: 'Timesheet',
    icon: 'tt',
    route: '/timesheet',
    open: false,
    children: [
      {
        text: 'My Logwork',
        icon: 'ML',
        route: '/timesheet/my-logwork',
        open: false
      },
      {
        text: 'Reports',
        icon: 'rs',
        route: '/timesheet/reports',
        open: false
      },
    ]
  },
  {
    text: 'Document',
    icon: 'dt',
    route: '/document',
    open: false
  },
  {
    text: 'Leave',
    icon: 'le',
    route: '/leave',
    open: false,
    children: [
      {
        text: 'Dashboard',
        icon: 'dd',
        route: '/leave/dashboard',
        open: false
      },
      {
        text: 'My Requests',
        icon: 'MR',
        route: '/leave/my-requests',
        open: false
      },
      {
        text: 'Approval',
        icon: 'al',
        route: '/leave/approval',
        open: false
      },
      {
        text: 'Balance',
        icon: 'be',
        route: '/leave/balance',
        open: false
      },
      {
        text: 'Report',
        icon: 'rt',
        route: '/leave/report',
        open: false
      },
      {
        text: 'Settings',
        icon: 'ss',
        route: '/leave/setting',
        open: false
      },
    ]
  },
  {
    text: 'OKR Board',
    icon: 'OB',
    route: '/okr-board',
    open: false,
    children: [
      {
        text: 'My OKR',
        icon: 'MO',
        route: '/okr-board/my-okr',
        open: false
      },
      {
        text: 'OKR',
        icon: 'okr',
        route: '/okr-board/okr',
        open: false
      },
      {
        text: 'OKR Dashboard',
        icon: 'OD',
        route: '/okr-board/okr-dashboard',
        open: false
      },
      {
        text: 'OKR Settings',
        icon: 'OS',
        route: '/okr-board/okr-settings',
        open: false
      },
    ]
  },
  {
    text: 'Organization',
    icon: 'on',
    route: '/organization',
    open: false,
    children: [
      {
        text: 'Organization Tree',
        icon: 'OT',
        route: '/organization/organization-tree',
        open: false
      },
      {
        text: 'Location',
        icon: 'ln',
        route: '/organization/location',
        open: false
      },
      {
        text: 'Shift',
        icon: 'st',
        route: '/organization/shift',
        open: false
      },
      {
        text: 'Team',
        icon: 'tm',
        route: '/organization/team',
        open: false
      },
      {
        text: 'Group',
        icon: 'gp',
        route: '/organization/group',
        open: false
      },
      {
        text: 'User',
        icon: 'ur',
        route: '/organization/user',
        open: false
      },
      {
        text: 'Role & Permission',
        icon: 'RP',
        route: '/organization/role-permission',
        open: false
      },
      {
        text: 'Holliday',
        icon: 'hy',
        route: '/organization/holliday',
        open: false
      },
      {
        text: 'Billing',
        icon: 'bg',
        route: '/organization/billing',
        open: false
      },
      {
        text: 'Integration',
        icon: 'in',
        route: '/organization/integration',
        open: false
      },
    ]
  },
  {
    text: 'HR',
    icon: 'hr',
    route: '/hr',
    open: false,
    children: [
      {
        text: 'Hiring Board',
        icon: 'HB',
        route: '/hr/hiring-board',
        open: false
      },
      {
        text: 'Onboard Management',
        icon: 'OM',
        route: '/hr/onboard-management',
        open: false
      },
      {
        text: 'Policy',
        icon: 'py',
        route: '/hr/policy',
        open: false
      },
      {
        text: 'Salary Profile',
        icon: 'SP',
        route: '/hr/salary-profile',
        open: false
      },
      {
        text: 'Pay Schedule',
        icon: 'PS',
        route: '/hr/pay-schedule',
        open: false
      },
      {
        text: 'Payroll',
        icon: 'pl',
        route: '/hr/payroll',
        open: false
      },
      {
        text: 'Settings',
        icon: 'ss',
        route: '/hr/settings',
        open: false
      },
    ]
  },
  {
    text: 'Asset Management',
    icon: 'AM',
    route: '/asset-management',
    open: false
  },
  {
    text: 'Audit Log',
    icon: 'AL',
    route: '/audit-log',
    open: false
  },
  {
    text: 'Settings',
    icon: 'ss',
    route: '/settings',
    open: false,
    children: [
      {
        text: 'Dynamic Field',
        icon: 'DF',
        route: '/settings/dynamic-field',
        open: false
      },
      {
        text: 'Language',
        icon: 'le',
        route: '/settings/language',
        open: false
      },
      {
        text: 'Notifications',
        icon: 'ns',
        route: '/settings/notifications',
        open: false
      },
      {
        text: 'Document Templates',
        icon: 'DT',
        route: '/settings/document-templates',
        open: false
      },
      {
        text: 'Event Location',
        icon: 'EL',
        route: '/settings/event-location',
        open: false
      },
    ]
  },
]