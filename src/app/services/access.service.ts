import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Search } from 'src/app/interfaces/search';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  searchAccess(body: object, endpoint: string): Observable<Search[]> {
    return this.http.post<Search[]>(`${this.SERVER_URL}/${endpoint}`, body);
  }
}
