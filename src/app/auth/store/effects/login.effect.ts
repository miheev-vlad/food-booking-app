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
  logoutAction,
  autoLoginAction,
  autoLoginFailureAction,
} from 'src/app/auth/store/actions/login.action';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { getBackendErrorMessage } from 'src/app/shared/utils/handlers/getBackendErrorMessage.function';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ authRequest }) => {
        return this.authService.login(authRequest).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('currentUser', currentUser);
            const expirationDuration =
              new Date(currentUser.tokenExpirationDate).getTime() -
              new Date().getTime();
            this.authService.setLogoutTimer(expirationDuration);
            return loginSuccessAction({ currentUser });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({
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

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(autoLoginAction),
      map(() => {
        const currentUserData: CurrentUserInterface =
          this.persistanceService.get('currentUser');
        if (!currentUserData) {
          return autoLoginFailureAction();
        }

        if (currentUserData.token) {
          const expirationDuration =
            new Date(currentUserData.tokenExpirationDate).getTime() -
            new Date().getTime();
          this.authService.setLogoutTimer(expirationDuration);
          return loginSuccessAction({ currentUser: currentUserData });
        }

        return autoLoginFailureAction();
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

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.authService.clearLogoutTimer();
          this.persistanceService.remove('currentUser');
          this.router.navigateByUrl('/auth');
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
