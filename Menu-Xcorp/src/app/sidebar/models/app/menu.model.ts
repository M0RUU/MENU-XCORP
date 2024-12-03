import { LicenseCode } from "../../utils/enums/license.enum";

export interface GroupMenu {
  text: string;
  visible: boolean;
  childrens: MenuItem[];
  rowIndex?: number;
  hash?: string;
  key?: number;
}

export interface MenuItem {
  text: string;
  icon: string;
  hash?: string;
  isMatIcon?: boolean;
  visible: boolean;
  routerLink?: string;
  isCollapsed?: boolean;
  childrens?: MenuItem[];
  isTabMenu?: boolean;
  rowIndex?: number;
  key?: number;
  clickable?: boolean;
  licenseCode?: LicenseCode;
}

export enum MenuLevel {
  level1= 1,
  level2= 2,
  level3= 3
}
