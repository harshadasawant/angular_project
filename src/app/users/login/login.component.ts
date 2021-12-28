import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rout : ActivatedRoute) { }

  ngOnInit(): void {
    console.warn("login id = ",this.rout.snapshot.paramMap.get('id'))
  }
  title = "Sample App";
  obj = {
    name:'abc',
    age:8
  }
  today=Date();

  capString(item:string){
    return item.toUpperCase();
  }
  show=false ;
  color='blue';
  items = [1,2,3,4];
  movies:Movie[]= [  
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016', add:[1,2,3]},  
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016',  add:[1,2,3]},  
    {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016',  add:[1,2,3]},  
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016',  add:[1,2,3]},  
];

selectedValue: string= 'One1';  
}   
class Movie {  
title: string = 'title';  
director : string='d1';  
cast : string ='c1';  
releaseDate : string = 'r1';  
add:number[]=[1,2,3];

}  



