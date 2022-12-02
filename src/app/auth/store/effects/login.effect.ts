import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from 'src/app/auth/store/actions/login.action';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ authRequest }) => {
        return this.authService.login(authRequest).pipe(
          map((currentUser: CurrentUserInterface) => {
            return loginSuccessAction({ currentUser });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({
                error: errorResponse.error.error.message,
              })
            );
          })
        );
      })
    )
  );

  redirectAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
