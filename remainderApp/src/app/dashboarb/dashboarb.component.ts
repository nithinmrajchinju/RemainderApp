import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-dashboarb',
  templateUrl: './dashboarb.component.html',
  styleUrls: ['./dashboarb.component.css']
})
export class DashboarbComponent implements OnInit {

  event="Event "
  loginid=this.ds.loginid["username"]

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('')
  }

}
