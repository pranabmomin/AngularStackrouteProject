import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { ShortenPipe } from './shorten.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontPageComponent } from './font-page/font-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    SearchComponent,
    ShortenPipe,
    FontPageComponent,
    ErrorPageComponent,
    LoginComponent,
    CartComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
