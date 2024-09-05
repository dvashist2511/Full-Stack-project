import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from 'src/app/update/update.component';
import { FormComponent } from '../form.component';
import { ViewComponent } from 'src/app/view/view.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { CheckComponent } from 'src/app/check/check.component';
import { CustomerComponent } from 'src/app/customer/customer.component';
// import { DataComponent } from 'src/app/data/data.component';

const routes: Routes = [
  {
    path:'update/:id',component:UpdateComponent 
  },
  {
    path:'form',component:FormComponent
  },
  {
    path:'view',component:ViewComponent
  },
  {
    path:'',component:DashboardComponent
  }, 
  {
    path:'check',component:CheckComponent
  },
  {
    path:'customer',component:CustomerComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  }
  // {
  //   path:'data',component:DataComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Form1RoutingModule { }
