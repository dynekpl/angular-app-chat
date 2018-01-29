import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {map} from 'rxjs/operators';
import * as socketIo from 'socket.io-client';

import {Socket} from '../shared/interfaces';

declare var io: {
  connect(url: string): Socket;
}

@Injectable()
export class DataServiceRx{
  socket: Socket;
  observer: Observer<any>;

  getMessage() : Observable<any>{
    this.socket = socketIo('http://localhost:8080');

    this.socket.on('message', res => {
      this.observer.next(res.data);
    });

    return this.createObservable();
  }

  sendMessage(message){
    this.socket.emit('clientData',message);
  }

  private createObservable() : Observable<any> {
    return new Observable<any>(observer => {
      this.observer = this.observer;
    });
  }
}
