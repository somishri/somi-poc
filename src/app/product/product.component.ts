import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../SharedService/Product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router , private service:ProductService) { }
    data:any[];
  ngOnInit() {
   }
  
}
