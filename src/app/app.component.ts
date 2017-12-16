import { Component } from '@angular/core';
import { fadeInAnimation } from './app.animations';
import {ContentService} from './services/content.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }


})
export class AppComponent {
  pageContent: any;
  postsContent: any;

  constructor(private contentService: ContentService) {};


  ngOnInit() {
    this.contentService.getPages().subscribe(data => {
      console.log('all');
      this.pageContent = data;
      console.log(data);
    }, error => console.log('Could not load Page Content'));

    this.contentService.getPosts().subscribe(data => {
      console.log('all');
      this.postsContent = data;
      console.log(data);
    }, error => console.log('Could not load Posts Content'));


    };



}
