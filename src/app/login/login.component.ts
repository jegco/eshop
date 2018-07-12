import { Component } from '@angular/core';
import { IUser, User } from '../model/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent {

  users: IUser[];
  user: User;

  constructor(private userService: UserService,
  private router: Router) {
    this.user = User.createEmptyUser();
    this.userService.getData()
  .subscribe(users => {
    this.users = users;
  });
   }

  login() {
    this.users.forEach(user => {
    if (user.email === this.user.email && user.password === this.user.password) {
      this.router.navigateByUrl('/home');
    }
  });
  }

}
