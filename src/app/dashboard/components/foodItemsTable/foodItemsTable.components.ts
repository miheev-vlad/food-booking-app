import { Component, Input } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { FoodItemInterface } from 'src/app/shared/types/foodItem.interface';

@Component({
  selector: 'fba-food-items-table',
  templateUrl: './foodItemsTable.components.html',
  styleUrls: ['./foodItemsTable.components.scss'],
})
export class FoodItemsTableComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'image',
    'ingredients',
    'actions',
  ];

  @Input('foodItems') foodItemsProps: FoodItemInterface[];

  sortFoodItems(sort: Sort) {
    const data = this.foodItemsProps.slice();
    if (!sort.active || sort.direction === '') {
      this.foodItemsProps = data;
      return;
    }

    this.foodItemsProps = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return this.compare(a.id, b.id, isAsc);
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'ingredients':
          return this.compare(
            a.ingredients.length,
            b.ingredients.length,
            isAsc
          );
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
