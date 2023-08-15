import { filter, of, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {
    ConfirmationDialogComponent,
} from '../regular/confirmation-dialog.component';

export const confirm$ = (dialog: MatDialog, data: string) => of(dialog.open(ConfirmationDialogComponent, { data })).pipe(
    switchMap(dialogRef => dialogRef.afterClosed()),
    filter(confirm => confirm),
);
