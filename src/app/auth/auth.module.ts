import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [RegisterComponent],
})
export class AuthModule {}
