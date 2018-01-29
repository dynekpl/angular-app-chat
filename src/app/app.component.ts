import {Component, OnInit, OnDestroy, Inject} from '@angular/core';

import {HeaderComponent} from './components/header/header.component';

import {DataServiceRx} from './services/datarx.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-chat-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  sub: Subscription;

  constructor(@Inject(DataServiceRx) private DataServiceRx) {
  };

  ngOnInit(): void {
    this.sub = this.DataServiceRx.getMessage().subscribe(res => {
      console.log(res);
      //this.newMessage();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  newMessage() {
    this.DataServiceRx.sendMessage({data: 'dane z przeglądarki'});
  }

}
