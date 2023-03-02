import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { Product } from '../catalog/interface/product';
import { mapProductToCartItem } from '../helpers/map-product-to-cart-item.helpers';
@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css']
})
export class CatalogProductComponent {

  @Input() produtcs!: Product
  constructor( private shoppingCartService:ShoppingCartService){}


// Creamos una funcion que agrega un producto del catalogo al carrito de compras

addToCart(){

  const cartItem = mapProductToCartItem(this.produtcs);
  this.shoppingCartService.addItem(cartItem)
}

/*
Antes de llamar el método en el servicio tenemos que convertir el objeto [products] en un objeto [cart Item]
*/


}