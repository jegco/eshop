import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SummaryComponent } from './summary/summary.component';
import { DetailsComponent } from './details/details.component';
import { ShopComponent } from './shop/shop.component';
import { ProductService } from './product.service';
import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  {path: '', component: LoginComponent},
{path: '/home', component: ShopComponent},
{path: '/detalis/'}];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    SummaryComponent,
    DetailsComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
