import { Component } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showHeader = true

  constructor(private shoppingCartService: ShoppingCartService){}

  toggleHeaderVisibility():void{
    this.showHeader =!this.showHeader;
 }

 get itemsCount(){
    return this.shoppingCartService.itemsCount
 }

}
