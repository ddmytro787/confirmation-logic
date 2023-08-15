import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ListWithRegularConfirmationComponent,
} from './regular/list-with-regular-confirmation.component';
import {
  ListWithReactiveConfirmationComponent,
} from './reactive/list-with-reactive-confirmation.component';
import {
  ListWithDecoratorConfirmationComponent,
} from './decorator/list-with-decorator-confirmation.component';

const routes: Routes = [
  {
    path: 'regular-confirmation',
    component: ListWithRegularConfirmationComponent,
  },
  {
    path: 'reactive-confirmation',
    component: ListWithReactiveConfirmationComponent,
  },
  {
    path: 'decorator-confirmation',
    component: ListWithDecoratorConfirmationComponent,
  },
  {
    path: '',
    redirectTo: 'regular-confirmation',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
