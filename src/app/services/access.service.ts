import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Search } from 'src/app/interfaces/search';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  searchAccess(body: object): Observable<Search[]> {
    return this.http.post<object>(`${this.SERVER_URL}/api/cwpidc/acces/search`, body)
    .pipe(map((resp: Search) => {
      return resp['personal'];
    }),(catchError(err => [
      console.log(err)
    ])));
  }

  detailAccess(body: object): Observable<any> { //Cagué, aquí observables de 2 tipos, AccesDetail y Foto
    return this.http.post<object>(`${this.SERVER_URL}/api/cwpidc/acces/details`, body)
    .pipe((catchError(err => [
      console.log(err)
    ])));
  }
  // .pipe(retry(1) parece útil...
}
