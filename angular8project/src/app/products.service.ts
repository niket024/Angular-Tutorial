import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
@Injectable({  
  providedIn: 'root'  
})  
export class ProductsService {  
  uri = 'http://localhost:4000/products';  
  constructor(private http: HttpClient) { }  
  addProduct(ProductName:string, ProductDescription:string, ProductPrice:number) {  
    const obj = {  
      ProductName,  
      ProductDescription,  
      ProductPrice  
    };  
    console.log(obj);  
    this.http.post(`${this.uri}/add`, obj)  
        .subscribe(res => console.log('Done'));  
  }  
}  