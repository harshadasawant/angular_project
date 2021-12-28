import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inlinestyle',
  templateUrl: './inlinestyle.component.html',
  styles: [
    `.custom{color:red;
    text-align:center}`
  ]
})
export class InlinestyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
