import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../models/app/menu.model';

@Pipe({
  name: 'isActiveItem',
  standalone: true
})
export class IsActiveItemPipe implements PipeTransform {
  transform(currentUrl: string, item: MenuItem): boolean {
    const cleanedCurrentUrl = currentUrl.replace(/^\/([a-z]{2,3})\//i, '/');
    const isActive = !! (item.routerLink && cleanedCurrentUrl.startsWith(item.routerLink));

    return isActive;
  }
}
