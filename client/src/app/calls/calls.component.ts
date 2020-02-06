import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { User } from './user.model';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  users: User[] = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.newUser()
  }

  newUser() {
    this.http.getUser().subscribe(
      (data:any) => {
        console.log(data)
        const person = data.results[0];
        const user = new User(person.name.first, person.name.last, person.name.title, person.location, person.dob, person.picture)
        this.users.push(user);
        console.log(this.users)
      },
      (err:any) => {
        console.log(err)
      }
    )
  }
}
