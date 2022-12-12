import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { FoodItemsListRoutingModule } from 'src/app/foodItemsList/foodItemsList-routing.module';
import { FoodItemsListComponent } from 'src/app/foodItemsList/components/foodItemsList.component/foodItemsList.component';
import { FoodItemCardComponent } from 'src/app/foodItemsList/components/foodItemCard/foodItemCard.component';
import { FoodItemDetailsComponent } from 'src/app/foodItemsList/components/foodItemDetails/foodItemDetails.component';

@NgModule({
  imports: [CommonModule, SharedModule, FoodItemsListRoutingModule],
  declarations: [
    FoodItemsListComponent,
    FoodItemCardComponent,
    FoodItemDetailsComponent,
  ],
})
export class FoodItemsListModule {}
