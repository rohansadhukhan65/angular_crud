import { Component } from '@angular/core';
import { NewTmpComponent } from "../app/new-tmp/new-tmp.component";
import { NewCmpComponent } from './new-cmp/new-cmp.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-crud';

  showData(){
    console.log("showData function")
    return 'it is a function'
  }
}
