import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'foot',
  templateUrl: './footer.component.html',
  styleUrls:['./footer.component.less'],
})
export class FooterComponent {

  getFullYear() {
    return (new Date()).getFullYear();
  }


}


