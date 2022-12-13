import { AuthStateInterface } from 'src/app/auth/shared/types/authState.interface';
import { DashboardStateInterface } from 'src/app/dashboard/types/dashboardState.interface';
import { FoodItemManageStateInterface } from 'src/app/foodItemManage/types/foodItemManageState.interface';
import { ShoppingCartStateInterface } from 'src/app/shoppingCart/types/shoppingCartState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  dashboard: DashboardStateInterface;
  foodItemManage: FoodItemManageStateInterface;
  shoppingCart: ShoppingCartStateInterface;
}
