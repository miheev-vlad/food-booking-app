import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/auth/store/actionTypes';
import { AuthRequestInterface } from 'src/app/shared/types/authRequest.interface';
import { BackendErrorType } from 'src/app/shared/types/backendError.type';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ authRequest: AuthRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ error: BackendErrorType }>()
);
