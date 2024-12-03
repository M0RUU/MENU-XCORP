import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FileItem } from 'src/app/shared';
import { DocumentBreadcrumbClickType } from '../document-breadcrumb/document-breadcrumb.component';
import { DocumentContextMenuState } from '../document-context-menu/document-context-menu.component';

@Injectable({
  providedIn: 'root'
})
export class DocumentMenuContextDataService {
  click$ = new Subject<{type: DocumentBreadcrumbClickType, selecteds: FileItem[]}>();
  openMenu$ = new Subject<{
    event: PointerEvent,
    state: DocumentContextMenuState
  }>();
}
