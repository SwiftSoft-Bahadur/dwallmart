import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveLogComponent } from './active-log/active-log.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MainCategoryComponent } from './categories/main-category/main-category.component';
import { StoreCategoryComponent } from './categories/store-category/store-category.component';
import { ViewCategoryComponent } from './categories/view-category/view-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { MainComponent } from './main/main.component';
import { MainProductComponent } from './products/main-product/main-product.component';
import { StoreProductComponent } from './products/store-product/store-product.component';
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
      {
        path: 'product', component: MainProductComponent,
        children: [
          { path: '', component: ViewProductComponent },
          { path: 'store', component: StoreProductComponent },
          { path: ':id', component: StoreProductComponent },
        ]
      },
      {
        path: 'category', component: MainCategoryComponent, children: [
          { path: "", component: ViewCategoryComponent },
          { path: "store", component: StoreCategoryComponent },
          { path: ":id", component: StoreCategoryComponent }
        ]
      },
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
