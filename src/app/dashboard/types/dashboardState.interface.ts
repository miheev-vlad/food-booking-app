import { BackendErrorType } from 'src/app/shared/types/backendError.type';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';

export interface DashboardStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  foodItems: FoodItemInterface[] | null;
  backendError: BackendErrorType | null;
}
