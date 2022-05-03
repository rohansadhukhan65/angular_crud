import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-tmp',
  template: `
    <p class="change-clr">
      new-tmp works!
    </p>
  `,
  styleUrls: ['./new-tmp.component.css']
})
export class NewTmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
