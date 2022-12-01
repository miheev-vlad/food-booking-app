import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from 'src/app/auth/shared/components/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
