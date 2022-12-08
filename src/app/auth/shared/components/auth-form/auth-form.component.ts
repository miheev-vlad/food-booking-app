import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthInputInterface } from 'src/app/auth/shared/types/authInput.interface';
import {
  backendErrorsSelector,
  isSubmittingSelector,
} from 'src/app/auth/store/selectors';
import { ConfigService } from 'src/app/shared/services/config.service';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { forbiddenEmailValidator } from 'src/app/shared/utils/validators/forbidden-email-validator.function';

export type AuthFormModeTypes = 'login' | 'register';

@Component({
  selector: 'fba-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  form: FormGroup;

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<string>;

  forbiddenEmail: string;

  @Input('buttonName') buttonNameProps: string;
  @Input('formMode') formModeProps: AuthFormModeTypes = 'login';
  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('authSubmit') authSubmitEvent =
    new EventEmitter<AuthInputInterface>();

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeForm();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(backendErrorsSelector));
    this.forbiddenEmail = this.configService.getOption('forbiddenEmail');
  }

  initializeForm(): void {
    if (this.formModeProps === 'register') {
      this.form = this.fb.group({
        email: [
          null,
          [
            Validators.required,
            Validators.email,
            forbiddenEmailValidator(this.forbiddenEmail),
          ],
        ],
        password: [null, [Validators.required, Validators.minLength(6)]],
      });
    } else {
      this.form = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.authSubmitEvent.emit(this.form.value);
  }
}
