import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  post(body: object, endpoint: string): Observable<any> {
    return this.http.post(`${this.SERVER_URL}/${endpoint}`, body)
    .pipe((catchError(err => [
      console.log(err)
    ])));
  }
}
