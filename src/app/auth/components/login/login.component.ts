import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthInputInterface } from 'src/app/auth/shared/types/authInput.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { AuthRequestInterface } from 'src/app/shared/types/authRequest.interface';
import { loginAction } from 'src/app/auth/store/actions/login.action';

@Component({
  selector: 'fba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private store: Store<AppStateInterface>) {}

  onSubmit(authInput: AuthInputInterface) {
    const authRequest: AuthRequestInterface = {
      ...authInput,
      returnSecureToken: true,
    };

    this.store.dispatch(loginAction({ authRequest }));
  }
}
