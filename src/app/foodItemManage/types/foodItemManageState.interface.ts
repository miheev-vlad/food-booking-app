import { BackendErrorType } from 'src/app/shared/types/backendError.type';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';

export interface FoodItemManageStateInterface {
  isSubmitting: boolean;
  backendError: BackendErrorType | null;
  isLoading: boolean;
  foodItem: FoodItemInterface | null;
  isDeleting: boolean;
}
