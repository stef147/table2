import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';
import {ContentService} from '../../services/content.service';


@Component({
  selector: 'bird',
  templateUrl: './bird.component.html',
  styleUrls:['./bird.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BirdComponent {
  pageContent: any;

  constructor(private contentService: ContentService) {};


  ngOnInit() {
    this.contentService.getPages().subscribe(data => {
      data.forEach(page => {
        if(page.slug === 'birdtable'){
          this.pageContent = page.content.rendered;
        };
      });
    }, error => console.log('Could not load Page Content'));
  };

}




