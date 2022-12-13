import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/shoppingCart/store/actionTypes';
import { ShoppingItemInterface } from 'src/app/shoppingCart/types/shoppingItem.interface';

export const addItemAction = createAction(
  ActionTypes.ADD_ITEM,
  props<{ shoppingItem: ShoppingItemInterface }>()
);

export const deleteItemAction = createAction(
  ActionTypes.DELETE_ITEM,
  props<{ id: string }>()
);

export const updateItemAction = createAction(
  ActionTypes.UPDATE_ITEM,
  props<{ id: string; quantity: number; cost: number }>()
);

export const deleteAllItemsAction = createAction(ActionTypes.DELETE_All_ITEMS);
