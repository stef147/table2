import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.less'],
})
export class  NavbarComponent {
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}




