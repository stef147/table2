import { Component, Input } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';


@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls:['./photos.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class PhotosComponent {

  @Input()  photoName: string;
}




