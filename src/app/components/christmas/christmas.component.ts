import { Component, Input } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';


@Component({
  selector: 'christmas',
  templateUrl: './christmas.component.html',
  styleUrls:['./christmas.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ChristmasComponent {

  @Input()  photoName: string;
}




