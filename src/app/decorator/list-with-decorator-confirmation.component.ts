import { Component } from '@angular/core';
import { ConfirmationRequired } from './confirmation-required.decorator';

@Component({
  selector: 'list-with-decorator-confirmation',
  template: `
    <mat-list>
      <mat-list-item>
        <span class="label">Pepper</span>
        <button
          mat-stroked-button
          color="warn"
          (click)="onRemove('Pepper')">
          remove with decorator confirm
        </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Salt</span>
        <button
          mat-stroked-button
          color="warn"
          (click)="onRemove('Salt')">
          remove with decorator confirm
        </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Paprika</span>
        <button
          mat-stroked-button
          color="warn"
          (click)="onRemove('Paprika')">
          remove with decorator confirm
        </button>
      </mat-list-item>
    </mat-list>
  `,
})
export class ListWithDecoratorConfirmationComponent {
  @ConfirmationRequired('Are you sure you want to remove {{id}} product?')
  onRemove(name: string) {
    console.log('if confirm is true your logic goes here');
  }
}
