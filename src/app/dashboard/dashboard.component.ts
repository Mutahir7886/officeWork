import { Component,Output, EventEmitter,OnInit } from '@angular/core';
import {slideInAnimation} from "../core/animation/animation";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations:[slideInAnimation]
})
export class DashboardComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }
  parrentMessage:string ;
  inputmessage:string;å

check($event):any{
  this.parrentMessage = $event
}

ptag(){
  this.inputmessage='HELLO HOW ARE U'
}



}
