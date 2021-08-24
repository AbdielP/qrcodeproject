import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-qraccess',
  templateUrl: './qraccess.component.html',
  styleUrls: ['./qraccess.component.css']
})
export class QraccessComponent {

  eventParam: Subject<string> = new Subject<string>();

  // Recivo del hijo (search.component) el parametro de búsqueda
  searchParam(param: string): void {
    // Emite el parametro de busqueda al componente hijo -> (userlist.component)
    this.eventParam.next(param);
  }

}
