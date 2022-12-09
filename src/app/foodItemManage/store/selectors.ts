import { createSelector } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { FoodItemManageStateInterface } from 'src/app/foodItemManage/types/foodItemManageState.interface';

export const foodItemManageFeatureSelector = (state: AppStateInterface) =>
  state.foodItemManage;

export const isSubmittingSelector = createSelector(
  foodItemManageFeatureSelector,
  (foodItemManageState: FoodItemManageStateInterface) =>
    foodItemManageState.isSubmitting
);

export const isLoadingSelector = createSelector(
  foodItemManageFeatureSelector,
  (foodItemManageState: FoodItemManageStateInterface) =>
    foodItemManageState.isLoading
);

export const backendErrorSelector = createSelector(
  foodItemManageFeatureSelector,
  (foodItemManageState: FoodItemManageStateInterface) =>
    foodItemManageState.backendError
);

export const foodItemSelector = createSelector(
  foodItemManageFeatureSelector,
  (foodItemManageState: FoodItemManageStateInterface) =>
    foodItemManageState.foodItem
);

export const isDeletingSelector = createSelector(
  foodItemManageFeatureSelector,
  (foodItemManageState: FoodItemManageStateInterface) =>
    foodItemManageState.isDeleting
);
