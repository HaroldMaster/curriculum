import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GitService {
  public url : string = "https://api.github.com/users/HaroldMaster";
  public getUser : any = this._http.get(this.url);
  constructor
  (
    public _http : HttpClient
  ) { }
}