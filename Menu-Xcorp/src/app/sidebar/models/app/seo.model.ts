export interface SeoOrgData {
  seoTitle?: string;
  seoImage?: string;
  seoDescription?: string;
}

export interface RouteSeoOrgData {
  [key: string]: SeoOrgData;
}

export interface RouteSeoOrgDataLanding {
  home: SeoOrgData;
  productLeave: SeoOrgData;
  productWorkTracking: SeoOrgData;
  productOkr: SeoOrgData;
  productTask: SeoOrgData;
  productTimesheet: SeoOrgData;
  productDocument: SeoOrgData;
  productSlack: SeoOrgData;
  support: SeoOrgData;
}

