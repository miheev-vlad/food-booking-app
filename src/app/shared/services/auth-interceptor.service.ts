import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { exhaustMap, take } from 'rxjs/operators';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppStateInterface>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.pipe(
      select(currentUserSelector),
      take(1),
      exhaustMap((currentUser: CurrentUserInterface) => {
        if (!currentUser) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', currentUser.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
