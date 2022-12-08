import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodItemCreateComponent } from 'src/app/foodItemManage/components/foodItemCreate/foodItemCreate.component';
import { FoodItemEditComponent } from 'src/app/foodItemManage/components/foodItemEdit/foodItemEdit.component';

const routes: Routes = [
  {
    path: 'fooditem/:id/edit',
    component: FoodItemEditComponent,
  },
  {
    path: 'fooditem/create',
    component: FoodItemCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodItemManageRoutingModule {}
