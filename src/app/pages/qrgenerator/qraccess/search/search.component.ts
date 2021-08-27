import { Subscription } from 'rxjs';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value: string = '';
  eventSubscription: Subscription;
  @Output() searchValue = new EventEmitter<String>();
  @Output() searchByProject = new EventEmitter<Object>();
  projects: Proyecto[] = [];

  constructor(private generalService: GeneralService) {}
  
  ngOnInit(): void {
    this.getProjects();
  }

  search(term: string): void {
    if (term.length > 3) {
      // Emitiendo parametro de busqueda al padre (qraccess.component)
      this.searchValue.emit(term);
    }
  }

  getProjects(): void {
    this.generalService.selectProjects().subscribe((resp: Proyecto[]) => {
      // console.log(resp);
      this.projects = resp;
    })
  }

  doSomething(event: MatSelectChange): void {
    const value = event.value;
    this.searchByProject.emit(value);
  }

}
