import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicExampleComponent } from './basic-example/basic-example.component';

const routes: Routes = [
  {
    path: '',
    component: BasicExampleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
