import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { ActorsComponent } from './actors/actors.component';
import { ParentComponent } from './parent/parent.component';
const routes: Routes = [
  {
    path:'actor',
    component:ActorComponent,
  },
  {
    path:'actors',
    component : ActorsComponent,
  },
  {
  
    path:'parent',
    component:ParentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
