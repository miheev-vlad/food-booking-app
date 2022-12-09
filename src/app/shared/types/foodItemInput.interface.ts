import { Ingredient } from 'src/app/shared/types/ingredient.interface';

export interface FoodItemInputInterface {
  id?: string;
  name: string;
  description: string;
  imagePath: string;
  ingredients?: Ingredient[];
}
