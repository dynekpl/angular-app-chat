import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{

  msg = '';
  text = '';

  @Input()
  sender = '';

  @Output()
  outMsg = new EventEmitter();

  saveMsgFromInput(inMsg) {
    this.text = inMsg.target.value;
  }

  sendMessage() {
    this.msg = this.sender + '|';
    this.addTimestamp();
    this.outMsg.emit(this.msg);
    this.clearMsg();
  }

  addTimestamp() {
    const currentTime = new Date();
    const timeStamp = ((currentTime.getHours() < 10) ? '0' : '') + currentTime.getHours() + ':' + ((currentTime.getMinutes() < 10) ? '0' : '') + currentTime.getMinutes();
    this.msg += timeStamp + '|' + this.text;
  }

  private clearMsg() {
    this.msg = '';
    this.text = '';
  }
}
