import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import { fadeInAnimation } from '../../app.animations';


@Component({
  selector: 'home',
  providers: [ContentService],
  templateUrl: './home.component.html',
  styleUrls:['./home.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent {}
