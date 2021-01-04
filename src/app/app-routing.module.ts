import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import {Que1Component} from './que1/que1.component';
import {Que2Component} from './que2/que2.component';
import {Que3Component} from './que3/que3.component';
import {Que4Component} from './que4/que4.component';

const routes: Routes = [
{path:'Que1',component:Que1Component},
{path:'Que2',component:Que2Component},
{path:'Que3',component:Que3Component},
{path:'Que4',component:Que4Component},
{path:'home',component:HomeComponent,
   children:[
     {path:'home',loadChildren:()=>import('./home/home-routing.module').then(m=>m.HomeRoutingModule)}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
