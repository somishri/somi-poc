import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {
 
  constructor(private http: HttpClient) { }
  addUserToDB(obj1:any)
  {
    console.log(obj1);
    return this.http.post('http://localhost:53012/api/Customer',obj1);
 }
 addlogin(obj)
 {
  return this.http.post('http://localhost:53012/api/Cus',obj);
}
 }