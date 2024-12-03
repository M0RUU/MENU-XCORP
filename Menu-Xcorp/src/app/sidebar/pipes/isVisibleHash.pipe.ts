import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../models/app/menu.model';

@Pipe({
  name: 'isVisibleHash',
  standalone:true
})
export class IsVisibleHashPipe implements PipeTransform {

  constructor() {}

  transform(hash: string, item: MenuItem): boolean {
    if (!item.visible) {
      return false;
    }
    if (!hash) {
      return item.visible;
    }
    return true;
  }
}
