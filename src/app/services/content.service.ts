import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/publishReplay';
import * as moment from 'moment';



@Injectable()
export class ContentService {

  private id = '336868909983866|b3f4c857f718d9fb677abb1ac8993f25';
  private startMonth = moment().startOf('month').unix();
  private endMonth  = moment().endOf('month').unix();

  private pagesUrl = 'http://tabletandragee.org/Content/wp-json/wp/v2/pages';
  private postsUrl = 'http://tabletandragee.org/Content/wp-json/wp/v2/posts';
  private eventsUrl = 'https://graph.facebook.com/tabletandragee/events?fields=cover,name,description,place,id,event_times&access_token=' + this.id;

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
      console.log('calling to get event data from facebook');
      this.allEvents = this.http.get(this.eventsUrl)
        .map(res => res.json())
        .publishReplay(1)
        .refCount();
    }
    return this.allEvents;
  }
}
