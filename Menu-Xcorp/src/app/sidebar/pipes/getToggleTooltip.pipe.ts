import { Pipe, PipeTransform } from '@angular/core';
import { sidebarSize } from '../utils';


@Pipe({
  name: 'getToggleTooltip'
})
export class GetToggleTooltipPipe implements PipeTransform {
  transform(currentSize: string): string {
    const expandText = 'Expand';
    const collapseText = 'Collapse';
    switch (currentSize) {
      case sidebarSize.small:
        return expandText;
      case sidebarSize.medium:
      case sidebarSize.large:
        return collapseText;
      default:
        return '';
    }
  }
}
