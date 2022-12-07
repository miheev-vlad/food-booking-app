import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthRequestInterface } from 'src/app/shared/types/authRequest.interface';
import { environment } from 'src/environments/environment';
import { RegisterResponseInterface } from 'src/app/shared/types/registerResponse.interface';
import { LoginResponseInterface } from 'src/app/shared/types/loginResponse.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { logoutAction } from 'src/app/auth/store/actions/login.action';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private store: Store<AppStateInterface>
  ) {}

  register(
    authRequest: AuthRequestInterface
  ): Observable<CurrentUserInterface> {
    const url = `${environment.Auth_URL}/accounts:signUp?key=${environment.Web_API_Key}`;

    return this.http
      .post<RegisterResponseInterface>(url, authRequest)
      .pipe(map(this.getNormalizeUser));
  }

  login(authRequest: AuthRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.Auth_URL}/accounts:signInWithPassword?key=${environment.Web_API_Key}`;

    return this.http
      .post<LoginResponseInterface>(url, authRequest)
      .pipe(map(this.getNormalizeUser));
  }

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(logoutAction());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }

  getNormalizeUser(
    response: RegisterResponseInterface | LoginResponseInterface
  ): CurrentUserInterface {
    const tokenExpirationDate = new Date(
      new Date().getTime() + +response.expiresIn * 1000
    );

    const currentUser: CurrentUserInterface = {
      email: response.email,
      token: response.idToken,
      id: response.localId,
      tokenExpirationDate,
    };

    return currentUser;
  }
}
