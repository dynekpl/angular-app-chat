import {Component, OnInit, OnDestroy, Inject, EventEmitter} from '@angular/core';

import {HeaderComponent} from './components/header/header.component';

import {DataServiceRx} from './services/datarx.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-chat-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sub: Subscription;

  constructor(@Inject(DataServiceRx) private DataServiceRx) {
  };

  user='';

  saveLogin(login){
    this.user = login;
  }

  sendMessageToServer(msgToServer) {
    this.DataServiceRx.sendMessage({data: msgToServer});
  }

}
