import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(public http: HttpClient) { }

  getTodoData(path: string){
    return this.http.get(path);
  }

  updateToDoData(path, data){
    return this.http.patch(path, data);
  }
}
