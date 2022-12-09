import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/foodItemManage/store/actionTypes';
import { FoodItemInputInterface } from 'src/app/shared/types/foodItemInput.interface';

export const createFoodItemAction = createAction(
  ActionTypes.CREATE_FOOD_ITEM,
  props<{ foodItemInput: FoodItemInputInterface }>()
);

export const createFoodItemSuccessAction = createAction(
  ActionTypes.CREATE_FOOD_ITEM_SUCCESS
);

export const createFoodItemFailureAction = createAction(
  ActionTypes.CREATE_FOOD_ITEM_FAILURE
);
