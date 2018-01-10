import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';
import {ContentService} from '../../services/content.service';


@Component({
  selector: 'bible',
  templateUrl: './bible.component.html',
  styleUrls:['./bible.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BibleComponent {
  pageContent: any;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getPages().subscribe(data => {
      data.forEach(page => {
        if(page.slug === 'bible-reading-plan'){
          this.pageContent = page.content.rendered;
        };
      });
    }, error => console.log('Could not load Page Content'));
  }


}
