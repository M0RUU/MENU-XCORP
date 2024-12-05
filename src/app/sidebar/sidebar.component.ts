import { Component } from '@angular/core';
import { MenuItem } from './sidebar';
import { CommonModule } from '@angular/common';
import { menuItems } from './sidebar-menu';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = menuItems;
  selectedChild: MenuItem | null = null;
  selectedParent: MenuItem | null = null;

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
}
