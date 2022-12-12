import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodItemCreateComponent } from 'src/app/foodItemManage/components/foodItemCreate/foodItemCreate.component';
import { FoodItemEditComponent } from 'src/app/foodItemManage/components/foodItemEdit/foodItemEdit.component';
import { AdminGuard } from 'src/app/shared/guards/admin.guard';

const routes: Routes = [
  {
    path: 'fooditem/:id/edit',
    component: FoodItemEditComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'fooditem/create',
    component: FoodItemCreateComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodItemManageRoutingModule {}
