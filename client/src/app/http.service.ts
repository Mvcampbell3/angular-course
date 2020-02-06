import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  randomUserUrl: string = 'https://randomuser.me/api/?nat=us';

  getUser() {
    return this._http.get(this.randomUserUrl);
  }
}
