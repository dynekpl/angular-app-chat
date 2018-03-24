import {Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ChatComponent} from '../chat/chat.component';
import {DataServiceRx} from '../../services/datarx.service';
import {Subscription} from 'rxjs/Subscription';
import {Message} from '../../model/message.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  sub: Subscription;

  constructor(@Inject(DataServiceRx) private DataServiceRx) {
  };

  history: Message[] = [];

  ngOnInit(): void {
    this.sub = this.DataServiceRx.getMessage().subscribe(res => {
      console.log('received from server: ' + res.data);
      //this.history.push(res.data);
      this.parseMessage(res.data);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  @Output()
  msgToServer = new EventEmitter;

  @Input()
  login = '';

  newMessage(newMsg) {
    if (newMsg.trim() !== '') {
      //this.history.push(newMsg);
      this.sendToServer(newMsg);
    }
  }

  private sendToServer(newMsg) {
    this.msgToServer.emit(newMsg);
  }

  private parseMessage(data) {
    const msg = data.split('|');
    const message = new Message();

    message.author = msg[0];
    message.timestamp = msg[1];
    message.text = msg[2];
    this.history.push(message);
  }
}
