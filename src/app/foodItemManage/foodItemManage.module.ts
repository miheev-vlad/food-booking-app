import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from 'src/app/shared/shared.module';
import { FoodItemCreateComponent } from 'src/app/foodItemManage/components/foodItemCreate/foodItemCreate.component';
import { FoodItemEditComponent } from 'src/app/foodItemManage/components/foodItemEdit/foodItemEdit.component';
import { FoodItemManageRoutingModule } from 'src/app/foodItemManage/foodItemManage-routing.module';
import { FoodItemManageFormComponent } from 'src/app/foodItemManage/shared/components/foodItemManageForm/foodItemManageForm.component';
import { reducers } from 'src/app/foodItemManage/store/reducers';
import { CreateFoodItemEffect } from 'src/app/foodItemManage/store/effects/createFoodItem.effect';
import { GetFoodItemEffect } from 'src/app/foodItemManage/store/effects/getFoodItem.effect';
import { UpdateFoodItemEffect } from 'src/app/foodItemManage/store/effects/updateFoodItem.effect';
import { DeleteFoodItemEffect } from './store/effects/deleteFoodItem.effect';
import { ConfirmModalComponent } from './shared/components/confirmModal/confirmModal.component';

@NgModule({
  imports: [
    CommonModule,
    FoodItemManageRoutingModule,
    SharedModule,
    StoreModule.forFeature('foodItemManage', reducers),
    EffectsModule.forFeature([
      CreateFoodItemEffect,
      GetFoodItemEffect,
      UpdateFoodItemEffect,
      DeleteFoodItemEffect,
    ]),
  ],
  declarations: [
    FoodItemEditComponent,
    FoodItemCreateComponent,
    FoodItemManageFormComponent,
    ConfirmModalComponent,
  ],
})
export class FoodItemManageModule {}
