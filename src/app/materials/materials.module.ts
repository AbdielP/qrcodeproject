import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const modules = [MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, 
  MatListModule, MatDividerModule, ScrollingModule, MatTooltipModule, MatProgressSpinnerModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules]
})
export class MaterialsModule { }
