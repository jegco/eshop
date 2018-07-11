import { Injectable } from '@angular/core';
import { IUser } from './model/User';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getData() {
    return this.http.get('https://eshop-752ae.firebaseio.com/users.json').map(response => response.json());
  }

}
