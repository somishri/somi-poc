import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { CustomerService } from '../../SharedService/Customer.service';
import { AuthService } from '../../Auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';

  constructor(private router :Router,private customerService:CustomerService,private authService : AuthService) { }

  ngOnInit() {

  }
  addlogin(nf: NgForm) {
    this.customerService.addlogin(nf.value).subscribe(
      (res: any) => {
        if (res) {
          
          console.log(res);
          this.errorMessage = '';
          localStorage.setItem('token', res[0]);
          localStorage.setItem('Name', res[1]);
          localStorage.setItem('Role', res[2]);
          localStorage.setItem('CusId', res[3]);
          this.router.navigate(['./home']);
        }

        if (localStorage.getItem('token') && localStorage.getItem('token') != null) {
          
          let check = this.authService.getRole();
          if (check) {
            this.router.navigate(['/product']);
          }
          else {
            this.router.navigate(['/home']);
          }
        }
        else {
         alert(this.errorMessage = "Invalid user name or password");
        }
      },
      err => {})

  }

  }

