import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'discipleship',
  templateUrl: './discipleship.component.html',
  styleUrls:['./discipleship.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class DiscipleshipComponent {}




