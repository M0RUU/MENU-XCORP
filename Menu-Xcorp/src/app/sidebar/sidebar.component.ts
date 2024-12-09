import { Component, OnInit } from '@angular/core';
import { MenuItem } from './sidebar';
import { CommonModule } from '@angular/common';
import { menuItems } from './sidebar-menu';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems = menuItems;
  selectedChild: MenuItem | null = null;
  selectedParent: MenuItem | null = null;
  selectedMenuItem: any = null;
  isMenuShorter: boolean = false;
  isMenuShortest: boolean = false;
  isShowed: boolean = false;
  currentUrl: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      this.currentUrl = this.router.url;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }

  isCurrentRoute(route: string):boolean {
    return this.currentUrl === route;
  }

  isParentRoute(item: MenuItem): boolean {
    const parent = item.children?.some(el => el.route === this.currentUrl);
    if (parent) {
      this.selectedParent = item;
      this.selectedParent.open = true;
    }
    return !!parent;
  }

  setSelectedMenuItem(): void {
    for (const menuItem of menuItems) {
      if (menuItem.route === this.currentUrl) {
        this.selectedMenuItem = menuItem;
        break;
      }

      if (menuItem.children) {
        for (const child of menuItem.children) {
          if (child.route === this.currentUrl) {
            this.selectedMenuItem = child;
            break;
          }
        }
      }
    }
  }

  navigation(route: string) {
    if (route) {
      this.router.navigate([route]);
      this.router.navigateByUrl(route).catch((err) => {
        console.error('Navigation Error:', err);
      });
    }
  }


  toggleMenu(item: MenuItem): void {
    if (item.children) {
      item.open = !item.open;
    } else {
      this.selectedParent = item;
      this.selectedChild = null;
      this.navigation(item.route);
    }
  }

  isMenuSelected(item: MenuItem): boolean {
    return this.selectedParent === item && !item.children;
  }

  selectChild(child: MenuItem, parent: MenuItem): void {
    this.selectedChild = child;
    this.selectedParent = parent;
    this.navigation(child.route)
  }

  isParentSelected(parent: MenuItem): boolean {
    return this.selectedParent === parent;
  }

  isChildSelected(child: MenuItem): boolean {
    return this.selectedChild === child;
  }

  shortingBTN() {
    if (this.isMenuShortest) {
      this.isMenuShortest = false;
      this.isMenuShorter = false;
    } else if (this.isMenuShorter) {
      this.isMenuShortest = true;
    } else {
      this.isMenuShorter = true;
    }
  }

  stopBTN(event: Event) {
    event?.stopPropagation()
  }

  showMenu() {
    this.isShowed = true;
  }

  hideMenu() {
    this.isShowed = false;
  }

}