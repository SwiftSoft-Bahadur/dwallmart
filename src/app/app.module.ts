import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveLogComponent } from './active-log/active-log.component';
import { AuthService } from './shared/auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryService } from './shared/category/category.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { StoreCategoryComponent } from './categories/store-category/store-category.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/auth/jwt/jwt.interceptor';
import { SessionService } from './shared/session/session.service';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { ViewProductComponent } from './products/view-products/view-products.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MainCategoryComponent } from './categories/main-category/main-category.component';
import { ViewCategoryComponent } from './categories/view-category/view-category.component';
import { MainProductComponent } from './products/main-product/main-product.component';
import { StoreProductComponent } from './products/store-product/store-product.component';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    StoreCategoryComponent,
    ListOrdersComponent,
    ViewProductComponent,
    FilterPipe,
    UsersComponent,
    SettingsComponent,
    ActiveLogComponent,
    MainCategoryComponent,
    ViewCategoryComponent,
    MainProductComponent,
    StoreProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatCheckboxModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    SessionService,
    CategoryService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
