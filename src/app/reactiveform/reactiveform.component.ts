import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestapiserviceService } from '../services/restapiservice.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private restapi : RestapiserviceService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required,Validators.email]),
    password : new FormControl(''),
  })
  
  loginUser(data:any){
    console.warn(this.loginForm.value)
    
    this.restapi.saveEmployees(data).subscribe((result)=>{
      console.warn(result);
    })
    
   
  }
  users:any
  display(){
    this.restapi.users().subscribe((data) =>{
      console.warn("data",data);
      this.users = data;
    });
  }

  get user1(){

    return this.loginForm.get('user')
  }

}
