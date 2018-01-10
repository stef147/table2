import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { BeliefsComponent } from './components/beliefs/beliefs.component';
import { BibleComponent } from './components/bible/bible.component';
import { BirdComponent } from './components/bird/bird.component';
import { BlogComponent } from './components/blog/blog.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChristmasComponent } from './components/christmas/christmas.component';
import { ContactComponent } from './components/contact/contact.component';
import { DiscipleshipComponent } from './components/discipleship/discipleship.component';
import { FooterComponent } from './components/footer/footer.component';
import { FridaysComponent } from './components/fridays/fridays.component';
import { GivingComponent } from './components/giving/giving.component';
import { HomeComponent } from './components/home/home.component';
import { KidsComponent } from './components/kids/kids.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { LocationComponent } from './components/location/location.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrayerComponent } from './components/prayer/prayer.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TotsComponent } from './components/tots/tots.component';
import { ValuesComponent } from './components/values/values.component';
import { WITCComponent } from './components/witc/witc.component';

import { AppRoutingModule } from './app.routing';
import { PopoverModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { ContentService } from './services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BeliefsComponent,
    BibleComponent,
    BirdComponent,
    BlogComponent,
    CalendarComponent,
    ChristmasComponent,
    ContactComponent,
    DiscipleshipComponent,
    FooterComponent,
    FridaysComponent,
    GivingComponent,
    HomeComponent,
    KidsComponent,
    LeadershipComponent,
    LocationComponent,
    NavbarComponent,
    PhotosComponent,
    PrayerComponent,
    TotsComponent,
    ValuesComponent,
    WITCComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    PopoverModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmp5blb-ong3ICIun0iLPKGi3A2LZfEKg'
    })
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
