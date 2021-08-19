import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrgeneratorRoutingModule } from './qrgenerator-routing.module';
import { QraccessComponent } from './qraccess/qraccess.component';
import { QrcargoComponent } from './qrcargo/qrcargo.component';

@NgModule({
  declarations: [QraccessComponent, QrcargoComponent],
  imports: [
    CommonModule,
    QrgeneratorRoutingModule
  ]
})
export class QrgeneratorModule { }
