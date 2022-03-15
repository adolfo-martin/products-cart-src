import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CartReducer } from './store/cart/cart-reducer';
import { ApplicationHeaderComponent } from './components/application-header/application-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationHeaderComponent
  ],
  imports: [
    BrowserModule,
    // @ts-ignore
    StoreModule.forRoot({ cartItems: CartReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
