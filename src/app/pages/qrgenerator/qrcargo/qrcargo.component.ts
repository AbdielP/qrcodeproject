import { NgForm } from '@angular/forms';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-qrcargo',
  templateUrl: './qrcargo.component.html',
  styleUrls: ['./qrcargo.component.css']
})
export class QrcargoComponent implements OnInit {

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

  constructor(private _ngZone: NgZone) { }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  ngOnInit(): void {
  }

  downloadQR(form: NgForm): void {
    console.log(form);
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
