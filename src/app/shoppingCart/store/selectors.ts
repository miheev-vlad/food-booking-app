import { createSelector } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ShoppingCartStateInterface } from 'src/app/shoppingCart/types/shoppingCartState.interface';

export const shoppingCartFeatureSelector = (state: AppStateInterface) =>
  state.shoppingCart;

export const shoppingItemsSelector = createSelector(
  shoppingCartFeatureSelector,
  (shoppingCartState: ShoppingCartStateInterface) =>
    shoppingCartState.shoppingItems
);
