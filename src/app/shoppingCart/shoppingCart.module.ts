import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingCartComponent } from 'src/app/shoppingCart/components/shoppingCart/shoppingCart.component';
import { reducers } from 'src/app/shoppingCart/store/reducers';
import { CheckoutSnackBarComponent } from 'src/app/shoppingCart/components/checkoutSnackBar/checkoutSnackBar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('shoppingCart', reducers),
  ],
  declarations: [ShoppingCartComponent, CheckoutSnackBarComponent],
  exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
