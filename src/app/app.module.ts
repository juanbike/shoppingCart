import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartItemsComponent } from './components/shopping-cart-items/shopping-cart-items.component';
import { HeaderComponent } from './components/header/header.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogProductComponent } from './components/catalog-product/catalog-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartItemsComponent,
    HeaderComponent,
    CatalogComponent,
    CatalogProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
