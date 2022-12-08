import { createSelector } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { DashboardStateInterface } from 'src/app/dashboard/types/dashboardState.interface';

export const dashboardFeatureSelector = (state: AppStateInterface) =>
  state.dashboard;

export const isLoadingSelector = createSelector(
  dashboardFeatureSelector,
  (dashboardSate: DashboardStateInterface) => dashboardSate.isLoading
);

export const isSubmittingSelector = createSelector(
  dashboardFeatureSelector,
  (dashboardSate: DashboardStateInterface) => dashboardSate.isSubmitting
);

export const foodItemsSelector = createSelector(
  dashboardFeatureSelector,
  (dashboardSate: DashboardStateInterface) => dashboardSate.foodItems
);

export const backendErrorSelector = createSelector(
  dashboardFeatureSelector,
  (dashboardSate: DashboardStateInterface) => dashboardSate.backendError
);
