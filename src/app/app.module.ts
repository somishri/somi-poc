import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms' 
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import {AppRoutingModule} from './app-routing.module';
import { CustomerService} from './SharedService/Customer.service';
import {ProductService} from './SharedService/Product.service';
import {HttpClientModule} from  '@angular/common/http';
import { LoginComponent } from './customer/login/login.component';
import {  ProductFilterPipe} from '../app/product/product.filter.pipe';
import { ProductComponent } from './product/product.component';
import {AddProductComponent} from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import {CartService} from './SharedService/Cart.service';
import { OrderComponent } from './order/order.component';
import { OrderService } from './SharedService/Order.service';
import { AuthService } from './Auth/auth.service';
import { AuthGuard } from './Auth/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductFilterPipe,
    LoginComponent,
    ProductComponent,
    AddProductComponent,
    HomeComponent,
    CartComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService,ProductService,CartService,OrderService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
