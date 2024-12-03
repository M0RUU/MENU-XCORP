import { Component, EventEmitter, Injector, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { IsActiveItemPipe } from './pipes/isActiveItem.pipe';
import { IsShowChildrenPipe } from './pipes/isShowChildren.pipe';
import { DETAIL_PAGE, sidebarSize } from './utils';
import { RequestStatus } from './utils';
import { GroupMenu, MenuItem, MenuLevel } from './models/app/menu.model';
import { User } from './models/user.model';
import { routerObject } from './utils/consts/router-object.const';
import * as MenuItems from './new';
import { IsVisibleHashPipe } from './pipes/isVisibleHash.pipe';
import { IsShowHoverChildrenPipe } from './pipes/isShowHoverChildren.pipe';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    IsShowChildrenPipe,
    IsActiveItemPipe,
    IsVisibleHashPipe,
    IsShowHoverChildrenPipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @Input() groupMenus: GroupMenu[] = [];
  @Input() isWebLayout = true;
  @Input() currentSize: any;
  @Input() user!: User;
  @Output() onResize: EventEmitter<string> = new EventEmitter();
  @Output() openSearch = new EventEmitter<any>();

  currentUrl = '';
  waitingRequests = 0;
  interval: any;
  requestStatus = RequestStatus;
  // Web property
  sidebarSize = sidebarSize;

  // Mobile property
  isShowMobileSidebar = false;
  // isObservable = isObservable;
  // updateDynamicSub: Subscription;
  levels = MenuLevel;
  initLevel = MenuLevel.level1;
  routerObject = routerObject;
  // documentDataService: DocumentDataService;
  isShowSwitchCompany = false;
  leaveApprovalPath: string | undefined;
  leavePath: string | undefined;

  // subject
  destroyed$ = new Subject<void | null>();


  constructor(
    private router: Router,
    private injector: Injector,
  ) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit(): void {
    this.groupMenus = MenuItems.menu as GroupMenu[];
    console.log(this.groupMenus)
    this.countWaitingRequest();
    this.onExpandCurrentModule();
    this.leaveApprovalPath = routerObject['leaveApproval']?.fullPath;
    this.leavePath = routerObject['leave']?.fullPath
  } 

  ngOnDestroy() {
    clearInterval(this.interval);
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  countWaitingRequest() {
    this.waitingRequests = 20;
  }

  onExpandCurrentModule() {
    if (!Array.isArray(this.groupMenus)) {
      console.error("groupMenus is not an array:", this.groupMenus);
      return;
    }
  
    const menuItems: MenuItem[] = this.groupMenus.reduce(
      (acc: MenuItem[], cur) => {
        if (cur.childrens && Array.isArray(cur.childrens)) {
          return [...acc, ...cur.childrens];
        }
        return acc;
      },
      []
    );
  
    menuItems.forEach((menu) => {
      const isExpand =
        this.isActiveItem(menu) ||
        (menu.childrens?.some((item) => this.isActiveItem(item)) ?? false);
      menu.isCollapsed = !isExpand;
    });
  }
  

  isActiveItem(item: any) {
    return item.routerLink && this.currentUrl.includes(item.routerLink);
  }

  onClickMenuItem(item: MenuItem): void {
    if (item?.clickable) {
      this.router.navigate([item.routerLink]);
      return;
    }

    if (item.routerLink && (!item.childrens || (item.childrens && item.isTabMenu))) {
      let routerLink = item.routerLink;
      if (item.isTabMenu) {
        item.childrens?.some(e => { 
          if (e.visible) {
            routerLink = e.routerLink as string;
            return true;
          };
          return false
        });
      }
      this.router.navigate([routerLink]);

      this.isShowMobileSidebar = false; // Mobile
      return;
    }

    if (item.childrens) {
      item.isCollapsed = !item.isCollapsed;
      return;
    }
  }

  changeSize() {
    if (this.currentSize === this.sidebarSize.small) {
      this.currentSize = this.sidebarSize.large;
      this.onResize.next(this.currentSize);
      return;
    }

    if (this.currentSize === this.sidebarSize.medium) {
      this.currentSize = this.sidebarSize.small;
      this.onResize.next(this.currentSize);
      return;
    }

    if (this.currentSize === this.sidebarSize.large) {
      this.currentSize = this.sidebarSize.medium;
      this.onResize.next(this.currentSize);
      return;
    }
  }

  // Mobile hanlder
  toggleMobileSidebar() {
    this.isShowMobileSidebar = !this.isShowMobileSidebar;
  }

  isVisibleHash(item: MenuItem) {
    // if (!item?.hash) {
    //   return item.visible;
    // }
    return true;    
  }

  isVisibleGroup(group: GroupMenu) {
    return group.visible && group.childrens.some(e => this.isVisibleHash(e));
  }

  isBackIcon() {
    return localStorage.getItem(DETAIL_PAGE);
  }

  backToPreviousPage() {
    localStorage.removeItem(DETAIL_PAGE);
  }

  onSearch() {
    this.openSearch.emit();
  }
}
