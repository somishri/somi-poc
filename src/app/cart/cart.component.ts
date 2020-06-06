import { Component, OnInit } from '@angular/core';
import { CartService } from '../SharedService/Cart.service';
import { Cart } from './Cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: Cart[]=[];
  customerId:number;
  cartId:number;
  cartTotal:number;
  displayButton = false;
  constructor(private cartservice : CartService,private router:Router) { }

  ngOnInit() {
    this.customerId = +localStorage.getItem('CusId');
    this.cartservice.loadItemsToCart(this.customerId).subscribe(
      (responsedata: any) => {
        this.carts = responsedata;
        if(responsedata)
         {
             this.displayButton = true
         }
         else{
           this.displayButton = false
         }
          this.cartTotal = this.carts
             .map(item => item.Amount)
             .reduce((prev, next) => prev + next);
      });

  }
 
   delete(cartId : number)
  {
    if(confirm("Are you Sure?"))
    {
      this.cartservice.deletedata(cartId).subscribe
      ((res)=>
      {
        this.ngOnInit();
      },
      (err)=>{});
    }
  }

  addToCart(cart : Cart) {
 
    cart.ProductId ;
    cart.Quantity = 1;
    cart.Name ;
    cart.Price;
    cart.CusId = +localStorage.getItem('cusId');
    this.cartservice.addtocart(cart).subscribe(res => {
      this.router.navigate(['/cart']);
      this.ngOnInit();

    })}

  }
