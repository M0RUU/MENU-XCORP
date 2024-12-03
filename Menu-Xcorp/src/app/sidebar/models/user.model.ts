

export class User {
  company?: CompanyLicenseResponse;
  totalCompany?: number;
  jiraAccountUser?: JiraAccountUserResponse;
  linkedJira?: Boolean
}

export class UserSearchRequest {
  keyword?: string;
  excludeTeamId?: number;
  teamIds?: number[];
  groupIds?: number[];
  shiftProfileIds?: number[];
  employeeIds?: number[];
  onlySA?: boolean;
  statuses?: string[];
  roleIds?: number[];
  multiKeywordFlg?: boolean;
  feature?: FeatureUser;
}

export interface CompanyLicenseResponse {
  id: number;
  name: string;
  alias: string;
  logo: string;
  domain: string;
  establishmentDate: string;
  slackConnectedFlg: boolean;
  jiraConnectedFlg: boolean;
  licenseExpiredDate: string;
  trialFlg: boolean;
  trialExpiredDate: string;
  companySecret: string;
  gitConnected: boolean;
  displayJiraFlg?: boolean;
}

export interface UserShort {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email?: string;
  status: string;
  jobTitle: string;
  companyId: number;
  fullName: string;
  avatar: string;
  employeeId: string;
}

export interface UserProfile {
  firstWorkDate?: string;
  // laptopBuyDate: string;
  skype?: string;
  backupPhone?: string;
  birthday?: string;
  language?: string;
  address?: string;
  note?: string;
  hireDate?: string;
  contactStart?: string;
  contactEnd?: string;
  laptopExpireDate?: string;
  passProbationDate?: string;
  totalLeave?: number;
  totalWorkDays?: number;
  laptopExpiredRemainDays?: number;
}

export interface UserCreateRequest {
  locationId: number;
  teamIds: number[];
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  skype: string;
  roleCodes: string[];
  fullName: string;
}

export interface UserEditRequest {
  id?: number;
  employeeId: string;
  phone: string;
  firstName: string;
  lastName: string;
  status: string;
  jobTitle?: string;
  roleCodes: string[];
  avatar: string;
  avatarLarge: string;
  banks: {
    bankAccountId?: number;
    accountNumber: string;
    // isDefault: boolean;
    alias: string;
    bankId: number;
  }[];
  userProfile: UserProfile;
  locationId: number;
  teamIds: number[];
  groupIds: number[];
  shiftProfileId: number;
  partTimeFlg: boolean;
  jobTitleIds?: number[];
}

export interface UserUpdateStatusRequest {
  ids: number[];
}

export interface UserReportSearchRequest {
  userId: number;
  preFromDate: string;
  preToDate: string;
  fromDate: string;
  toDate: string;
}

export interface UserReport {
  currentReport: UserReportData;
  previousReport: UserReportData;
  details: UserReportDetail[];
}

export interface UserReportData {
  firstReportDate: Date;
  lastReportDate: Date;
  reportOnTime: number;
  reportLately: number;
  reportEarly: number;
  reportMissed: number;
  reportTotal: number;
}

export interface UserReportDetail {
  reportOnTime: number;
  reportLately: number;
  reportEarly: number;
  reportMissed: number;
  reportTotal: number;
  yearMonth: string;
}
export interface AuthRequest {
  user: string;
  password: string;
  authProvider: string;
}

export interface ProviderAuthRequest {
  token: string;
  authProvider: string;
}

export interface AuthResponse {
  accessToken: string;
  tokenType?: string;
  domain?: string;
}

export interface XcorpAccount {
  user: User;
  authResponse: AuthResponse;
  expired: boolean;
  isMain: boolean;
}

export interface SignUpRequest {
  email: string;
  licenseId: number;
  periodId: number;
}
export interface ConfirmSignupRequest {
  code: string;
  tenant: string;
  companyName: string;
  domain: string;
  size: number;
  countryCode: string;
  timezone: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  licenseId: number;
  periodId: number;
}

export interface ConfirmSignupResponse {
  accessToken: string;
  domain: string;
}

export interface LoggedUserRole {
  isSuperAdmin?: boolean;
  isApprover?: boolean;
  isEmployee?: boolean;
}

export interface SystemAdminResponse {
  systemAdmin: boolean;
}

export interface TenantIdentity {
  code: string;
  tenant: string;
  id?: number;
}

export interface ResetPassword extends TenantIdentity {
  password: string;
}

export interface EmployeeSalary {
  salary: number;
  salaryContract: number;
  unit: string;
}

export interface SalaryPayLoad {
  value: string;
}

export interface SalaryProfilePayLoad {
  salaryProfileIds: number[];
}

export interface UserInvitePayLoad {
  user: InViteUser[];
}

export interface InViteUser {
  email: string;
  roleId: number;
  projectIds?: number[];
}

export interface SetPasswordRequest {
  id: number;
  password: string;
}

export interface AccountCompanyAuthRequest {
  email?: string;
}

export interface SumObjectResponse {
  total: number;
}

export interface ExtendingTrial {
  email: string;
  domain: string;
}

export interface UserToken {
  email?: string;
  domain?: string;
  env: string;
}

export interface JiraAccountUserResponse {
  id: number;
  expireTime: string;
}

export enum FeatureUser {
  OKR = 'OKR',
}
