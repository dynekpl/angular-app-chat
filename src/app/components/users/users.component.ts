import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{

  users = [{
    nick: "BOT",
    city: "Kraków",
    status: "active"
  },
    {
      nick: "Admin",
      city: "Sandomierz",
      status: "disable"
    }];

}
