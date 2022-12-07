import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/shared/types/authState.interface';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from 'src/app/auth/store/actions/register.action';
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
  logoutAction,
} from 'src/app/auth/store/actions/login.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  backendError: null,
};

const authReducers = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      backendError: action.error,
    })
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      backendError: action.error,
    })
  ),
  on(
    logoutAction,
    (state): AuthStateInterface => ({
      ...state,
      currentUser: null,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducers(state, action);
}
