import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'fba-checkout-snack-bar',
  template: `
    <span class="checkout-message" matSnackBarLabel>
      Order successfully created!
    </span>
  `,
  styles: [
    `
      :host {
        display: flex;
      }

      .checkout-message {
        color: yellowgreen;
      }
    `,
  ],
})
export class CheckoutSnackBarComponent {
  snackBarRef = inject(MatSnackBarRef);
}
