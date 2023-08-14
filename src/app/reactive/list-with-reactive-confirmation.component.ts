import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { confirm$ } from './confirm-rxjs-operator';
import { tap } from 'rxjs';

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
          remove with reactive confirmation
        </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Salt</span>
        <button
            mat-stroked-button
            color="warn"
            (click)="onRemove('Salt')">
          remove with reactive confirmation
        </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Paprika</span>
        <button
            mat-stroked-button
            color="warn"
            (click)="onRemove('Paprika')">
          remove with reactive confirmation
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
