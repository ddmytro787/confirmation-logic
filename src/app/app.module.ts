import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
  ConfirmationDialogComponent,
} from './regular/confirmation-dialog.component';
import {
  ListWithRegularConfirmationComponent,
} from './regular/list-with-regular-confirmation.component';
import {
  ListWithReactiveConfirmationComponent,
} from './reactive/list-with-reactive-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    ListWithRegularConfirmationComponent,
    ListWithReactiveConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
