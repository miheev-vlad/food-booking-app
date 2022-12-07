import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from './modules/backendErrorMessages/backendErrorMessages.module';
import { TopBarModule } from './modules/topBar/topBar.module';
import { SharedUiModule } from './shared-ui/shared-ui.module';

@NgModule({
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
  ],
})
export class SharedModule {}
