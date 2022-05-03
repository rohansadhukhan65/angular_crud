import { Component, OnInit } from '@angular/core';


//  importing components .....
import { ViewTableComponent  } from "../../components/view-table/view-table.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // for delete data from table ...
  deleteData(){
    alert("Data deleted")
  }

}
