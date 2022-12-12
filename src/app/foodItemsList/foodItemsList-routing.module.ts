import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodItemsListComponent } from 'src/app/foodItemsList/components/foodItemsList.component/foodItemsList.component';
import { FoodItemDetailsComponent } from 'src/app/foodItemsList/components/foodItemDetails/foodItemDetails.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FoodItemsListComponent,
  },
  {
    path: 'fooditem/:id/details',
    component: FoodItemDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodItemsListRoutingModule {}
