import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcargo',
  templateUrl: './qrcargo.component.html',
  styleUrls: ['./qrcargo.component.css']
})
export class QrcargoComponent implements OnInit {

  qrcode: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  downloadQR(): void {}

}
