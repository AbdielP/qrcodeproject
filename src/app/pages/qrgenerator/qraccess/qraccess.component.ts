import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qraccess',
  templateUrl: './qraccess.component.html',
  styleUrls: ['./qraccess.component.css']
})
export class QraccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Recivo del hijo (search.component) el parametro de búsqueda
  searchParam(param: string): void {
    // Podría emitirlo al hijo (userlist.component), o realizar la búsqueda en la base de datos aquí?
    console.log(param);
  }

}
