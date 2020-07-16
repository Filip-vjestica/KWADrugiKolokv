import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  users: User[] = [];
  
  user: User = {
    id: null,
    username: null,
    password: null,
    roles: null
  };

  constructor(private us: UserService) {}

  ngOnInit(): void {
    this.us.getAll().subscribe(r => this.users = r);
  }

  register() {
    this.us.create(this.user).subscribe((r) => console.log("Register Successful"));
  }
}
