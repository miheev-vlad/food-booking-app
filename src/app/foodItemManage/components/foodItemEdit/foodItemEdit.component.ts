import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

import { FoodItemInputInterface } from 'src/app/shared/types/foodItemInput.interface';
import {
  getFoodItemAction,
  removeFoodItemAction,
} from 'src/app/foodItemManage/store/actions/getFoodItem.action';
import { isLoadingSelector } from 'src/app/foodItemManage/store/selectors';
import { updateFoodItemAction } from '../../store/actions/updateFoodItem.action';

@Component({
  selector: 'fba-food-item-edit',
  templateUrl: './foodItemEdit.component.html',
  styleUrls: ['./foodItemEdit.component.scss'],
})
export class FoodItemEditComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  currentFoodItemId: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.route.params.subscribe((params: Params) => {
      this.currentFoodItemId = params['id'];
      if (this.currentFoodItemId) {
        this.store.dispatch(
          getFoodItemAction({ id: this.currentFoodItemId.toString() })
        );
      }
    });
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  ngOnDestroy(): void {
    this.store.dispatch(removeFoodItemAction());
  }

  onSubmit(foodItemInput: FoodItemInputInterface) {
    this.store.dispatch(
      updateFoodItemAction({
        id: this.currentFoodItemId.toString(),
        foodItemInput,
      })
    );
  }
}
