import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Search } from 'src/app/interfaces/search';
import { AccessDetail } from 'src/app/interfaces/access-detail';
import { Foto } from '../interfaces/foto';
import { Vigencia } from '../interfaces/accesos/vigencia';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  searchAccess(body: object, url: string): Observable<Search[]> {
    return this.http.post<object>(`${this.SERVER_URL}/${url}`, body)
    .pipe(map((resp: Search) => {
      return resp['personal'];
    }),(catchError(err => [
      console.log(err)
    ])));
  }

  detailAccess(body: object): Observable<AccessDetail> {
    return this.http.post<object>(`${this.SERVER_URL}/api/cwpidc/acces/details`, body)
    .pipe(map((resp: AccessDetail) => {
      return resp['detalleAcceso'];
    }),(catchError(err => [
      console.log(err)
    ])));
  }

  getPhoto(body: object): Observable<Foto> {
    return this.http.post<object>(`${this.SERVER_URL}/api/cwpidc/acces/picture`, body)
    .pipe(map((resp: Search) => {
      return resp['foto'];
    }),(catchError(err => [
      console.log(err)
    ])));
  }

  getAccessVigencia(body: object): Observable<Vigencia> {
    return this.http.post<object>(`${this.SERVER_URL}/api/cwpidc/acces/details/vigencia`, body)
    .pipe(map((resp: Vigencia) => {
      return resp['estado'][0];
    }),(catchError(err => [
      console.log(err)
    ])));
  }

  // .pipe(retry(1) parece útil...
}
