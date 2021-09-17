import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  hoy: any;
  dd: any;
  mm: any;
  yyyy: any;

  constructor() { }

  public getDate(){
    this.hoy = new Date();
    this.dd = this.hoy.getDate();
    this.mm = this.hoy.getMonth() + 1; // Enero es 0!

    this.yyyy = this.hoy.getFullYear();
    if (this.dd < 10) {
      this.dd = '0' + this.dd;
    }
    if (this.mm < 10) {
      this.mm = '0' + this.mm;
    }
    this.hoy = `${this.dd}/${this.mm}/${this.yyyy}`;
    // this.hoy = `${this.yyyy}-${this.mm}-${this.dd}`;
    return this.hoy;
  }
}
