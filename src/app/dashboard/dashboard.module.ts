import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardComponent } from 'src/app/dashboard/components/dashboard/dashboard.component';
import { FoodItemsTableComponent } from 'src/app/dashboard/components/foodItemsTable/foodItemsTable.components';
import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { reducers } from 'src/app/dashboard/store/reducers';
import { GetFoodItemsEffect } from 'src/app/dashboard/store/effects/getFoodItems.effect';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature([GetFoodItemsEffect]),
  ],
  declarations: [DashboardComponent, FoodItemsTableComponent],
})
export class DashboardModule {}
