import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { deleteFoodItemAction } from 'src/app/foodItemManage/store/actions/deleteFoodItem.action';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

@Component({
  selector: 'fba-confirm-modal',
  template: `
    <h1 mat-dialog-title>Delete Food Item</h1>
    <div mat-dialog-content>
      Would you like to delete <strong>"{{ data.foodItemNameProps }}"</strong>?
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close cdkFocusInitial>No</button>
      <button mat-button (click)="onYesClick()">Ok</button>
    </div>
  `,
})
export class ConfirmModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { foodItemNameProps: string; foodItemIdProps: string },
    private store: Store<AppStateInterface>
  ) {}

  onYesClick(): void {
    this.dialogRef.close();
    this.store.dispatch(
      deleteFoodItemAction({ id: this.data.foodItemIdProps })
    );
  }
}
