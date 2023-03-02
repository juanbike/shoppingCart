import { CartItems } from "../interface/cart-items";
import { Product } from "../catalog/interface/product";

export function mapProductToCartItem(product: Product): CartItems{
    const { imageUrl, name, price }  = product;
    
    return { imageUrl, name, price  }
}