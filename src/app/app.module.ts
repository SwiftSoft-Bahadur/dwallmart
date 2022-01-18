import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { StoreCategoryComponent } from './categories/store-category/store-category.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './shared/auth/auth.service';
import { JwtInterceptor } from './shared/auth/jwt/jwt.interceptor';
import { CategoryService } from './shared/category/category.service';
import { SessionService } from './shared/session/session.service';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ViewProductComponent } from './products/view-products/view-products.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { ActiveLogComponent } from './active-log/active-log.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    StoreCategoryComponent,
    ListOrdersComponent,
    ListProductsComponent,
    ViewProductComponent,
    FilterPipe,
    UsersComponent,
    SettingsComponent,
    ActiveLogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    HttpClientModule,
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
