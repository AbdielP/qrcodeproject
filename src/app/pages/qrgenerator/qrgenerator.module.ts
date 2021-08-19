import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrgeneratorRoutingModule } from './qrgenerator-routing.module';
import { QraccessComponent } from './qraccess/qraccess.component';
import { QrcargoComponent } from './qrcargo/qrcargo.component';
import { QrgeneratorComponent } from './qrgenerator.component';


@NgModule({
  declarations: [QraccessComponent, QrcargoComponent, QrgeneratorComponent],
  imports: [
    CommonModule,
    QrgeneratorRoutingModule
  ]
})
export class QrgeneratorModule { }
