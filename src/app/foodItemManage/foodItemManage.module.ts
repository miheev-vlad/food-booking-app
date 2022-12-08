import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FoodItemCreateComponent } from './components/foodItemCreate/foodItemCreate.component';
import { FoodItemEditComponent } from './components/foodItemEdit/foodItemEdit.component';
import { FoodItemManageRoutingModule } from './foodItemManage-routing.module';
import { FoodItemManageFormComponent } from './shared/components/foodItemManageForm/foodItemManageForm.component';

@NgModule({
  imports: [CommonModule, FoodItemManageRoutingModule],
  declarations: [
    FoodItemEditComponent,
    FoodItemCreateComponent,
    FoodItemManageFormComponent,
  ],
})
export class FoodItemManageModule {}
