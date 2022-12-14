import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/auth/store/actionTypes';
import { AuthRequestInterface } from 'src/app/shared/types/authRequest.interface';
import { BackendErrorType } from 'src/app/shared/types/backendError.type';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ authRequest: AuthRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface; redirect: boolean }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ error: BackendErrorType }>()
);

export const logoutAction = createAction(ActionTypes.LOGOUT);

export const autoLoginAction = createAction(ActionTypes.AUTO_LOGIN);

export const autoLoginFailureAction = createAction(
  ActionTypes.AUTO_LOGIN_FAILURE
);
