import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AccessDetail } from 'src/app/interfaces/access-detail';
import { Foto } from 'src/app/interfaces/foto';
import { AccessService } from 'src/app/services/access.service';
import QRCode from 'qrcode';

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
  qrcode: string;

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
        this.generarQR(this.detalleAcceso.cedula_visitante)
      })
    })
  }

  generarQR(info: string): void {
    QRCode.toDataURL(`http://cwp-idc-sca/seguridad/agentsec/reg_visita_in.php?cedula_visitante=${info}&button=Buscar`)
    .then((url: string) => {
      this.qrcode = url;
      // console.log(this.qrcode);
    })
    .catch(err => {
      console.error(err);
    });
  }


}
