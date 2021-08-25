import { Subscription } from 'rxjs';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  value: string = '';
  eventSubscription: Subscription;
  @Output() searchValue = new EventEmitter<String>();
  // tslint:disable-next-line: use-lifecycle-interface

  search(term: string): void {
    if (term.length > 3) {
      // Emitiendo parametro de busqueda al padre (qraccess.component)
      this.searchValue.emit(term);
    }
  }

}
