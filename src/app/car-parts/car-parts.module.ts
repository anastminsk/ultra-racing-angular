import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarPartsComponent } from './car-parts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CarPartsComponent],
  providers: [],
  exports: [CarPartsComponent]
})

export class CarPartsModule { }
