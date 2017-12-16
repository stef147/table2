import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'fridays',
  templateUrl: './fridays.component.html',
  styleUrls:['./fridays.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class FridaysComponent {}




