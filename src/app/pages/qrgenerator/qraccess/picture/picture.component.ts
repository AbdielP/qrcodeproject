import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Foto } from 'src/app/interfaces/foto';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  @Input() usercedula: Observable<string>;
  eventSubscription: Subscription;
  foto: string = '';

  constructor(private accessService: AccessService) { }

  ngOnInit(): void {
    this.subscribeEventCedula();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  subscribeEventCedula(): void {
    this.eventSubscription = this.usercedula.subscribe((cedula: string) => {
      this.getPicture(cedula);
    })
  }

  private getPicture(cedula: string): void {
    const body = { cedula }
    this.accessService.getPhoto(body).subscribe((foto: Foto) => {
      if (foto === null) {
        return this.foto = null;
      }
      this.foto = foto.url;
    })
  }

}
