import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  listActors=[ {'lastName':'Robert','firstName':'Julia'},
   {'lastName':'Walker','firstName':'Paul'}, {'lastName':'Pitt','firstName':'Brad'}]
// @Input()
  constructor() { }

  ngOnInit(): void {
  }

}
