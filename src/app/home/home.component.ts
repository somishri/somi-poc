import { Component, OnInit } from '@angular/core';
import {ProductService} from '../SharedService/Product.service'
import {ProductComponent} from '../product/product.component';
import {Product} from '../product/product.model';
import {Cart} from '../cart/Cart.model';
import { CartService } from '../SharedService/Cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private productService:ProductService,private cservice : CartService,private router:Router) { }
  products=[];
  SearchItems: string;
  Id:Number;
  ngOnInit() {
    this.getPost();
  }
  addToCart(product: Product) {
    
    const cart = new Cart();
    cart.ProductId = product.ProductId;
    cart.Quantity = 1;
    cart.Name = product.Name;
    cart.Price = product.Price;
    cart.CusId = +localStorage.getItem('CusId');
    this.cservice.addtocart(cart).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
  }
  getPost() {
    this.productService.loadProduct().subscribe(
      (responsedata: any) => {
        this.products = responsedata;
        console.log(this.products);
      }
      );
  }
  logout() {
    if (localStorage.getItem != null) {
      localStorage.clear();

      this.router.navigateByUrl('/login');
    }
  }
}
