import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  // Variables para recibir el idseguridad desde el padre
  @Input() idseg: Observable<number>;
  eventSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscribeEventIdsec();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  subscribeEventIdsec(): void {
    this.eventSubscription = this.idseg.subscribe((idseguridad: number) => {
      console.log(idseguridad);
    })
  }

}
