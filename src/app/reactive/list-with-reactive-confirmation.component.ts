import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { confirm$ } from './confirm-rxjs.operator';

@Component({
  selector: 'list-with-reactive-confirmation',
  template: `
    <mat-list>
      <mat-list-item>
        <span class="label">Pepper</span>
        <button
          mat-stroked-button
          color="warn"
          (click)="onRemove('Pepper')">
          remove with reactive confirm
        </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Salt</span>
        <button
          mat-stroked-button
          color="warn"
          (click)="onRemove('Salt')">
          remove with reactive confirm
        </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Paprika</span>
        <button
          mat-stroked-button
          color="warn"
          (click)="onRemove('Paprika')">
          remove with reactive confirm
        </button>
      </mat-list-item>
    </mat-list>
  `,
})
export class ListWithReactiveConfirmationComponent {
  constructor(private dialog: MatDialog) {
  }

  onRemove(name: string) {
    confirm$(this.dialog, `Are you sure you want to remove ${name} product?`)
      .pipe(
        tap(() => console.log('if confirm is true your logic goes here')),
      )
      .subscribe();
  }
}
