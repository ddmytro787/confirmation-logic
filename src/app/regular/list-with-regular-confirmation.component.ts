import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Component({
  selector: 'list-with-regular-confirmation',
  template: `
    <mat-list>
      <mat-list-item>
        <span class="label">Pepper</span>
        <button
          mat-stroked-button
          color="warn"
          (click)="onRemove('Pepper')">
          remove with regular confirm
        </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Salt</span>
        <button
          mat-stroked-button
          color="warn"
          (click)="onRemove('Salt')">
          remove with regular confirm
        </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Paprika</span>
        <button
          mat-stroked-button
          color="warn"
          (click)="onRemove('Paprika')">
          remove with regular confirm
        </button>
      </mat-list-item>
    </mat-list>
  `,
})
export class ListWithRegularConfirmationComponent {
  constructor(private dialog: MatDialog) {
  }

  onRemove(name: string) {
    this.dialog.open(ConfirmationDialogComponent, { data: `Are you sure you want to remove ${name} product?` })
      .afterClosed()
      .pipe(
        filter(confirm => confirm),
        tap(() => console.log('if confirm is true your logic goes here')),
      )
      .subscribe();
  }
}
