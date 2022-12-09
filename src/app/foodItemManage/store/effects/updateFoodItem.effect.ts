import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { FoodItemsService } from 'src/app/shared/services/foodItems.service';
import {
  updateFoodItemAction,
  updateFoodItemFailureAction,
  updateFoodItemSuccessAction,
} from 'src/app/foodItemManage/store/actions/updateFoodItem.action';

@Injectable()
export class UpdateFoodItemEffect {
  updateFoodItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateFoodItemAction),
      switchMap(({ id, foodItemInput }) => {
        return this.foodItemsService.update(id, foodItemInput).pipe(
          map(() => {
            return updateFoodItemSuccessAction();
          }),
          catchError(() => {
            return of(updateFoodItemFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private foodItemsService: FoodItemsService
  ) {}
}
