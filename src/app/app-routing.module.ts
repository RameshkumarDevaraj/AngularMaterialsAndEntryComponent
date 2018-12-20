import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [


{ path: 'login', component: LoginComponentComponent },
{ path: 'dashboard', component: DashboardComponentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
