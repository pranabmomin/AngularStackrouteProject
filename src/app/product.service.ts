import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:any[]=[];
  constructor(private storeClient:HttpClient) { }

  getProducts(){
    return this.storeClient.get("https://fakestoreapi.com/products");
  }

  getById(id:number){
    return this.storeClient.get("https://fakestoreapi.com/products/"+id);
  }

  getByCategory(text:string){
    return this.storeClient.get("https://fakestoreapi.com/products/category/"+text);
  }
}
