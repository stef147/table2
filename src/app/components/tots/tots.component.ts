import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'tots',
  templateUrl: './tots.component.html',
  styleUrls:['./tots.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class TotsComponent {}




