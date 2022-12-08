import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearErrorsAction } from 'src/app/auth/store/actions/clearErrors.action';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';

@Component({
  selector: 'fba-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent {
  constructor(private store: Store<AppStateInterface>) {}

  onClearErrors(): void {
    this.store.dispatch(clearErrorsAction());
  }
}
