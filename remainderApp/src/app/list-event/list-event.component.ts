import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl('dashboard')
  }

}
