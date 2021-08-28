import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AccessDetail } from 'src/app/interfaces/access-detail'
import { AccessService } from 'src/app/services/access.service';
import { Search } from 'src/app/interfaces/search';

import QRCode from 'qrcode';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  // Variables para recibir el idseguridad desde el padre
  @Input() idseg: Observable<number>;
  eventSubscription: Subscription;
  
  @Output() usercedula = new EventEmitter<string>();
  detalleAcceso: AccessDetail;
  qrcode: string = '';

  @ViewChild('screen') screenx: ElementRef;
  @ViewChild('canvas') canvasx: ElementRef;
  @ViewChild('downloadLink') downloadLinkx: ElementRef;

  showSpinner: boolean = false;

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
      this.showSpinner = true;
      const body = { idseguridad: idseguridad }
      this.accessService.detailAccess(body).subscribe((resp: AccessDetail) => {
        this.detalleAcceso = resp;
        this.showSpinner = false;
        this.usercedula.emit(this.detalleAcceso.cedula_visitante);
        this.generarQR(this.detalleAcceso.cedula_visitante);
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

  downloadQR(nombre: string, cedula: string): void {
    html2canvas(this.screenx.nativeElement).then(canvas => {
      this.canvasx.nativeElement.src = canvas.toDataURL();
      this.downloadLinkx.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLinkx.nativeElement.download = `QR_${nombre}_${cedula}.png`;
      this.downloadLinkx.nativeElement.click();
    });
  }

}
