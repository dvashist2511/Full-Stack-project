import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1RoutingModule } from './form/form1/form1-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  Form1RoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
