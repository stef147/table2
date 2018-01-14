import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';
import {ContentService} from '../../services/content.service';
import * as moment from 'moment';
import { Event } from './event';



@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls:['./events.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class EventsComponent {
  eventsContent: any;
  currentDate = moment();
  private startMonth;
  private endMonth;
  myInterval: number = 1000;
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;

  private upcomingEvents;


  constructor(private contentService: ContentService) {
    this.startMonth = this.currentDate.clone().startOf('month');
    this.endMonth = this.currentDate.clone().endOf('month');
  }

  ngOnInit() {
    this.contentService.getEvents().subscribe(data => {
      this.eventsContent = data.data;
      this.upcomingEvents = this.getUpcomingEvents();
    });
  }

  getUpcomingEvents(){
    console.log('getUpcomingEvents');
    console.log(this.eventsContent);
    var startDate = this.currentDate;
    var endDate = this.currentDate.clone().add(2, 'weeks');

    var upcomingEvents = [];

    for(var i = 0; i < this.eventsContent.length; i++ ) {
      var eventTimes = this.eventsContent[i].event_times;

      for(var j = 0; j < eventTimes.length; j++){


        if(moment(eventTimes[j].start_time).isBetween(startDate, endDate)){
          var event = new Event();
          event.description = this.eventsContent[i].description;
          event.name = this.eventsContent[i].name;
          event.place = this.eventsContent[i].place.name;
          event.cover = this.eventsContent[i].cover;
          event.id = eventTimes[j].id;
          event.start = eventTimes[j].start_time;
          event.end = eventTimes[j].end_time;
          event.link = "https://www.facebook.com/events/"+event.id;

          upcomingEvents.push(event);
        }
      }
    }
    console.log('upcomingEvents');
    console.log(upcomingEvents);
    return upcomingEvents;
    }



}




