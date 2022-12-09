import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/foodItemManage/store/actionTypes';
import { FoodItemInputInterface } from 'src/app/shared/types/foodItemInput.interface';

export const updateFoodItemAction = createAction(
  ActionTypes.UPDATE_FOOD_ITEM,
  props<{ id: string; foodItemInput: FoodItemInputInterface }>()
);

export const updateFoodItemSuccessAction = createAction(
  ActionTypes.UPDATE_FOOD_ITEM_SUCCESS
);

export const updateFoodItemFailureAction = createAction(
  ActionTypes.UPDATE_FOOD_ITEM_FAILURE
);
