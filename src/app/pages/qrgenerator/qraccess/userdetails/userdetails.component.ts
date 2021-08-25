import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AccessDetail } from 'src/app/interfaces/access-detail';
import { Foto } from 'src/app/interfaces/foto';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  // Variables para recibir el idseguridad desde el padre
  @Input() idseg: Observable<number>;
  eventSubscription: Subscription;
  
  @Output() foto = new EventEmitter<Foto>();
  detalleAcceso: AccessDetail;

  constructor(private accessService: AccessService) { }

  ngOnInit(): void {
    this.subscribeEventIdsec();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  subscribeEventIdsec(): void {
    this.eventSubscription = this.idseg.subscribe((idseguridad: number) => {
      const body = { idseguridad: idseguridad }
      this.accessService.detailAccess(body).subscribe((resp: any) => {
        this.detalleAcceso = resp.detalleAcceso;
        // Emite la foto de perfil de acceso al componente padre qraccess.component
        this.foto.emit(resp.foto);
      })
    })
  }

}
