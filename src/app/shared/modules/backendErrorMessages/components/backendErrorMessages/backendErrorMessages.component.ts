import { Component, Input } from '@angular/core';
import { BackendErrorType } from 'src/app/shared/types/backendError.type';

@Component({
  selector: 'fba-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent {
  @Input('backendErrors') backendErrorsProps: BackendErrorType;
}
