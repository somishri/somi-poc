import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  getRole():boolean
  {
    console.log("inside getRole");
    var isMatch=false;
    var paylod=JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    console.log(paylod);
    var userRole=paylod.role;
    console.log("this is user role")
    console.log(userRole)
   
    if(userRole=='user')
    {
      return false;
    }
    else
    {
      return true;
    }
    
  }
}
