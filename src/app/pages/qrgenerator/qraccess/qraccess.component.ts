import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Foto } from 'src/app/interfaces/foto';

@Component({
  selector: 'app-qraccess',
  templateUrl: './qraccess.component.html',
  styleUrls: ['./qraccess.component.css']
})
export class QraccessComponent {

  eventParam: Subject<String> = new Subject<String>();
  eventIdsec: Subject<Number> = new Subject<Number>();
  eventFoto: Subject<Foto> = new Subject<Foto>();
  img: string;

  // Recive del hijo (search.component) el parametro de búsqueda
  searchParam(param: string): void {
    // Emite el parametro de busqueda al componente hijo -> (userlist.component)
    this.eventParam.next(param);
  }

  // Recive del hijo (user.list) el idseguridad para mostrar los detalles del acceso
  getAccessId(idseguridad: number): void {
    // Emite el idseguridad al componente hijo -> (userdetails.component)
    this.eventIdsec.next(idseguridad);
  }

  // Recibe la foto del hijo (user.detail) para pasarlo a search component
  getFoto(foto: Foto): void {
    // this.eventFoto.next(foto);
    this.img = foto.url;
  }

}
