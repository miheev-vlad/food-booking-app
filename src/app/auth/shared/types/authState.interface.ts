import { BackendErrorType } from 'src/app/shared/types/backendError.type';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  backendError: BackendErrorType | null;
}
