import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private ds:DataService) { }

  ngOnInit(): void {
  }

  login(id: any, password: any) {
    var id = id.value;
    var password = password.value;
    var users = this.ds.users;
    var loginid;

    if ((id in users) && (password == users[id]["password"])) {
      loginid = users[id]
      this.ds.loginid = loginid
      console.log(loginid);

      alert("login succesfully")
      this.router.navigateByUrl('dashboard')
    }
    else {
      alert("invalued user")
    }
  }

  signup() {
    alert("create user")
    this.router.navigateByUrl('signup')
  }

}
