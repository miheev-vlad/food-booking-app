import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { FoodItemsService } from 'src/app/shared/services/foodItems.service';
import {
  createFoodItemAction,
  createFoodItemFailureAction,
  createFoodItemSuccessAction,
} from 'src/app/foodItemManage/store/actions/createFoodItem.action';

@Injectable()
export class CreateFoodItemEffect {
  createFoodItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createFoodItemAction),
      switchMap(({ foodItemInput }) => {
        return this.foodItemsService.create(foodItemInput).pipe(
          map(() => {
            return createFoodItemSuccessAction();
          }),
          catchError(() => {
            return of(createFoodItemFailureAction());
          })
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createFoodItemSuccessAction),
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
