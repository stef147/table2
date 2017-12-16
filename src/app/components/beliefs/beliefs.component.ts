import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'beliefs',
  templateUrl: './beliefs.component.html',
  styleUrls: ['./beliefs.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BeliefsComponent {
  pageContent: any;

  constructor(private contentService: ContentService) {};


  ngOnInit() {
    this.contentService.getPages().subscribe(data => {
      data.forEach(page => {
        if(page.slug === 'beliefs'){
          this.pageContent = page.content.rendered;
        };
      });
    }, error => console.log('Could not load Page Content'));
  };

}




