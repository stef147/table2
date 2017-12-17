import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export class ContentService {

  private pagesUrl = 'http://tabletandragee.org/Content/wp-json/wp/v2/pages';
  private postsUrl = 'http://tabletandragee.org/Content/wp-json/wp/v2/posts';
  private eventsUrl = 'http://tabletandragee.org/Content/wp-json/tribe/events/v1/events';

  allPages: any;
  allPosts: any;
  allEvents: any;


  constructor(private http: Http) {
    console.log('ContentService started');

  }

  getPages(){
    if(!this.allPages){
      console.log('calling to get page data from wp');
      this.allPages = this.http.get(this.pagesUrl)
        .map(res => res.json())
        .publishReplay(1)
        .refCount();
    }
    return this.allPages;
  }

  getPosts(){
    if(!this.allPosts){
      console.log('calling to get post data from wp');
      this.allPosts = this.http.get(this.postsUrl)
        .map(res => res.json())
        .publishReplay(1)
        .refCount();
    }
    return this.allPosts;
  }

  getEvents(){
    if(!this.allEvents){
      console.log('calling to get event data from wp');
      this.allEvents = this.http.get(this.eventsUrl)
        .map(res => res.json())
        .publishReplay(1)
        .refCount();
    }
    return this.allEvents;
  }



}
