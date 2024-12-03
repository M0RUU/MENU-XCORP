import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem, MenuLevel } from '../models/app/menu.model';
import { sidebarSize } from '../utils';

@Pipe({
  name: 'isShowHoverChildren',
  standalone: true
})
export class IsShowHoverChildrenPipe implements PipeTransform {
  transform(currentSize: string, item: MenuItem, level: MenuLevel): boolean {
    return !! (item.childrens && !item.isTabMenu
      && (currentSize === sidebarSize.medium || level === MenuLevel.level2));
  }
}
