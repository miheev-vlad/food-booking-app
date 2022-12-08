import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';
import { getFoodItemsAction } from '../../store/actions/getFoodItems.action';
import { foodItemsSelector, isLoadingSelector } from '../../store/selectors';

@Component({
  selector: 'fba-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  foodItems$: Observable<FoodItemInterface[]>;
  isLoading$: Observable<boolean>;
  searchStr = '';

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  fetchData(): void {
    this.store.dispatch(getFoodItemsAction());
  }

  initializeValues(): void {
    this.foodItems$ = this.store.pipe(select(foodItemsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
}
