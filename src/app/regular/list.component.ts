import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'products-list',
  template: `
    <mat-list>
      <mat-list-item>
        <span class="label">Pepper</span>
        <button
        mat-stroked-button
        color="warn"
        (click)="remove.emit('Pepper')">
        remove with {{ type }} confirm
      </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Salt</span>
        <button
        mat-stroked-button
        color="warn"
        (click)="remove.emit('Salt')">
        remove with {{ type }} confirm
        </button>
      </mat-list-item>
      <mat-list-item>
        <span class="label">Paprika</span>
        <button
        mat-stroked-button
        color="warn"
        (click)="remove.emit('Paprika')">
        remove with {{ type }} confirm
        </button>
      </mat-list-item>
    </mat-list>
  `,
})

export class ListComponent {
  @Input() type: 'regular' | 'reactive' | 'decorator' = 'regular';
  @Output() remove = new EventEmitter<string>;
}
