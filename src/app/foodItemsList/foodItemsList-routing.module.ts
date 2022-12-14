import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodItemDetailsComponent } from 'src/app/foodItemsList/components/foodItemDetails/foodItemDetails.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'fooditem/:id/details',
    component: FoodItemDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodItemsListRoutingModule {}
