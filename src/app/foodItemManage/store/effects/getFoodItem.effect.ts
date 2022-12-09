import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { FoodItemsService } from 'src/app/shared/services/foodItems.service';
import {
  getFoodItemAction,
  getFoodItemSuccessAction,
  getFoodItemFailureAction,
} from 'src/app/foodItemManage/store/actions/getFoodItem.action';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';

@Injectable()
export class GetFoodItemEffect {
  getFoodItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFoodItemAction),
      switchMap(({ id }) => {
        return this.foodItemsService.getById(id).pipe(
          map((foodItem: FoodItemInterface) => {
            return getFoodItemSuccessAction({ foodItem });
          }),
          catchError(() => {
            return of(getFoodItemFailureAction());
          })
        );
      })
    )
  );

  redirectAfterFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getFoodItemFailureAction),
        tap(() => {
          this.router.navigate(['/dashboard']);
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private foodItemsService: FoodItemsService,
    private router: Router
  ) {}
}
