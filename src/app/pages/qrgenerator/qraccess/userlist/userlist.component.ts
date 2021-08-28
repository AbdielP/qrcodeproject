import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AccessService } from 'src/app/services/access.service';
import { Search } from 'src/app/interfaces/search';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  // Variables para recibir el termino desde el padre
  @Input() term: Observable<string>;
  @Input() project: Observable<Object>;
  eventSubscription: Subscription;
  searchArray: Array<Search> = [];
  showSpinner: boolean;

  @Output() idseguridad = new EventEmitter<number>();

  constructor(private accessService: AccessService) { 
    this.showSpinner = false;
  }

  ngOnInit(): void {
    this.subscribeEventProject();
    this.subscribeEventParam();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  private subscribeEventProject(): void {
    this.eventSubscription = this.project.subscribe((value: object) => {
      // console.log(value);
      this.showSpinner = true;
      this.callSearchService(value, 'api/cwpidc/acces/search/project');
    });
  }

  //Suscribirse al evento enviado desde el padre para escuchar el parameto de busqueda
  private subscribeEventParam(): void {
    this.eventSubscription = this.term.subscribe((term: string) => {
      this.showSpinner = true;
      const body = { termino: term };
      this.callSearchService(body, 'api/cwpidc/acces/search');
    })
  }

  private callSearchService(body: object, url: string): void {
    this.accessService.searchAccess(body, url).subscribe((resp: Array<Search>) => {
      this.searchArray = resp;
      console.log(this.searchArray);
      this.showSpinner = false;
    });
  }

  onClick(id: number):void {
    // Emitiendo idseguridad del acceso clieckeado en la lista hacia el componente padre (qraccess.component)
    this.idseguridad.emit(id);
  }

}
