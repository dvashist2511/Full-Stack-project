import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { Form1Module } from './form/form1/form1.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckComponent } from './check/check.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ViewComponent,
    UpdateComponent,
    DashboardComponent,
    CheckComponent,
    CustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,Form1Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
