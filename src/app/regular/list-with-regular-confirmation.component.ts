import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Component({
  selector: 'list-with-regular-confirmation',
  template: `
      <products-list (remove)="onRemove($event)"></products-list>
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
