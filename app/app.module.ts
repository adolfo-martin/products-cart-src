import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CartReducer } from './store/cart/cart-reducer';
import { ApplicationHeaderComponent } from './components/application-header/application-header.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { ApplicationMenuComponent } from './components/application-menu/application-menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsPageComponent },
  { path: 'cart', component: CartPageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ApplicationHeaderComponent,
    ProductsTableComponent,
    ProductsPageComponent,
    CartPageComponent,
    CartTableComponent,
    ApplicationMenuComponent
  ],
  imports: [
    BrowserModule,
    // @ts-ignore
    StoreModule.forRoot({ cartItems: CartReducer}),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
