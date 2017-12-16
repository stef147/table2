import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls:['./calendar.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class CalendarComponent {}




