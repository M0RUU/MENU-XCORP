import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Pipe({
  name: 'sidebarItemTooltip'
})
export class SidebarItemTooltipPipe implements PipeTransform {
  transform(text: any, isShow = true): Observable<string> {
    if (!isShow) {
      return of('');
    }
    if (text instanceof Observable) {
      return text;
    }
    return of(text);
  }
}
