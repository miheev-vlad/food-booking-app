import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from 'src/app/auth/store/actions/register.action';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { getBackendErrorMessage } from 'src/app/shared/utils/handlers/getBackendErrorMessage.function';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ authRequest }) => {
        return this.authService.register(authRequest).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('currentUser', currentUser);
            const expirationDuration =
              new Date(currentUser.tokenExpirationDate).getTime() -
              new Date().getTime();
            this.authService.setLogoutTimer(expirationDuration);
            return registerSuccessAction({ currentUser });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({
                error: getBackendErrorMessage(
                  errorResponse.error.error.message
                ),
              })
            );
          })
        );
      })
    )
  );

  redirectAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private persistanceService: PersistanceService
  ) {}
}
