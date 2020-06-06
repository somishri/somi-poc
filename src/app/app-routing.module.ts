import {CustomerComponent} from './customer/customer.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './customer/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrderComponent } from './order/order.component';
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path:'customer',component:CustomerComponent},
    {path:'login',component:LoginComponent},
    {path: 'home',component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path: 'cart',component:CartComponent},
    {path: 'add-product',component:AddProductComponent},
    {path: 'order',component:OrderComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }