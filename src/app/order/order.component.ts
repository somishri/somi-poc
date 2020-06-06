import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../SharedService/Order.service';
import { Router } from '@angular/router';
import { Order } from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderservice:OrderService,private router : Router) { }
  order:Order;
  data:any[];
  ngOnInit() {

    this.order = new Order();
    this.order.CusId = localStorage.getItem('cusId');
    this.orderservice.loadorder().subscribe((r:any)=>{this.data=r
      
    });
  }

  addOrder(nf:NgForm)
  {
    nf.value.CusId = localStorage.getItem('CusId');
    console.log(nf.value.CusId);
    this.orderservice.addorderToDB(nf.value).subscribe
    (
      res=>
      {
        alert("Congratulations your order has been successfully!!!! and it will be deliver in 5 to 10 working days");
          this.router.navigateByUrl('/home');
      },
      err=>
      {
  
      }
    );
  }
}
