import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private http: HttpClient) { }

  search(term: string): void {
    console.log(term);
  }
}
