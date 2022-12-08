import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/dashboard/store/actionTypes';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';

export const getFoodItemsAction = createAction(ActionTypes.GET_FOOD_ITEMS);

export const getFoodItemsSuccessAction = createAction(
  ActionTypes.GET_FOOD_ITEMS_SUCCESS,
  props<{ foodItems: FoodItemInterface[] }>()
);

export const getFoodItemsFailureAction = createAction(
  ActionTypes.GET_FOOD_ITEMS_FAILURE
);
