import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getFoodItemAction } from 'src/app/foodItemManage/store/actions/getFoodItem.action';
import {
  foodItemSelector,
  isLoadingSelector,
} from 'src/app/foodItemManage/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';

@Component({
  selector: 'fba-foo-item-details',
  templateUrl: './foodItemDetails.component.html',
  styleUrls: ['./foodItemDetails.component.scss'],
})
export class FoodItemDetailsComponent implements OnInit, OnDestroy {
  foodItem: FoodItemInterface;
  foodItemId: string;
  foodItemSub: Subscription;
  isLoading$: Observable<boolean>;
  panelOpenState = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.foodItemId = params['id'];
      if (this.foodItemId) {
        this.fetchData();
        this.initializeValues();
      }
    });
  }

  fetchData(): void {
    this.store.dispatch(getFoodItemAction({ id: this.foodItemId }));
  }

  initializeValues(): void {
    this.foodItemSub = this.store
      .pipe(select(foodItemSelector))
      .subscribe((foodItem: FoodItemInterface) => {
        this.foodItem = foodItem;
      });
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  ngOnDestroy(): void {
    this.foodItemSub.unsubscribe();
  }
}
