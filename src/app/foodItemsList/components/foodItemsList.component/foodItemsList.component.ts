import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getFoodItemsAction } from 'src/app/dashboard/store/actions/getFoodItems.action';
import { foodItemsSelector } from 'src/app/dashboard/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';

@Component({
  selector: 'fba-food-items-list',
  templateUrl: './foodItemsList.component.html',
  styleUrls: ['./foodItemsList.component.scss'],
})
export class FoodItemsListComponent implements OnInit {
  foodItems$: Observable<FoodItemInterface[]>;
  gridColumns = 3;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.store.dispatch(getFoodItemsAction());
    this.foodItems$ = this.store.pipe(select(foodItemsSelector));
  }
}
