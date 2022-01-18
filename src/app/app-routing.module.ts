import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveLogComponent } from './active-log/active-log.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { StoreCategoryComponent } from './categories/store-category/store-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { MainComponent } from './main/main.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ViewProductComponent } from './products/view-products/view-products.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard', component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'products', component: ListProductsComponent },
      { path: 'view', component: ViewProductComponent },
      { path: 'category', component: StoreCategoryComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'logs', component: ActiveLogComponent },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
