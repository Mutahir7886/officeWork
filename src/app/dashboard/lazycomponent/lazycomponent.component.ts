import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../../core/services/dataservice.service'

import {apiUrls} from 'src/environments/apis/api.urls'

@Component({
  selector: 'app-lazycomponent',
  templateUrl: './lazycomponent.component.html',
  styleUrls: ['./lazycomponent.component.css']
})
export class LazycomponentComponent implements OnInit {

  todoList: any;

  constructor(private dataservice: DataserviceService) {
    this.getTodoData();
  }

  ngOnInit(): void {
  }
  getTodoData(): void{
    this.dataservice.getTodoData(apiUrls.todoData).subscribe((value) => {
      console.log('value', value)
      this.todoList = value
      console.log('todoList', this.todoList);

    }, error => {
      console.log('todoListerror', error);
    });
  }

  changeStatus(arrayIndex, todoId): void{
    console.log('check');
    console.log('todoId', todoId);
    this.dataservice.updateToDoData(apiUrls.todoDataUpdate + todoId, {
      completed: true,
    }).subscribe((value => {
      console.log('todoUpdateResult', value);
      this.todoList[arrayIndex] = value;
    }), error => {
      console.log('todoUpdateResultError', error);

      }
    );
  }
}
