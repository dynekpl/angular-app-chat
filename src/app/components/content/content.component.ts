import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChatComponent} from '../chat/chat.component';
import {Message} from '../../model/message.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  history = [];

  @Output()
  msgToServer = new EventEmitter;

  newMessage(newMsg) {
    this.history.push(newMsg);
    // if (newMsg.trim() !== '') {
    //   this.history.push(newMsg);
    //   this.sendToServer(newMsg);
    // }
  }

  private sendToServer(newMsg) {
    this.msgToServer.emit(newMsg);
  }

}
