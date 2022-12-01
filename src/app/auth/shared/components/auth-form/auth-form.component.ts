import { Component, Input } from '@angular/core';

@Component({
  selector: 'fba-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  @Input('buttonName') buttonNameProps: string;
}
