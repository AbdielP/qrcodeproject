import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  testArray: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 15; index++) {
      this.testArray.push(index);
    }
  }

}
