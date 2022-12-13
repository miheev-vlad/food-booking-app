import { Action, createReducer, on } from '@ngrx/store';

import { ShoppingCartStateInterface } from 'src/app/shoppingCart/types/shoppingCartState.interface';
import { ShoppingItemInterface } from 'src/app/shoppingCart/types/shoppingItem.interface';
import {
  addItemAction,
  deleteAllItemsAction,
  deleteItemAction,
  updateItemAction,
} from 'src/app/shoppingCart/store/actions/shoppingCart.actions';

const initialState: ShoppingCartStateInterface = {
  shoppingItems: [],
};

const shoppingCartReducers = createReducer(
  initialState,
  on(addItemAction, (state, action): ShoppingCartStateInterface => {
    const existItem = state.shoppingItems.find(
      item => item.id === action.shoppingItem.id
    );

    let updatedShoppingItems = [];

    if (existItem) {
      updatedShoppingItems = state.shoppingItems.map(item => {
        if (item.id === action.shoppingItem.id) {
          const itemQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: itemQuantity,
          };
        }
        return item;
      });
    } else {
      updatedShoppingItems = [
        ...(state.shoppingItems as ShoppingItemInterface[]),
        action.shoppingItem,
      ];
    }

    return {
      ...state,
      shoppingItems: updatedShoppingItems,
    };
  }),
  on(
    deleteAllItemsAction,
    (state): ShoppingCartStateInterface => ({
      ...state,
      shoppingItems: [],
    })
  ),
  on(deleteItemAction, (state, action): ShoppingCartStateInterface => {
    const filteredShoppingItems = state.shoppingItems.filter(
      item => item.id !== action.id
    );
    return {
      ...state,
      shoppingItems: filteredShoppingItems,
    };
  }),
  on(updateItemAction, (state, action): ShoppingCartStateInterface => {
    const updatedShoppingItems = state.shoppingItems.map(item => {
      if (item.id === action.id) {
        return { ...item, quantity: action.quantity, cost: action.cost };
      }
      return item;
    });
    return {
      ...state,
      shoppingItems: updatedShoppingItems,
    };
  })
);

export function reducers(state: ShoppingCartStateInterface, action: Action) {
  return shoppingCartReducers(state, action);
}
