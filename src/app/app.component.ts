import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <ul>
      <li *ngFor="let carPart of carParts">
        <h2>{{carPart.name | uppercase}}</h2>
        <p>{{carPart.description}}</p>
        <p>{{carPart.price | currency:'EUR':true}}</p>
        <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>
        <p *ngIf="carPart.inStock === 0">Out of Stock</p>
      </li>
    </ul>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'My First Angular App!';
  title = 'Ultra Racing';
  carParts = [{
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
}
