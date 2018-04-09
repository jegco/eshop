import { Component, OnInit } from '@angular/core';
import { IStack } from '../model/Stack';
import { IUser, User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent {

  users: IUser[];
  user: User;

  constructor(public userService: UserService) {
    this.user = User.createEmptyUser();
    this.userService.getData()
  .subscribe(users => {
    this.users = users;
  });
   }

  login() {
    this.users.forEach(user => {
    if (user === this.user) {
    } else {

    }
  });
  }

}
