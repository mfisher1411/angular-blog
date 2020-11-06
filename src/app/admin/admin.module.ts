import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    RouterModule
  ],
  declarations: [AdminLayoutComponent, LoginPageComponent, DashboardPageComponent, CreatePageComponent, EditPageComponent]
})
export class AdminModule {}
