import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';
import { addItemAction } from 'src/app/shoppingCart/store/actions/shoppingCart.actions';
import { ShoppingItemInterface } from 'src/app/shoppingCart/types/shoppingItem.interface';

@Component({
  selector: 'fba-food-item-card',
  templateUrl: './foodItemCard.component.html',
  styleUrls: ['./foodItemCard.component.scss'],
})
export class FoodItemCardComponent {
  @Input('foodItem') foodItemProps: FoodItemInterface;

  constructor(private store: Store<AppStateInterface>) {}

  onAddToCart(): void {
    const shoppingItem: ShoppingItemInterface = {
      ...this.foodItemProps,
      quantity: 1,
      cost: this.foodItemProps.price,
    };
    this.store.dispatch(addItemAction({ shoppingItem }));
  }
}
