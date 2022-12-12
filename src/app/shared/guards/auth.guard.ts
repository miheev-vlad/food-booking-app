import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { currentUserSelector } from 'src/app/auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<AppStateInterface>,
    private router: Router
  ) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.pipe(
      select(currentUserSelector),
      take(1),
      map((currentUser: CurrentUserInterface) => {
        const isAuth = !!currentUser;
        if (isAuth) {
          return true;
        } else {
          this.router.navigate(['/auth']);
          return false;
        }
      })
    );
  }
}
