import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SummaryComponent } from './summary/summary.component';
import { DetailsComponent } from './details/details.component';
import { ShopComponent } from './shop/shop.component';
import { ProductService } from './product.service';
import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';

const routes = [
{path: 'home', component: ShopComponent},
{path: 'details/:id', component: DetailsComponent},
{ path: 'paycar', component: CarComponent},
{ path: '**', component: LoginComponent }];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    SummaryComponent,
    DetailsComponent,
    ShopComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
