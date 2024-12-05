import { MenuItem } from "./sidebar";

export const menuItems: MenuItem[] = [
  {
    text: 'User Dashboard',
    icon: 'UD',
    open: false
  },
  {
    text: 'Task Management',
    icon: 'TM',
    open: false, 
    children: [
      {
        text: 'Projects',
        icon: 'projects',
        open: false
      },
      {
        text: 'Task Finder',
        icon: 'TF',
        open: false
      },
      {
        text: 'Gantt',
        icon: 'gantt',
        open: false
      },
    ]
  },
  {
    text: 'Work Tracking',
    icon: 'WT',
    open: false,
    children: [
      {
        text: 'Dashboard',
        icon: 'dashboard',
        open: false
      },
      {
        text: 'My Tracking',
        icon: 'MT',
        open: false
      },
      {
        text: 'Settings',
        icon: 'settings',
        open: false
      },
    ]
  },
  {
    text: 'Timesheet',
    icon: 'timesheet',
    open: false,
    children: [
      {
        text: 'My Logwork',
        icon: 'ML',
        open: false
      },
      {
        text: 'Reports',
        icon: 'reports',
        open: false
      },
    ]
  },
  {
    text: 'Document',
    icon: 'document',
    open: false
  },
  {
    text: 'Leave',
    icon: 'leave',
    open: false,
    children: [
      {
        text: 'Dashboard',
        icon: 'dashboard',
        open: false
      },
      {
        text: 'My Requests',
        icon: 'MR',
        open: false
      },
      {
        text: 'Approval',
        icon: 'approval',
        open: false
      },
      {
        text: 'Balance',
        icon: 'balance',
        open: false
      },
      {
        text: 'Report',
        icon: 'report',
        open: false
      },
      {
        text: 'Settings',
        icon: 'settings',
        open: false
      },
    ]
  },
  {
    text: 'OKR Board',
    icon: 'OB',
    open: false,
    children: [
      {
        text: 'My OKR',
        icon: 'MO',
        open: false
      },
      {
        text: 'OKR',
        icon: 'okr',
        open: false
      },
      {
        text: 'OKR Dashboard',
        icon: 'OD',
        open: false
      },
      {
        text: 'OKR Settings',
        icon: 'OS',
        open: false
      },
    ]
  },
  {
    text: 'Organization',
    icon: 'organization',
    open: false,
    children: [
      {
        text: 'Organization Tree',
        icon: 'OT',
        open: false
      },
      {
        text: 'Location',
        icon: 'location',
        open: false
      },
      {
        text: 'Shift',
        icon: 'shift',
        open: false
      },
      {
        text: 'Team',
        icon: 'team',
        open: false
      },
      {
        text: 'Group',
        icon: 'group',
        open: false
      },
      {
        text: 'User',
        icon: 'user',
        open: false
      },
      {
        text: 'Role & Permission',
        icon: 'R&P',
        open: false
      },
      {
        text: 'Holliday',
        icon: 'holliday',
        open: false
      },
      {
        text: 'Billing',
        icon: 'billing',
        open: false
      },
      {
        text: 'Integration',
        icon: 'integration',
        open: false
      },
    ]
  },
  {
    text: 'HR',
    icon: 'hr',
    open: false,
    children: [
      {
        text: 'Hiring Board',
        icon: 'HB',
        open: false
      },
      {
        text: 'Onboard Management',
        icon: 'OM',
        open: false
      },
      {
        text: 'Policy',
        icon: 'policy',
        open: false
      },
      {
        text: 'Salary Profile',
        icon: 'SP',
        open: false
      },
      {
        text: 'Pay Schedule',
        icon: 'PS',
        open: false
      },
      {
        text: 'Payroll',
        icon: 'payroll',
        open: false
      },
      {
        text: 'Settings',
        icon: 'settings',
        open: false
      },
    ]
  },
  {
    text: 'Asset Management',
    icon: 'AM',
    open: false
  },
  {
    text: 'Audit Log',
    icon: 'AL',
    open: false
  },
  {
    text: 'Settings',
    icon: 'settings',
    open: false,
    children: [
      {
        text: 'Dynamic Field',
        icon: 'DF',
        open: false
      },
      {
        text: 'Language',
        icon: 'language',
        open: false
      },
      {
        text: 'Notifications',
        icon: 'notifications',
        open: false
      },
      {
        text: 'Document Templates',
        icon: 'DT',
        open: false
      },
      {
        text: 'Event Location',
        icon: 'EL',
        open: false
      },
    ]
  },
]