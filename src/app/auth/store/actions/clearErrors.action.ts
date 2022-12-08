import { createAction } from '@ngrx/store';

import { ActionTypes } from 'src/app/auth/store/actionTypes';

export const clearErrorsAction = createAction(ActionTypes.CLEAR_ERRORS);
