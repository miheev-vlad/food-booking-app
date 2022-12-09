import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

import { FoodItemInputInterface } from 'src/app/shared/types/foodItemInput.interface';
import { createFoodItemAction } from '../../store/actions/createFoodItem.action';

@Component({
  selector: 'fba-food-item-create',
  templateUrl: './foodItemCreate.component.html',
  styleUrls: ['./foodItemCreate.component.scss'],
})
export class FoodItemCreateComponent {
  constructor(private store: Store<AppStateInterface>) {}

  onSubmit(foodItemInput: FoodItemInputInterface) {
    this.store.dispatch(createFoodItemAction({ foodItemInput }));
  }
}
