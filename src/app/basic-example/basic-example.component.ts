import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';
import { BasicConfirmationDialogComponent } from './basic-confirmation';

@Component({
  selector: 'app-basic-example',
  template: `
    <mat-list>
      <mat-list-item>
        <span class="label">Pepper</span>
        <button
            mat-stroked-button
            color="warn"
            (click)="onRemove('Pepper')">
          remove
        </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Salt</span>
        <button
            mat-stroked-button
            color="warn"
            (click)="onRemove('Salt')">
          remove
        </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Paprika</span>
        <button
            mat-stroked-button
            color="warn"
            (click)="onRemove('Paprika')">
          remove
        </button>
      </mat-list-item>
    </mat-list>
  `,
  styles: [
      `
        mat-list-item .label {
          margin-right: 15px;
        }
      `
  ]
})
export class BasicExampleComponent {
  constructor(private dialog: MatDialog) {
  }

  onRemove(name: string) {
    this.dialog.open(BasicConfirmationDialogComponent, { data: `Are you sure you want to remove ${name} product?` })
        .afterClosed()
        .pipe(
            filter(confirm => confirm),
            tap(() => console.log('if confirm is true your logic goes here')),
        )
        .subscribe();
  }
}
