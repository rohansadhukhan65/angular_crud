import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:any;
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
