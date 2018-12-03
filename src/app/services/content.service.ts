import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/publishReplay';
import * as moment from 'moment';



@Injectable()
export class ContentService {

  private id = 'EAAEyYWe3KHoBAPCmAzZC72ONRIEtpZBJCzJo7I3HZAYjsxwvmB5Vy5ZB370GF0NjgmdKm4AMZBBfuFCq3QZApyqvqa9X3lrmj3X2ZACscOS6EZAu4kLYizp29vBFbbNzZAZCLETMOXrB1Se3h0MDwEEGryeDBZC80k1V2Y5jZCMJLOCUEQZDZD';
  private startMonth = moment().startOf('month').unix();
  private endMonth  = moment().endOf('month').unix();

  private pagesUrl = 'https://tabletandragee.org/Content/wp-json/wp/v2/pages';
  private postsUrl = 'https://tabletandragee.org/Content/wp-json/wp/v2/posts';
  private eventsUrl = 'https://graph.facebook.com/tabletandragee/events?fields=cover,name,description,place,id,start_time,event_times&access_token=' + this.id;

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
