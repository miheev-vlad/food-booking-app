import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiModule } from './shared-ui/shared-ui.module';

@NgModule({
  imports: [CommonModule, SharedUiModule],
  exports: [SharedUiModule],
})
export class SharedModule {}
