import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthLayoutComponent } from 'src/app/auth/shared/components/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthFormComponent } from './shared/components/auth-form/auth-form.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  declarations: [
    RegisterComponent,
    AuthLayoutComponent,
    LoginComponent,
    AuthFormComponent,
  ],
})
export class AuthModule {}
