import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../Cart/Cart.model';

@Injectable()
export class CartService {
    constructor(private http: HttpClient) { }
    addtocart(cart:Cart)
    {
      return this.http.post('http://localhost:53012/api/Cart/',cart);
    }
    loadItemsToCart(id:number)
    {
      console.log("Loaded")
      return this.http.get('http://localhost:53012/api/Cart/'+id);
    }
    deletedata(cartId:number)
      {
        console.log("Service works")
        return this.http.delete('http://localhost:53012/api/Cart/'+cartId)
      }

      
}