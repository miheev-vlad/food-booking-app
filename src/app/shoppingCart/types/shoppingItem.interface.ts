import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';

export interface ShoppingItemInterface extends FoodItemInterface {
  quantity: number;
  cost: number;
}
