import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [Comp1Component, Comp2Component, Comp3Component, Comp4Component, Comp5Component, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
