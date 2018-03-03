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
  postContent: any [] = [];
  valuesHeaders: string[] = ['Jesus Is Lord',
                              'Discipleship',
                              'Generosity',
                              'Mission',
                              'Community',
                              'Prayer',
                              'Word & Spirit'];


  valuesToDisplay: string[] = [];

  checkIfPostPresent(value){
    var valuePresent = false;
    console.log('checkIfPostPresent');
    console.log(value);
    this.postContent.forEach(function(post) {
      if(post.title.rendered === value) {
        valuePresent = true;
      }
    });
    return valuePresent;
  }


  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getPosts().subscribe(data => {
      this.postContent = data;
      console.log('hello!!!!');
      console.log( this.postContent);

    }, error => console.log('Could not load Page Content'));
  };

}


