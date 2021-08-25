import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Foto } from 'src/app/interfaces/foto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value: string = '';
  @Input() foto: Observable<Foto>;
  eventSubscription: Subscription;
  @Output() searchValue = new EventEmitter<String>();

  ngOnInit(): void {
    this.subscribeFoto();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  search(term: string): void {
    if (term.length > 3) {
      // Emitiendo parametro de busqueda al padre (qraccess.component)
      this.searchValue.emit(term);
    }
  }

  subscribeFoto(): void {
    this.eventSubscription = this.foto.subscribe((foto: Foto) => {
      console.log(foto);
    })
  }

}
