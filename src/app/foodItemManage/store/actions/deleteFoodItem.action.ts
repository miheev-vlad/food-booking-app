import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/foodItemManage/store/actionTypes';

export const deleteFoodItemAction = createAction(
  ActionTypes.DELETE_FOOD_ITEM,
  props<{ id: string }>()
);

export const deleteFoodItemSuccessAction = createAction(
  ActionTypes.DELETE_FOOD_ITEM_SUCCESS
);

export const deleteFoodItemFailureAction = createAction(
  ActionTypes.DELETE_FOOD_ITEM_FAILURE
);
