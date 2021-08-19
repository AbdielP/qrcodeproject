import { QrcargoComponent } from './qrcargo/qrcargo.component';
import { QraccessComponent } from './qraccess/qraccess.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'acceso', component: QraccessComponent },
  { path: 'carga', component: QrcargoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrgeneratorRoutingModule { }
