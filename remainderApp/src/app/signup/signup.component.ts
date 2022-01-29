import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private ds: DataService) { }

  ngOnInit(): void {
  }

  signup(id: any, username: any, password: any) {
    var id = id.value;
    var username = username.value;
    var password = password.value;
    var user = this.ds.users;
    if (id in user) {
      alert("ID already exist")
    }
    else {
      user[id] = {
        id,
        username,
        password,
        event: []
      }
      console.log(user);
      alert("user successfully created")
      this.router.navigateByUrl('')

    }
  }

}
