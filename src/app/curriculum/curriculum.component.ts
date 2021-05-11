
import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service'
import { GitService } from './../services/git.service'
import { AboutmeService } from './../services/aboutme.service'
import {environment} from './../../environments/environment'

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
  providers: [DataService, GitService]
})
export class CurriculumComponent implements OnInit {
  public data : any;
  public about: any;
  environment = environment;
  constructor(
    public _data : DataService,
    public _git : GitService,
    public _about : AboutmeService
  ) { 
    this.data = this._data;
    this.about = this._about;
    console.log(this.about.aboutMe)
  }

  ngOnInit(): void {
  }

}
