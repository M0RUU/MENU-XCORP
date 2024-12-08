import { Component } from '@angular/core';
import { MenuItem } from './sidebar';
import { CommonModule } from '@angular/common';
import { menuItems } from './sidebar-menu';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = menuItems;
  selectedChild: MenuItem | null = null;
  selectedParent: MenuItem | null = null;
  isMenuShorter: boolean = false;
  isMenuShortest: boolean = false;
  isShowed: boolean = false;

  constructor(private router: Router) {}

  navigation(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  toggleMenu(item: MenuItem): void {
    if (item.children) {
      item.open = !item.open
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
