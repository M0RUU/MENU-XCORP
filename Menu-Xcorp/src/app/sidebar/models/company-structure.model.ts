export interface CompanyStructure {
  id: number;
  name: string;
  orderLevel?: string;
  color?: string;
  childView?: string;
  jobTitle: {
    id: number;
    title: string;
  };
  viceCompanyStructures?: CompanyStructure[];
  childCompanyStructures?: CompanyStructure[];
  sameLevelCompanyStructure?: CompanyStructure[];
}

export interface ViewChild {
  label: string;
  icon: string;
}

export class CompanyStructureRequest {
  currentId?: number;
  name?: string;
  color?: string;
  jobTitleId?: number;
  childView?: string;
  viceJobTitleIds?: number[];

  constructor(data: any) {
    this.currentId = data.currentId;
    this.name = data.name;
    this.color = data.color;
    this.jobTitleId = data.jobTitleId;
    this.childView = data.childView;
    this.viceJobTitleIds = data.viceJobTitleIds;
  }


}

export const CompanyLevel = '0|aaaaaa:';
export const EmployeeLevel = '0|yyyyyy:';
