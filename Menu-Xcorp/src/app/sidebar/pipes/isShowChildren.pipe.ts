import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem, MenuLevel } from '../models/app/menu.model';

@Pipe({
  name: 'isShowChildren',
  standalone: true
})
export class IsShowChildrenPipe implements PipeTransform {
  transform(item: MenuItem , level: MenuLevel): boolean {
    return !! (item.childrens && !item.isTabMenu && level === MenuLevel.level1);
  }
}
