import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from './shared-ui/shared-ui.module';

@NgModule({
  imports: [CommonModule, SharedUiModule, FormsModule, ReactiveFormsModule],
  exports: [SharedUiModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
