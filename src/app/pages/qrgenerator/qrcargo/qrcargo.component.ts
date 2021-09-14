import { NgForm } from '@angular/forms';
import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-qrcargo',
  templateUrl: './qrcargo.component.html',
  styleUrls: ['./qrcargo.component.css']
})
export class QrcargoComponent {

  data = {
    plantillaCarga: `ID de Cliente: LOC####
Cliente: Nombre_de_la_Empresa_propietaria
Responsable: Nombre_de_la_persona_que_entrega_el_articulo
Teléfono: ####-#### / ####-####
Email: Usuario@DominioDelCliente.com
Fecha de Ingreso: dd/mm/aaaa
Fecha de Egreso: dd/mm/aaaa
SN: X8215467WZ
Marca: Dell
Modelo: Poweredge 2950
Registrado por: Nombre_de_Especialista_IDC`
  }
  qrcode: string = '';
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @ViewChild('screen') screenx: ElementRef;
  @ViewChild('canvas') canvasx: ElementRef;
  @ViewChild('downloadLink') downloadLinkx: ElementRef;

  constructor(private _ngZone: NgZone) { }

  downloadQR(form: NgForm): void {
    // console.log(form.controls.data.value);
    this.generarQR(form.controls.data.value)
  }

  generarQR(data: string): void {
    QRCode.toDataURL(data)
    .then((qrcode: string) => {
      this.qrcode = qrcode;
      // console.log(qrcode);
    })
    .catch(err => {
      console.error(err);
    });
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
