import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDescriptionComponent} from 'src/app/components/shopping-items/product-description/product-description.component';
import { CartItemsComponent } from './components/shopping-items/cart-items/cart-items.component';
import { ItemSearchComponent } from './components/shopping-items/item-search/item-search.component';
import { OrderPlacedComponent } from './components/shopping-items/order-placed/order-placed.component';
import { ShoppingItemsComponent } from './components/shopping-items/shopping-items.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';

const routes: Routes = [
  {path: '', component: ShoppingItemsComponent},
  {path: 'product', component: ProductDescriptionComponent},
  {path: 'product/:id', component: ProductDescriptionComponent},
  {path: 'cart', component: CartItemsComponent},
  {path: 'cart/:id', component: CartItemsComponent},
  {path: 'userDetails', component: UserDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'orderPlaced', component: OrderPlacedComponent},
  {path: 'search/:name', component: ItemSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
