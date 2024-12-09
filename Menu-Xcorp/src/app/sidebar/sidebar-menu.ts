import { MenuItem } from "./sidebar";

export const menuItems: MenuItem[] = [
  {
    text: 'User Dashboard',
    icon: 'dashboard',
    route: '/user-dashboard',
    open: false
  },
  {
    text: 'Task Management',
    icon: '/assets/icons/sidebar/task-management.svg',
    route: '',
    open: false, 
    children: [
      {
        text: 'Projects',
        icon: '/assets/icons/sidebar/task-management/projects.svg',
        route: '/task-management/projects',
        open: false
      },
      {
        text: 'Task Finder',
        icon: '/assets/icons/sidebar/task-management/task-finder.svg',
        route: '/task-management/task-finder',
        open: false
      },
      {
        text: 'Gantt',
        icon: '/assets/icons/sidebar/task-management/gantt.svg',
        route: '/task-management/gantt',
        open: false
      },
    ]
  },
  {
    text: 'Work Tracking',
    icon: '/assets/icons/sidebar/work-tracking.svg',
    route: '',
    open: false,
    children: [
      {
        text: 'Dashboard',
        icon: 'leaderboard',
        route: '/work-tracking/dashboard',
        open: false
      },
      {
        text: 'My Tracking',
        icon: 'table_chart',
        route: '/work-tracking/my-tracking',
        open: false
      },
      {
        text: 'Settings',
        icon: '/assets/icons/sidebar/work-tracking/settings.svg',
        route: '/work-tracking/setting',
        open: false
      },
    ]
  },
  {
    text: 'Timesheet',
    icon: 'date_range',
    route: '/timesheet',
    open: false,
    children: [
      {
        text: 'My Logwork',
        icon: 'fact_check',
        route: '/timesheet/my-logwork',
        open: false
      },
      {
        text: 'Reports',
        icon: 'assignment_turned_in',
        route: '/timesheet/reports',
        open: false
      },
    ]
  },
  {
    text: 'Document',
    icon: 'folder_open',
    route: '/document',
    open: false
  },
  {
    text: 'Leave',
    icon: '/assets/icons/sidebar/leave.svg',
    route: '',
    open: false,
    children: [
      {
        text: 'Dashboard',
        icon: '/assets/icons/sidebar/leave/dashboard.svg',
        route: '/leave/dashboard',
        open: false
      },
      {
        text: 'My Requests',
        icon: '/assets/icons/sidebar/leave/my-requests.svg',
        route: '/leave/my-requests',
        open: false
      },
      {
        text: 'Approval',
        icon: '/assets/icons/sidebar/leave/approval.svg',
        route: '/leave/approval',
        open: false
      },
      {
        text: 'Balance',
        icon: '/assets/icons/sidebar/leave/balance.svg',
        route: '/leave/balance',
        open: false
      },
      {
        text: 'Report',
        icon: '/assets/icons/sidebar/leave/report.svg',
        route: '/leave/report',
        open: false
      },
      {
        text: 'Settings',
        icon: '/assets/icons/sidebar/leave/setting.svg',
        route: '/leave/setting',
        open: false
      },
    ]
  },
  {
    text: 'OKR Board',
    icon: '/assets/icons/sidebar/okr-board.svg',
    route: '',
    open: false,
    children: [
      {
        text: 'My OKR',
        icon: '/assets/icons/sidebar/okr-board/my-okr.svg',
        route: '/okr-board/my-okr',
        open: false
      },
      {
        text: 'OKR',
        icon: '/assets/icons/sidebar/okr-board/okr.svg',
        route: '/okr-board/okr',
        open: false
      },
      {
        text: 'OKR Dashboard',
        icon: '/assets/icons/sidebar/okr-board/okr-dashboard.svg',
        route: '/okr-board/okr-dashboard',
        open: false
      },
      {
        text: 'OKR Settings',
        icon: '/assets/icons/sidebar/okr-board/okr-settings.svg',
        route: '/okr-board/okr-settings',
        open: false
      },
    ]
  },
  {
    text: 'Organization',
    icon: 'business',
    route: '',
    open: false,
    children: [
      {
        text: 'Organization Tree',
        icon: '/assets/icons/sidebar/organization/organization-tree.svg',
        route: '/organization/organization-tree',
        open: false
      },
      {
        text: 'Location',
        icon: '/assets/icons/sidebar/organization/location.svg',
        route: '/organization/location',
        open: false
      },
      {
        text: 'Shift',
        icon: '/assets/icons/sidebar/organization/shift.svg',
        route: '/organization/shift',
        open: false
      },
      {
        text: 'Team',
        icon: '/assets/icons/sidebar/organization/team.svg',
        route: '/organization/team',
        open: false
      },
      {
        text: 'Group',
        icon: '/assets/icons/sidebar/organization/group.svg',
        route: '/organization/group',
        open: false
      },
      {
        text: 'User',
        icon: '/assets/icons/sidebar/organization/user.svg',
        route: '/organization/user',
        open: false
      },
      {
        text: 'Role & Permission',
        icon: 'admin_panel_settings',
        route: '/organization/role-permission',
        open: false
      },
      {
        text: 'Holliday',
        icon: 'event',
        route: '/organization/holliday',
        open: false
      },
      {
        text: 'Billing',
        icon: 'credit_card',
        route: '/organization/billing',
        open: false
      },
      {
        text: 'Integration',
        icon: '/assets/icons/sidebar/organization/integration.svg',
        route: '/organization/integration',
        open: false
      },
    ]
  },
  {
    text: 'HR',
    icon: '/assets/icons/sidebar/hr.svg',
    route: '',
    open: false,
    children: [
      {
        text: 'Hiring Board',
        icon: '/assets/icons/sidebar/hr/hiring-board.svg',
        route: '/hr/hiring-board',
        open: false
      },
      {
        text: 'Onboard Management',
        icon: '/assets/icons/sidebar/hr/onboard-management.svg',
        route: '/hr/onboard-management',
        open: false
      },
      {
        text: 'Policy',
        icon: 'policy',
        route: '/hr/policy',
        open: false
      },
      {
        text: 'Salary Profile',
        icon: '/assets/icons/sidebar/hr/salary-profile.svg',
        route: '/hr/salary-profile',
        open: false
      },
      {
        text: 'Pay Schedule',
        icon: '/assets/icons/sidebar/hr/pay-schedule.svg',
        route: '/hr/pay-schedule',
        open: false
      },
      {
        text: 'Payroll',
        icon: '/assets/icons/sidebar/hr/payroll.svg',
        route: '/hr/payroll',
        open: false
      },
      {
        text: 'Settings',
        icon: '/assets/icons/sidebar/hr/settings.svg',
        route: '/hr/settings',
        open: false
      },
    ]
  },
  {
    text: 'Asset Management',
    icon: '/assets/icons/sidebar/asset-management.svg',
    route: '/asset-management',
    open: false
  },
  {
    text: 'Audit Log',
    icon: '/assets/icons/sidebar/audit-log.svg',
    route: '/audit-log',
    open: false
  },
  {
    text: 'Settings',
    icon: '/assets/icons/sidebar/settings.svg',
    route: '',
    open: false,
    children: [
      {
        text: 'Dynamic Field',
        icon: 'tune',
        route: '/settings/dynamic-field',
        open: false
      },
      {
        text: 'Language',
        icon: 'language',
        route: '/settings/language',
        open: false
      },
      {
        text: 'Notifications',
        icon: '/assets/icons/sidebar/settings/notifications.svg',
        route: '/settings/notifications',
        open: false
      },
      {
        text: 'Document Templates',
        icon: 'source',
        route: '/settings/document-templates',
        open: false
      },
      {
        text: 'Event Location',
        icon: '/assets/icons/sidebar/settings/event-location.svg',
        route: '/settings/event-location',
        open: false
      },
    ]
  },
]