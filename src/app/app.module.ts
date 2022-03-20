import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { UsersComponent } from './page/users/users.component';
import { AboutComponent } from './page/about/about.component';
import { LoginComponent } from './page/login/login.component';
import { CarsComponent } from './page/cars/cars.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { ProductsEditComponent } from './page/products-edit/products-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    AboutComponent,
    LoginComponent,
    CarsComponent,
    NavigationComponent,
    UserEditComponent,
    ProductsEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
