import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{

  users = [{
    nick: "Krzys1",
    city: "Kraków",
    status: "active"
  },
    {
      nick: "Krzyś2",
      city: "Sandomierz",
      status: "disable"
    }];

}
