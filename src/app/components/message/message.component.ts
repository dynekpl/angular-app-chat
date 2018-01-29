import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{

  msg = '';

  @Output()
  outMsg = new EventEmitter();

  saveMsgFromInput(inMsg){
    this.msg = inMsg.target.value;
  }

  sendMessage(){
    this.outMsg.emit(this.msg);
    this.msg = '';
  }
}
