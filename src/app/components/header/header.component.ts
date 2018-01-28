import { Component, OnInit } from '@angular/core';
import {TitleComponent} from '../title/title.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {SettingsComponent} from '../settings/settings.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  login = '';

  logUser(user){
    this.login = user;
  }

  logOut(){
    this.login = '';
  }
}
