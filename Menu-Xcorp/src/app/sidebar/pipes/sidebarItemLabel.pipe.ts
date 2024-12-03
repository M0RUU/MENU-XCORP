import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Pipe({
  name: 'sidebarItemLabel'
})
export class SidebarItemLabelPipe implements PipeTransform {
  transform(text: any): Observable<string> {
    if (text instanceof Observable) {
      return text;
    }
    return of(text);
  }
}
