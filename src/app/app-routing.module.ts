import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FontPageComponent } from './font-page/font-page.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'fontPage', pathMatch:'full'},
  {path:'fontPage', component:FontPageComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'products', component:ProductsComponent},
  {path:'search', component:SearchComponent},
  {path:'**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
