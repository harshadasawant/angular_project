import { Component } from '@angular/core';
import{UserdataService} from './services/userdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GettingStarted1';
  // interpolution example
  name='harshada';
  getName(){
    return this.name;
  }
  obj={
    name:'daksh',
    age:'8'
  }
  arr=['abc','xyz'];
  users :any;
  constructor(private userData : UserdataService){
  
    this.userData.users().subscribe((data) => {
      console.warn("data",data);
      this.users = data;
      
    })
  }
  name1:any

  data1 ={
    name:"harshada1",
    course:"java1"
  };

}
