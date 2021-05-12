import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message:string;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() tabValue = new EventEmitter<string>();
  @Input() Hello :string ='starting';
  title = 'check';

  actionA(){
  this.tabValue.emit('A')
  console.log(this.tabValue)
  }

  actionB(){
    this.tabValue.emit('B')
    console.log(this.tabValue)
    }

  actionC(){
    this.tabValue.emit('C')
    console.log(this.tabValue)
    }

  actionD(){
      this.tabValue.emit('D')
      console.log(this.tabValue)
      }

}
