import {Injectable} from '@angular/core';

@Injectable()
export class DataService{

  getData(){
    return usersData;
  }
}

const usersData = [
  {
    title: 'Krzys',
    status: 'active'
  }
]
