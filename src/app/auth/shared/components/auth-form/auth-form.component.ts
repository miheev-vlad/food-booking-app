import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthInputInterface } from 'src/app/auth/shared/types/authInput.interface';
import { isSubmittingSelector } from 'src/app/auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

@Component({
  selector: 'fba-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  form: FormGroup;

  isSubmitting$: Observable<boolean>;

  @Input('buttonName') buttonNameProps: string;
  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('authSubmit') authSubmitEvent =
    new EventEmitter<AuthInputInterface>();

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeForm();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.authSubmitEvent.emit(this.form.value);
  }
}
