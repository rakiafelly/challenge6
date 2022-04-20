import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  listActors:any
  @Output() public childEvent= new EventEmitter()
  Actor: any;
  deleteActor(i:any): void{
this.Actor.slice()
  }
ajoutActor(){
this.Actor.push()
}
  constructor() { }

  ngOnInit(): void {
  }
  
}

