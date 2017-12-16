import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';


@Component({
  selector: 'giving',
  templateUrl: './giving.component.html',
  styleUrls:['./giving.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class GivingComponent {}




