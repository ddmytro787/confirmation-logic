import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { confirm$ } from './confirm-rxjs.operator';

@Component({
  selector: 'list-with-reactive-confirmation',
  template: `
      <products-list type="reactive" (remove)="onRemove($event)"></products-list>
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
