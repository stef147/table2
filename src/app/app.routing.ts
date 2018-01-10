import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BeliefsComponent } from './components/beliefs/beliefs.component';
import { BibleComponent } from './components/bible/bible.component';
import { BirdComponent } from './components/bird/bird.component';
import { BlogComponent } from './components/blog/blog.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ContactComponent } from './components/contact/contact.component';
import { DiscipleshipComponent } from './components/discipleship/discipleship.component';
import { FridaysComponent } from './components/fridays/fridays.component';
import { GivingComponent } from './components/giving/giving.component';
import { KidsComponent } from './components/kids/kids.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { PrayerComponent } from './components/prayer/prayer.component';
import { TotsComponent } from './components/tots/tots.component';
import { ValuesComponent } from './components/values/values.component';
import { WITCComponent } from './components/witc/witc.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'beliefs',
    component: BeliefsComponent
  },
  {
    path: 'bible',
    component: BibleComponent
  },
  {
    path: 'bird',
    component: BirdComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'discipleship',
    component: DiscipleshipComponent
  },
  {
    path: 'fridays',
    component: FridaysComponent
  },
  {
    path: 'giving',
    component: GivingComponent
  },
  {
    path: 'kids',
    component: KidsComponent
  },
  {
    path: 'leadership',
    component: LeadershipComponent
  },
  {
    path: 'prayer',
    component: PrayerComponent
  },

  {
    path: 'tots',
    component: TotsComponent
  },
  {
    path: 'values',
    component: ValuesComponent
  },
  {
    path: 'witc',
    component: WITCComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,// <-- debugging purposes only
        useHash: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

