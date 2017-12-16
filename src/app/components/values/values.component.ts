import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ValuesComponent {
  postContent: any;


  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getPosts().subscribe(data => {
      this.postContent = data;
    }, error => console.log('Could not load Page Content'));
  };

}


