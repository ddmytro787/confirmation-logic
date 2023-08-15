import { ModuleInjector } from './module-injector';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';
import {
  ConfirmationDialogComponent,
} from '../regular/confirmation-dialog.component';

export function ConfirmationRequired(message: string) {
  return (_: any, _1: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      ModuleInjector.get(MatDialog)
        .open(ConfirmationDialogComponent, { data: message.replace(/{{id}}/, args[0]) })
        .afterClosed()
        .pipe(
          filter(confirm => confirm),
          tap(() => originalMethod.apply(this, args)),
        )
        .subscribe();
    };
  };
}
