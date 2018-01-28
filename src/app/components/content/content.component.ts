import {Component, Input, OnInit} from '@angular/core';
import {ChatComponent} from '../chat/chat.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  history = [];

  newMessage(newMsg) {
    if (newMsg.trim() !== '') {
      this.history.push(newMsg);
    }
  }

}
