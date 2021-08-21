import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrgeneratorRoutingModule } from './qrgenerator-routing.module';
import { QraccessComponent } from './qraccess/qraccess.component';
import { QrcargoComponent } from './qrcargo/qrcargo.component';
import { SearchComponent } from './qraccess/search/search.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { UserlistComponent } from './qraccess/userlist/userlist.component';
import { UserdetailsComponent } from './qraccess/userdetails/userdetails.component';

@NgModule({
  declarations: [QraccessComponent, QrcargoComponent, SearchComponent, UserlistComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    QrgeneratorRoutingModule
  ]
})
export class QrgeneratorModule { }
