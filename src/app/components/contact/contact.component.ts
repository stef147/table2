import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import { fadeInAnimation } from '../../app.animations';
import { ContactService, IMessage } from '../../services/contact.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  providers: [ContentService, ContactService],
  styleUrls: ['./contact.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ContactComponent {
  title = 'Angular PHP Email Example!';
  message: IMessage = {};

  constructor(private contactService: ContactService) {

  }

  sendEmail(message: IMessage) {
    this.contactService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }
}




