import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core'
import {Router} from '@angular/router';
import {CustomerService} from '../SharedService/Customer.service'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router,private s:CustomerService) { }

  ngOnInit() {
  }
  addUser(nf: NgForm) {
    this.s.addUserToDB(nf.value).subscribe
      (
        res => {
          this.router.navigateByUrl('/product');
          console.log(res);
        },
        err => {

        }
      );
}}
