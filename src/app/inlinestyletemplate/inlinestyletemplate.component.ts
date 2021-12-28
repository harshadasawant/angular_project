import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inlinestyletemplate',
  template: `
    <p class="custom">
      inlinestyletemplate works!
    </p>
  `,
  styles: [
    `.custom{color:pink;
      text-align:center}`
  ]
})
export class InlinestyletemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
