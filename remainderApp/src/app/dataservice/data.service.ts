import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: any = {
    1001: { id: 1001, username: "nithin", password: "nithin123", event:[] }
  }
  loginid: any = "ID"

  constructor() { }
}
