import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styles: [
    `.custom-css{
      color:red;
    }
    `
  ]
})
export class NewCmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
