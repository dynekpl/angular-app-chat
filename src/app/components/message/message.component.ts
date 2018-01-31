import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../model/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{

  message : Message;
  msg = '';
  textMsg = '';

  @Output()
  outMsg = new EventEmitter();

  saveMsgFromInput(inMsg){
    this.message.text = inMsg.target.value;
  }

  sendMessage(){
    this.outMsg.emit(this.message);
  }

  // sendMessage(){
  //   this.addTimestamp();
  //   this.msg += ', ' + this.textMsg;
  //   this.outMsg.emit(this.msg);
  //   this.msg = '';
  //   this.textMsg = '';
  // }
  //
  // addTimestamp() {
  //   const currentTime = new Date();
  //   this.msg += ((currentTime.getHours() < 10)?"0":"") + currentTime.getHours() +":"+ ((currentTime.getMinutes() < 10)?"0":"") + currentTime.getMinutes();
  // }
}
