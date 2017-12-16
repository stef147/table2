import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';
import {ContentService} from '../../services/content.service';



@Component({
  selector: 'leadership',
  templateUrl: './leadership.component.html',
  styleUrls:['./leadership.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LeadershipComponent {
  pageContent: any;

  constructor(private contentService: ContentService) {};


  ngOnInit() {
    this.contentService.getPages().subscribe(data => {
      data.forEach(page => {
        if(page.slug === 'leadership'){
          this.pageContent = page.content.rendered;
        };
      });
    }, error => console.log('Could not load Page Content'));
  };

}




