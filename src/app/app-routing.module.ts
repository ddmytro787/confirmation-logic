import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListWithRegularConfirmationComponent } from './basic-example/list-with-regular-confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: ListWithRegularConfirmationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
