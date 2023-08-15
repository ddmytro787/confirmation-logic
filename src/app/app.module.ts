import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';

import { setModuleInjector } from './decorator/module-injector';

import { AppComponent } from './app.component';
import { ListComponent } from './regular/list.component';
import {
  ConfirmationDialogComponent,
} from './regular/confirmation-dialog.component';
import {
  ListWithRegularConfirmationComponent,
} from './regular/list-with-regular-confirmation.component';
import {
  ListWithReactiveConfirmationComponent,
} from './reactive/list-with-reactive-confirmation.component';
import {
  ListWithDecoratorConfirmationComponent,
} from './decorator/list-with-decorator-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ConfirmationDialogComponent,
    ListWithRegularConfirmationComponent,
    ListWithReactiveConfirmationComponent,
    ListWithDecoratorConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    setModuleInjector(injector);
  }
}
