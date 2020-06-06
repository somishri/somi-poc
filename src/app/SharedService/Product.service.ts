import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgModule} from '@angular/core';
@Injectable()
export class ProductService {
constructor(private http:HttpClient){}
loadProduct()
{
  console.log("Loaded")
  return this.http.get('http://localhost:53012/api/Product/');
}
addProductToDB(obj:any)
{
  console.log("inside s file");
  console.log(obj);
  return this.http.post('http://localhost:53012/api/Product',obj);
}

}