import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Proyecto } from '../interfaces/proyecto';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  selectProjects(): Observable<Proyecto[]> {
    return this.http.get(`${this.SERVER_URL}/api/cwpidc/projects/getprojects`)
    .pipe(map((resp: Proyecto) => {
      return resp['proyectos'];
    }),(catchError(err => [
      console.log(err)
    ])));
  }
}
