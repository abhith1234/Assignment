import { Component, OnInit } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { Comp3Component } from '../comp3/comp3.component';
import { Comp4Component } from '../comp4/comp4.component';
import { Comp5Component } from '../comp5/comp5.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
