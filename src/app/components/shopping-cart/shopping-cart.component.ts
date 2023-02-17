import { Component } from '@angular/core';
import { CartItems } from '../interface/cart-items';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems : CartItems[] = [{
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
    this.cartItems = this.cartItems.filter(item => item !== itemToDelete)
  }


  get total():number{
    return this.cartItems.reduce((aac,{price}) => aac += price, 0)
  }
}
