import { Component, OnInit } from '@angular/core';
import { CartItems } from '../interface/cart-items';
import { ShoppingCartService} from '../service/shopping-cart.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  showItems = true; //mostramos/ocultamos items

  constructor(private shoppingcartservice: ShoppingCartService){}
  
  cartItems: CartItems[] = this.shoppingcartservice.items;

  get total(){
    return this.shoppingcartservice.total;
  }

  deleteItem(itemToDelete: CartItems): void{
   this.shoppingcartservice.deleteItem(itemToDelete);
  }

  toggleItemsVisibility():void{
     this.showItems =!this.showItems;
  }

  ngOnInit(): void {
    
  }

}
