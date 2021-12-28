import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import {IEmployee} from '../employee';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private employeeService : UserdataService) { }
  public employees : IEmployee[] =[];
  ngOnInit(): void {
    
    this.employeeService.getEmployees().subscribe((data:IEmployee[]) =>    
       this.employees = data
      
    );

  }

}
