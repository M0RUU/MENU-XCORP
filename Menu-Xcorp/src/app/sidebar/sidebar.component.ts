import { Component, Input } from '@angular/core';
import { MenuItem } from './sidebar';
import { CommonModule } from '@angular/common';
import { menuItems } from './sidebar-menu';
import { MatIconModule } from '@angular/material/icon';
import { text } from 'stream/consumers';


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

  toggleMenu(item: MenuItem): void {
    item.open = !item.open;
    console.log(item.text)
  }
}
