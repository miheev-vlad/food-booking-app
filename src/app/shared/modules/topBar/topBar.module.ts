import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '../../shared-ui/shared-ui.module';
import { TopBarComponent } from './components/topBar/topBar.component';

@NgModule({
  imports: [CommonModule, SharedUiModule, RouterModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
