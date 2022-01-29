import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
  }

  add(eventname: any, eventtime: any) {

    var eventname = eventname.value;
    var eventtime = eventtime.value;
    var loginid = this.ds.loginid;
    var event = this.ds.loginid["event"];
    
    // if (eventname in event) {
    //   alert("event already in list")
    // }
    // else {
      event.push({
        name: eventname,
        time: eventtime
      })
      console.log(loginid);
      alert("event successfully added")
    // }
  }

  back() {
    this.router.navigateByUrl('dashboard')
  }

}
