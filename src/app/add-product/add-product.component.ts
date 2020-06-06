import { Component, OnInit } from '@angular/core';
import{ProductService} from '../SharedService/Product.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service:ProductService,private router:Router) { }

  ngOnInit() {
  }
  addProduct(nf:NgForm)
  {
    this.service.addProductToDB(nf.value).subscribe
    (
      res=>
      {
          this.router.navigateByUrl('/product');
      },
      err=>
      {
  
      }
    );
  }
  

}
