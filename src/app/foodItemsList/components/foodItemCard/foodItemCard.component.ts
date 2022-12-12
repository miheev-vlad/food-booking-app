import { Component, Input } from '@angular/core';
import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';

@Component({
  selector: 'fba-food-item-card',
  templateUrl: './foodItemCard.component.html',
  styleUrls: ['./foodItemCard.component.scss'],
})
export class FoodItemCardComponent {
  @Input('foodItem') foodItemProps: FoodItemInterface;
}
