import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'witc',
  templateUrl: './witc.component.html',
  styleUrls:['./witc.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class WITCComponent {}




