import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/foodItemManage/store/actionTypes';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';

export const getFoodItemAction = createAction(
  ActionTypes.GET_FOOD_ITEM,
  props<{ id: string }>()
);

export const getFoodItemSuccessAction = createAction(
  ActionTypes.GET_FOOD_ITEM_SUCCESS,
  props<{ foodItem: FoodItemInterface }>()
);

export const getFoodItemFailureAction = createAction(
  ActionTypes.GET_FOOD_ITEM_FAILURE
);

export const removeFoodItemAction = createAction(ActionTypes.REMOVE_FOOD_ITEM);
