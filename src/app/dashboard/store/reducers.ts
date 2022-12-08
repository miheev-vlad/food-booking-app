import { Action, createReducer, on } from '@ngrx/store';

import { DashboardStateInterface } from 'src/app/dashboard/types/dashboardState.interface';
import {
  getFoodItemsAction,
  getFoodItemsFailureAction,
  getFoodItemsSuccessAction,
} from 'src/app/dashboard/store/actions/getFoodItems.action';

const initialState: DashboardStateInterface = {
  isSubmitting: false,
  isLoading: false,
  foodItems: null,
  backendError: null,
};

const foodItemsReducers = createReducer(
  initialState,
  on(
    getFoodItemsAction,
    (state): DashboardStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFoodItemsSuccessAction,
    (state, action): DashboardStateInterface => ({
      ...state,
      isLoading: false,
      foodItems: action.foodItems,
    })
  ),
  on(
    getFoodItemsFailureAction,
    (state): DashboardStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: DashboardStateInterface, action: Action) {
  return foodItemsReducers(state, action);
}
