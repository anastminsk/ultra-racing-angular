import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarPartsComponent } from './car-parts.component';

@NgModule({
  declarations: [CarPartsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [CarPartsComponent]
})

export class CarPartsModule { }
