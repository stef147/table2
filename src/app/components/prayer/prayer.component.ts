import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'prayer',
  templateUrl: './prayer.component.html',
  styleUrls:['./prayer.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class PrayerComponent {}




