import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import {
  deleteAllItemsAction,
  deleteItemAction,
  updateItemAction,
} from 'src/app/shoppingCart/store/actions/shoppingCart.actions';
import { ShoppingItemInterface } from 'src/app/shoppingCart/types/shoppingItem.interface';
import { shoppingItemsSelector } from 'src/app/shoppingCart/store/selectors';
import { CheckoutSnackBarComponent } from 'src/app/shoppingCart/components/checkoutSnackBar/checkoutSnackBar.component';

@Component({
  selector: 'fba-shopping-cart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingItems$: Observable<ShoppingItemInterface[]>;
  durationInSeconds = 5;

  constructor(
    private store: Store<AppStateInterface>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.shoppingItems$ = this.store.pipe(select(shoppingItemsSelector));
  }

  onDeleteItem(id: string): void {
    this.store.dispatch(deleteItemAction({ id }));
  }

  onCheckout(): void {
    this._snackBar.openFromComponent(CheckoutSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
    });
    this.store.dispatch(deleteAllItemsAction());
  }

  onUpdateItem(id: string, quantity: number, cost: number): void {
    this.store.dispatch(updateItemAction({ id, quantity, cost }));
  }
}
