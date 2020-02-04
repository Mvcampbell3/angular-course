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
    console.log(usernameInput)
    console.log(usernameInput.value)
    this.usernames.push(usernameInput.value)
    usernameInput.setAttribute('disabled', "true");
    setTimeout(() => {
      usernameInput.removeAttribute('disabled')
    }, 1000)
  
  }

  onNameSubmit() {
    console.log('clicked')
    console.log(this.name)
    this.names.push(this.name);
    this.name = "";
  }
}
