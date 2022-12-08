import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { getEmailName } from 'src/app/shared/utils/handlers/getEmailName.function';

export function forbiddenEmailValidator(forbiddenEmail: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let registeredEmail = '';
    if (control.value) {
      registeredEmail = getEmailName(control.value);
    }
    return registeredEmail === forbiddenEmail.toLowerCase()
      ? { forbiddenEmail: { value: control.value } }
      : null;
  };
}
