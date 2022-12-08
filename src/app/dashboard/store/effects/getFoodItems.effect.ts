import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { FoodItemsService } from 'src/app/shared/services/foodItems.service';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';
import {
  getFoodItemsAction,
  getFoodItemsFailureAction,
  getFoodItemsSuccessAction,
} from 'src/app/dashboard/store/actions/getFoodItems.action';

@Injectable()
export class GetFoodItemsEffect {
  getFoodItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFoodItemsAction),
      switchMap(() => {
        return this.foodItemsService.getFoodItems().pipe(
          map((foodItems: FoodItemInterface[]) => {
            return getFoodItemsSuccessAction({ foodItems });
          }),
          catchError(() => {
            return of(getFoodItemsFailureAction());
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
