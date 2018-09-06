import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarPartsModule } from './car-parts/car-parts.module';
import { RacingDataService } from './car-parts/racing-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CarPartsModule
  ],
  providers: [RacingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
