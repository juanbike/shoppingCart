import { Injectable } from '@angular/core';
import { CartItems } from '../interface/cart-items';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() {}

  items: CartItems[] = [{
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



  deleteItem(itemToDelete: CartItems){
    console.log(itemToDelete);
    return this.items = this.items.filter(item => item !== itemToDelete)
  }


  get total():number{
    return this.items.reduce((aac,{price}) => aac += price, 0)
  }
  
  get itemsCount():number{
     return this.items.length
  }

  addItem(item: CartItems){
    this.items = [...this.items, item]

  }

}
