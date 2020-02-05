import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localtwo',
  templateUrl: './localtwo.component.html',
  styleUrls: ['./localtwo.component.css']
})
export class LocaltwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usernames: string[] = [];
  names: string[] = [];
  name: string = "";

  onUsernameSubmit(usernameInput: HTMLInputElement) {
    this.usernames.push(usernameInput.value)
    usernameInput.setAttribute('disabled', "true");
    setTimeout(() => {
      usernameInput.removeAttribute('disabled')
    }, 1000)
  
  }

  onNameSubmit() {
    console.log(this.name)
    this.names.push(this.name);
    this.name = "";
  }
}
