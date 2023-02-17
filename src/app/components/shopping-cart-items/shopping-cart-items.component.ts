import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItems} from '../interface/cart-items'

@Component({
  selector: 'app-shopping-cart-items',
  templateUrl: './shopping-cart-items.component.html',
  styleUrls: ['./shopping-cart-items.component.css']
})
export class ShoppingCartItemsComponent {
@Input() cartItems!: CartItems

// Eliminar un item en el componente padre
@Output() cartItemDelete = new EventEmitter();
/*

****************************** solo un  objeto *************************
  cartItems : CartItems = {
    imageUrl: 'headphones.jpg',
    name: 'Auriculares',
    price: 5989
  }




*/

// ****************************** Varios Objetos ************************************

/*
cartItems : CartItems[] = [{
  imageUrl: 'headphones.jpg',
  name: 'Auriculares',
  price: 5989
},
{
  imageUrl: 'keyborad.jpg',
  name: 'Teclado',
  price: 123
},
{
  imageUrl: 'monitor.jpg',
  name: 'Monitor',
  price: 456
}
]

*/
onDeleteClick(){
  this.cartItemDelete.emit();
}

}