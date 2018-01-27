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
  title = 'Krzyś';

  hello(age = 20){
    return `Witaj ${this.title}, ${age} lat`;
  }
}
