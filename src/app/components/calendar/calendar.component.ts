import {Component} from '@angular/core';
import {fadeInAnimation} from '../../app.animations';
import {ContentService} from '../../services/content.service';
import * as moment from 'moment';


@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class CalendarComponent {

  eventsContent: any;
  currentDate = moment();
  startMonth;
  endMonth;
  totalNumberOfDaysInMonth;
  daysOfMonthArray;
  eventsForCurrentMonth;

  dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  daysInAWeek = [1, 2, 3, 4, 5, 6, 7];


  constructor(private contentService: ContentService) {
    this.startMonth = this.currentDate.clone().startOf('month');
    this.endMonth = this.currentDate.clone().endOf('month');
    this.totalNumberOfDaysInMonth = moment().daysInMonth();
  }

  ngOnInit() {
    this.contentService.getEvents().subscribe(data => {
      this.eventsContent = data.data;
      this.eventsForCurrentMonth = this.getEventsForCurrentMonth(this.startMonth.format('MM'));
      this.daysOfMonthArray = this.getDaysForCurrentMonth();
    });
  }

  getDaysForCurrentMonth() {
    var numberOfWeeksInMonth = (this.endMonth.isoWeek() - this.startMonth.isoWeek()) + 1;
    var i = 1;
    var currentWeek = this.startMonth.isoWeek();
    var weekArray = [];
    var weeksInMonthArray = [];

    while (i <= this.totalNumberOfDaysInMonth) {
      var current = this.startMonth.clone().date(i);
      if (current.isoWeek() === currentWeek) {
        this.addAnyEventsForCurrentDay(current);
        weekArray.push(current);
        i++;
      }
      else {
        weeksInMonthArray.push(weekArray);
        currentWeek = currentWeek + 1;
        weekArray = [];
        weekArray.push(current);
        i++;
      }

    }
    weeksInMonthArray.push(weekArray);
    console.log('Updated list of days');
    console.log(weeksInMonthArray);
    return weeksInMonthArray;
  }

  addAnyEventsForCurrentDay(current) {
    for (var i = 0; i < this.eventsForCurrentMonth.length; i++) {
      if (moment(this.eventsForCurrentMonth[i].start).format('YYYY-MM-DD') === current.format('YYYY-MM-DD')) {
        current.events = [];
        current.events.push(this.eventsForCurrentMonth[i]);
      }
    }
  }

  //TODO Refactor this method for recurring vs single events- messy!!!!!!
  getEventsForCurrentMonth(startMonth) {
    console.log('eventsinfo');
    console.log(this.eventsContent);
    var eventsForCurrentMonth = [];
    var numberOfEventTypes = this.eventsContent.length;
    for (var i = 0; i < this.eventsContent.length; i++) {
      var eventTimes = this.eventsContent[i].event_times;
      var singleEventStartTime = this.eventsContent[i].start_time;

      //TODO refactor this
      if (eventTimes) {
        for (var j = 0; j < eventTimes.length; j++) {
          var month = (eventTimes[j].start_time).split('-')[1]

          if (month === startMonth) {
            let event = {} as any;
            event.description = this.eventsContent[i].description;
            event.name = this.eventsContent[i].name;
            event.place = this.eventsContent[i].place.name;
            event.cover = this.eventsContent[i].cover;
            event.id = eventTimes[j].id;
            event.start = eventTimes[j].start_time;
            event.end = eventTimes[j].end_time;
            event.link = "https://www.facebook.com/events/" + event.id;

            eventsForCurrentMonth.push(event);
          }
        }
      } else if (singleEventStartTime) {
        let event = {} as any;
        if (this.eventsContent[i].description) {
          event.description = this.eventsContent[i].description;
        } else {
          event.description = this.eventsContent[i].name;
        }

        if(this.eventsContent[i].place) {
          event.place = this.eventsContent[i].place.name;
        } else {
          event.place = 'TABLE TANDRAGEE';
        }
        event.name = this.eventsContent[i].name;
        event.cover = this.eventsContent[i].cover;
        event.id = this.eventsContent[i].id;
        event.start = singleEventStartTime;
        event.link = "https://www.facebook.com/events/" + event.id;

        eventsForCurrentMonth.push(event);
      }

    }
    console.log('eventsForCurrentMonth');
    console.log(eventsForCurrentMonth);

    return eventsForCurrentMonth;
  }


  prevMonth(): void {
    this.startMonth = moment(this.startMonth).subtract(1, 'months');
    this.endMonth = moment(this.endMonth).subtract(1, 'months');
    this.updateMonth();
  }

  nextMonth(): void {
    this.startMonth = moment(this.startMonth).add(1, 'months');
    this.endMonth = moment(this.endMonth).add(1, 'months');
    this.updateMonth();
  }

  updateMonth(): void {
    this.totalNumberOfDaysInMonth = this.startMonth.daysInMonth();
    this.eventsForCurrentMonth = this.getEventsForCurrentMonth(this.startMonth.format('MM'));
    this.daysOfMonthArray = this.getDaysForCurrentMonth();

    console.log(this.currentDate);
    console.log(this.totalNumberOfDaysInMonth);
    console.log(this.startMonth);
    console.log(this.endMonth);
    console.log(this.daysOfMonthArray);

  }

}




