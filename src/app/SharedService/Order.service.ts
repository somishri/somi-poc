import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class OrderService
{

    constructor(private http: HttpClient){}
    getProductbyId(id: number) {
        return this.http.get(this.url+'/'+id);
    } 
url:string='http://localhost:53012/api/order/';

loadorder()
  {
    return this.http.get(this.url);
  }
  addorderToDB(obj:any)
  {
    console.log("inside s file");
    console.log(obj);
    return this.http.post('http://localhost:53012/api/order/',obj);
  }
 
 
}
