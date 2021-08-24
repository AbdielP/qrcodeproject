import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  // Variables para recibir el termino desde el padre
  @Input() term: Observable<string>;
  eventSubscription: Subscription;

  testArray: Array<number> = [];

  constructor(private accessService: AccessService) { }

  ngOnInit(): void {
    this.subscribeEventParam();
    for (let index = 0; index < 15; index++) {
      this.testArray.push(index);
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  //Suscribirse al evento enviado desde el padre para escuchar el parameto de busqueda
  subscribeEventParam(): void {
    this.eventSubscription = this.term.subscribe(term => {
      const body = { termino: term };
      this.accessService.post(body, 'api/cwpidc/acces/search').subscribe(resp => {
        console.log(resp);
      })
    })
  }

}
