import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const modules = [MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules]
})
export class MaterialsModule { }
