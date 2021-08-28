import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  @Input() usercedula: Observable<string>;
  eventSubscription: Subscription;

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.subscribeEventCedula();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  subscribeEventCedula(): void {
    this.eventSubscription = this.usercedula.subscribe((cedula: string) => {
      console.log(cedula);
    })
  }

}
