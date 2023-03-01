import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  
  readonly products: Product[] = [{
    imageUrl: 'headphones.jpg',
    name: 'Auriculares',
    price: 5989
  },
  {
    imageUrl: 'keyboard.jpg',
    name: 'Teclado',
    price: 123
  },
  {
    imageUrl: 'monitor.jpg',
    name: 'Monitor',
    price: 456
  }
  ]


}
