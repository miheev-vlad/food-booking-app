import { Action, createReducer, on } from '@ngrx/store';

import { FoodItemManageStateInterface } from 'src/app/foodItemManage/types/foodItemManageState.interface';
import {
  createFoodItemAction,
  createFoodItemFailureAction,
  createFoodItemSuccessAction,
} from 'src/app/foodItemManage/store/actions/createFoodItem.action';
import {
  getFoodItemAction,
  getFoodItemFailureAction,
  getFoodItemSuccessAction,
  removeFoodItemAction,
} from 'src/app/foodItemManage/store/actions/getFoodItem.action';
import {
  updateFoodItemAction,
  updateFoodItemFailureAction,
  updateFoodItemSuccessAction,
} from 'src/app/foodItemManage/store/actions/updateFoodItem.action';
import {
  deleteFoodItemAction,
  deleteFoodItemFailureAction,
  deleteFoodItemSuccessAction,
} from './actions/deleteFoodItem.action';

const initialState: FoodItemManageStateInterface = {
  isSubmitting: false,
  backendError: null,
  isLoading: false,
  foodItem: null,
  isDeleting: false,
};

const foodItemMangeReducers = createReducer(
  initialState,
  on(
    createFoodItemAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    createFoodItemSuccessAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createFoodItemFailureAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    getFoodItemAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFoodItemSuccessAction,
    (state, action): FoodItemManageStateInterface => ({
      ...state,
      isLoading: false,
      foodItem: action.foodItem,
    })
  ),
  on(
    getFoodItemFailureAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    removeFoodItemAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      foodItem: null,
    })
  ),
  on(
    updateFoodItemAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateFoodItemSuccessAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateFoodItemFailureAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    deleteFoodItemAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      isDeleting: true,
    })
  ),
  on(
    deleteFoodItemSuccessAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      isDeleting: false,
    })
  ),
  on(
    deleteFoodItemFailureAction,
    (state): FoodItemManageStateInterface => ({
      ...state,
      isDeleting: false,
    })
  )
);

export function reducers(state: FoodItemManageStateInterface, action: Action) {
  return foodItemMangeReducers(state, action);
}
