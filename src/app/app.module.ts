import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts/car-parts.component';
import { RacingDataService } from './car-parts/racing-data.service'

@NgModule({
  declarations: [
    AppComponent,
    CarPartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RacingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
