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
} from './basic-example/confirmation-dialog.component';
import {
  ListWithRegularConfirmationComponent,
} from './basic-example/list-with-regular-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    ListWithRegularConfirmationComponent,
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
