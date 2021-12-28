import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inlinetemplate',
  template: `
    <p class="custom">
      inlinetemplate works!
    </p>
  `,
  styleUrls: ['./inlinetemplate.component.css']
})
export class InlinetemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
