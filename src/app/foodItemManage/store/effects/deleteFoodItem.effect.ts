import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { FoodItemsService } from 'src/app/shared/services/foodItems.service';
import {
  deleteFoodItemAction,
  deleteFoodItemSuccessAction,
  deleteFoodItemFailureAction,
} from 'src/app/foodItemManage/store/actions/deleteFoodItem.action';
import { Router } from '@angular/router';

@Injectable()
export class DeleteFoodItemEffect {
  deleteFoodItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteFoodItemAction),
      switchMap(({ id }) => {
        return this.foodItemsService.remove(id).pipe(
          map(() => {
            return deleteFoodItemSuccessAction();
          }),
          catchError(() => {
            return of(deleteFoodItemFailureAction());
          })
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteFoodItemSuccessAction),
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
