import { Component, Output, EventEmitter } from '@angular/core';
import {slideInAnimation} from './core/animation/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {

  parrentMessage:string ;
  inputmessage:string;

check($event):any{
  this.parrentMessage = $event
}

ptag(){
  this.inputmessage='HELLO HOW ARE U'
}



}

