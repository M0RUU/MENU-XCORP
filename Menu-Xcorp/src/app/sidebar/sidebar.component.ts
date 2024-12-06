import { Component } from '@angular/core';
import { MenuItem } from './sidebar';
import { CommonModule } from '@angular/common';
import { menuItems } from './sidebar-menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


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

  toggleMenu(item: MenuItem): void {
    item.open = !item.open;
  }
  

  selectChild(child: MenuItem, parent: MenuItem): void {
    this.selectedChild = child;
    this.selectedParent = parent;
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
