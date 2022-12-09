import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module';
import { TopBarModule } from 'src/app/shared/modules/topBar/topBar.module';
import { SharedUiModule } from 'src/app/shared/shared-ui/shared-ui.module';
import { SearchFoodItemPipe } from 'src/app/shared/pipes/searchFoodItem.pipe';
import { TruncateTextPipe } from 'src/app/shared/pipes/truncateText.pipe';

@NgModule({
  declarations: [SearchFoodItemPipe, TruncateTextPipe],
  imports: [
    CommonModule,
    SharedUiModule,
    FormsModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    TopBarModule,
  ],
  exports: [
    SharedUiModule,
    FormsModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    TopBarModule,
    SearchFoodItemPipe,
    TruncateTextPipe,
  ],
})
export class SharedModule {}
