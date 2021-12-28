import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IEmployee} from '../employee';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = "https://jsonplaceholder.typicode.com/todos/1";
  constructor(private http : HttpClient) { }
  users(){
   return this.http.get(this.url);
  }

  getEmployees() :Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>("/assets/employee.json");
  }
}
