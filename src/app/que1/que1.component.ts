import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component implements OnInit {
  series=[2,3,10,15,26,35,50,63]
  ans:any='?'
  constructor() { }
  userAns:any
  ngOnInit(): void {
  }
  onSubmit(){
    for(let i=0;i<this.series.length;i++){
      if (i==this.userAns){
        this.ans=this.series[i]
        break;
      }
    }
  }

}
