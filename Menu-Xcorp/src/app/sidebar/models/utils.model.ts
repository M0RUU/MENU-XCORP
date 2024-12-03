
import { Subject, Subscription } from 'rxjs';


export interface FirstDayAndLastDay {
  
}

export interface SelectOption<T = any> {
  name: string;
  value: T;
}

export interface CustomChart {
  columns: any[];
  data: any[];
  options: any;
}

export interface FilterSelectOptions<T, U = string> {
  selecteds?: T[];
  items?: T[];
  typeahead?: Subject<U>;
  subscription?: Subscription;
}

export interface CurrencyUnit {
  unit: string[];
}

export interface CustomListColumn {
  name: string;
  key: string;
  selected?: boolean;
}
