import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {TitleComponent} from '../title/title.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {SettingsComponent} from '../settings/settings.component';

import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(@Inject(DataService) private DataService){}

  login = '';

  @Output()
  loginEmitter = new EventEmitter;

  logUser(user){
    this.login = user;
    this.loginEmitter.emit(this.login);
  }

  logOut(){
    this.login = '';
    this.loginEmitter.emit(this.login);
  }
}
