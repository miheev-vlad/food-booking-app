import { Pipe, PipeTransform } from '@angular/core';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';

@Pipe({
  name: 'searchFoodItem',
})
export class SearchFoodItemPipe implements PipeTransform {
  transform(
    foodItems: FoodItemInterface[],
    searchStr: string
  ): FoodItemInterface[] {
    if (!searchStr.trim()) {
      return foodItems;
    }
    return foodItems.filter(item =>
      item.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  }
}
