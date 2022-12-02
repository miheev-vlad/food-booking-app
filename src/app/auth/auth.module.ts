import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthLayoutComponent } from 'src/app/auth/shared/components/auth-layout/auth-layout.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { AuthFormComponent } from 'src/app/auth/shared/components/auth-form/auth-form.component';
import { reducers } from 'src/app/auth/store/reducers';
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
  ],
  declarations: [
    RegisterComponent,
    AuthLayoutComponent,
    LoginComponent,
    AuthFormComponent,
  ],
})
export class AuthModule {}
