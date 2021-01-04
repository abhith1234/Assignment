import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que3',
  templateUrl: './que3.component.html',
  styleUrls: ['./que3.component.css']
})
export class Que3Component implements OnInit {
  noOfContactFields=[{phone:'',id:0}];
  constructor() { }

  ngOnInit(): void {
  }
  onAdd(){
    let phone:any= new Object()
    let No=this.noOfContactFields.length
    let val='phone'
    phone['val']=''
    phone['id']=No
    this.noOfContactFields.push(phone)
  }
  onSubmit(){
    for(let j=0;j<this.noOfContactFields.length;j++){
      console.log(`phone No ${this.noOfContactFields[j].id+1}:`+this.noOfContactFields[j].phone)
    }
  }
  onDelete(id:number){
    this.noOfContactFields.splice(this.noOfContactFields.findIndex(a => a.id === id) , 1)

  }
}
