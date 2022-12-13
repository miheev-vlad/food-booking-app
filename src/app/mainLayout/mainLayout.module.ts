import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FoodItemsListModule } from '../foodItemsList/foodItemsList.module';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartModule } from '../shoppingCart/shoppingCart.module';
import { MainLayoutComponent } from './components/mainLayout/mainLayout.component';
import { MainLayoutRoutingModule } from './mainLayout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MainLayoutRoutingModule,
    FoodItemsListModule,
    ShoppingCartModule,
  ],
  declarations: [MainLayoutComponent],
})
export class MainLayoutModule {}
