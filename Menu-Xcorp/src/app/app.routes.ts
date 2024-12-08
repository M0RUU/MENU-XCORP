import { TaskFinderComponent } from './task-management/task-finder/task-finder.component';
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { ProjectsComponent } from "./task-management/projects/projects.component";
import { GanttComponent } from './task-management/gantt/gantt.component';
import { Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { DashboardComponent as WorkTrackingDashboardComponent } from './work-tracking/dashboard/dashboard.component';
import { DashboardComponent as LeaveDashboardComponent } from './leave/dashboard/dashboard.component';
import { MyTrackingComponent } from './work-tracking/my-tracking/my-tracking.component';
import { SettingComponent as WorkTrackingSettingComponent} from './work-tracking/setting/setting.component';
import { SettingComponent as LeaveSettingComponent} from './leave/setting/setting.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ReportsComponent } from './timesheet/reports/reports.component';
import { WorkTrackingComponent } from './work-tracking/work-tracking.component';
import { MyRequestsComponent } from './leave/my-requests/my-requests.component';
import { ApprovalComponent } from './leave/approval/approval.component';
import { BalanceComponent } from './leave/balance/balance.component';
import { ReportComponent } from './leave/report/report.component';
import { MyOKRComponent } from './okr-board/my-okr/my-okr.component';
import { OKRComponent } from './okr-board/okr/okr.component';
import { OKRDashboardComponent } from './okr-board/okr-dashboard/okr-dashboard.component';
import { OKRSettingsComponent } from './okr-board/okr-settings/okr-settings.component';
import { OrganizationTreeComponent } from './organization/organization-tree/organization-tree.component';
import { LocationComponent } from './organization/location/location.component';
import { ShiftComponent } from './organization/shift/shift.component';
import { TeamComponent } from './organization/team/team.component';
import { GroupComponent } from './organization/group/group.component';
import { UserComponent } from './organization/user/user.component';
import { RolePermissionComponent } from './organization/role-permission/role-permission.component';
import { HollidayComponent } from './organization/holliday/holliday.component';
import { BillingComponent } from './organization/billing/billing.component';
import { IntegrationComponent } from './organization/integration/integration.component';
import { HiringBoardComponent } from './hr/hiring-board/hiring-board.component';
import { OnboardManagementComponent } from './hr/onboard-management/onboard-management.component';
import { PolicyComponent } from './hr/policy/policy.component';
import { SalaryProfileComponent } from './hr/salary-profile/salary-profile.component';
import { PayScheduleComponent } from './hr/pay-schedule/pay-schedule.component';
import { PayrollComponent } from './hr/payroll/payroll.component';
import { SettingsComponent } from './hr/settings/settings.component';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { DynamicFieldComponent } from './settings/dynamic-field/dynamic-field.component';
import { LanguageComponent } from './settings/language/language.component';
import { NotificationsComponent } from './settings/notifications/notifications.component';
import { DocumentTemplatesComponent } from './settings/document-templates/document-templates.component';
import { EventLocationComponent } from './settings/event-location/event-location.component';

export const routes: Routes = [
    { path: 'user-dashboard', component: UserDashboardComponent },

    { path: 'task-management/projects', component: ProjectsComponent },
    { path: 'task-management/task-finder', component: TaskFinderComponent },
    { path: 'task-management/gantt', component: GanttComponent },

    { path: 'work-tracking/dashboard', component: WorkTrackingDashboardComponent },
    { path: 'work-tracking/my-tracking', component: MyTrackingComponent },
    { path: 'work-tracking/setting', component: WorkTrackingSettingComponent },

    { path: 'timesheet/my-logwork', component: TimesheetComponent },
    { path: 'timesheet/reports', component: ReportsComponent },

    { path: 'document', component: DocumentComponent },

    { path: 'leave/dashboard', component: LeaveDashboardComponent },
    { path: 'leave/my-requests', component: MyRequestsComponent },
    { path: 'leave/approval', component: ApprovalComponent },
    { path: 'leave/balance', component: BalanceComponent },
    { path: 'leave/report', component: ReportComponent },
    { path: 'leave/setting', component: LeaveSettingComponent },

    { path: 'okr-board/my-okr', component: MyOKRComponent },
    { path: 'okr-board/okr', component: OKRComponent },
    { path: 'okr-board/okr-dashboard', component: OKRDashboardComponent },
    { path: 'okr-board/okr-settings', component: OKRSettingsComponent },

    { path: 'organization/organization-tree', component: OrganizationTreeComponent },
    { path: 'organization/location', component: LocationComponent },
    { path: 'organization/shift', component: ShiftComponent },
    { path: 'organization/team', component: TeamComponent },
    { path: 'organization/group', component: GroupComponent },
    { path: 'organization/user', component: UserComponent },
    { path: 'organization/role-permission', component: RolePermissionComponent },
    { path: 'organization/holliday', component: HollidayComponent },
    { path: 'organization/billing', component: BillingComponent },
    { path: 'organization/integration', component: IntegrationComponent },

    { path: 'hr/hiring-board', component: HiringBoardComponent },
    { path: 'hr/onboard-management', component: OnboardManagementComponent },
    { path: 'hr/policy', component: PolicyComponent },
    { path: 'hr/salary-profile', component: SalaryProfileComponent },
    { path: 'hr/pay-schedule', component: PayScheduleComponent },
    { path: 'hr/payroll', component: PayrollComponent },
    { path: 'hr/settings', component: SettingsComponent },

    { path: 'asset-management', component: AssetManagementComponent },

    { path: 'audit-log', component: AuditLogComponent },

    { path: 'settings/dynamic-field', component: DynamicFieldComponent },
    { path: 'settings/language', component: LanguageComponent },
    { path: 'settings/notifications', component: NotificationsComponent },
    { path: 'settings/document-templates', component: DocumentTemplatesComponent },
    { path: 'settings/event-location', component: EventLocationComponent },

    { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' }
];
