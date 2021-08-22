import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  value: string = '';
  @Output() searchValue = new EventEmitter<String>();
  search(term: string): void {
    if (term.length > 3) {
      // Emitiendo parametro de busqueda al padre (qraccess.component)
      this.searchValue.emit(term);
    }
  }

}
