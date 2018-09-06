import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';
import { RacingDataService } from './racing-data.service';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})

export class CarPartsComponent {
  carParts: CarPart[];

  ngOnInit() {
    let racingDataService = new RacingDataService();
    this.carParts = racingDataService.getCarParts();
  }

  totalCarParts() {
    return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
  }

  upQuantity(carPart) {
    if (carPart.quantity < carPart.inStock) {
      carPart.quantity++;
    }
  }

  downQuantity(carPart) {
    if (carPart.quantity !== 0) {
      carPart.quantity--;
    }
  }
}
