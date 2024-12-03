
export interface TaskStatus {
  id: number;
  name: string;
  colorCode: string;
  icon: string;
  defaultFlg: boolean;
}

export interface StatusDefault {
  name: string;
  icons: StatusDefaultIcon[];
}

export interface StatusDefaultIcon {
  icon: string;
  colorCode: string;
}
