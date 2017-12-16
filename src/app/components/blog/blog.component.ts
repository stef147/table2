import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import { fadeInAnimation } from '../../app.animations';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BlogComponent {
  postsContent: any;

  getAuthor(authorId) {
    var author = 'David Spence';
    if(authorId === 2){
      author = 'David Spence';
    }
    return author;
  }

  constructor(private contentService: ContentService) {};


  ngOnInit() {
    this.contentService.getPosts().subscribe(data => {
          this.postsContent = data;
    }, error => console.log('Could not load Page Content'));
  };

}




