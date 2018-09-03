import { Component } from '@angular/core';
import { CarPart } from './car-part';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})

export class CarPartsComponent {
  carParts: CarPart[] = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the best",
    "inStock": 5,
    "price": 4.99
  },
  {
    "id": 2,
    "name": "Reinforced Shocks",
    "description": "Shocks made from kryptonite",
    "inStock": 4,
    "price": 9.99
  },
  {
    "id": 3,
    "name": "Padded Seats",
    "description": "Super soft seats for a smooth ride",
    "inStock": 0,
    "price": 24.99
  }];

  totalCarParts() {
    return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
  }
}
