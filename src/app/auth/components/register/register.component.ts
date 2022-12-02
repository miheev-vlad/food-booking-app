import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthInputInterface } from 'src/app/auth/shared/types/authInput.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { AuthRequestInterface } from 'src/app/shared/types/authRequest.interface';
import { registerAction } from 'src/app/auth/store/actions/register.action';

@Component({
  selector: 'fba-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private store: Store<AppStateInterface>) {}

  onSubmit(authInput: AuthInputInterface) {
    const authRequest: AuthRequestInterface = {
      ...authInput,
      returnSecureToken: true,
    };

    this.store.dispatch(registerAction({ authRequest }));
  }
}
