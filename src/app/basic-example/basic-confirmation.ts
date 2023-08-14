import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'basic-confirmation-dialog',
    template: `
        <h2 mat-dialog-title>Warning</h2>
        <mat-dialog-content class="mat-typography">{{ message }}</mat-dialog-content>
        <mat-dialog-actions align="end">
            <button
                mat-button
                [mat-dialog-close]="false">
                Cancel
            </button>
            <button
                mat-flat-button
                color="primary"
                [mat-dialog-close]="true">
            Confirm
            </button>
        </mat-dialog-actions>
    `,
})
export class BasicConfirmationDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public message: string) {
    }
}
