import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingItemsComponent } from './components/shopping-items/shopping-items.component';
import { ProductListComponent } from './components/shopping-items/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDescriptionComponent } from './components/shopping-items/product-description/product-description.component';
import { CartItemsComponent } from './components/shopping-items/cart-items/cart-items.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { OrderPlacedComponent } from './components/shopping-items/order-placed/order-placed.component';
import { ItemSearchComponent } from './components/shopping-items/item-search/item-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingItemsComponent,
    ProductListComponent,
    ProductDescriptionComponent,
    CartItemsComponent,
    LoginComponent,
    UserDetailsComponent,
    OrderPlacedComponent,
    ItemSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
