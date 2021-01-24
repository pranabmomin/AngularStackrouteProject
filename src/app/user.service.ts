import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:any;
  
  username:any;
  constructor(private userClient:HttpClient) {
    this.username=localStorage.getItem('username');
   }

  getUser(email:string,passowrd:string){
    return this.userClient.get(`http://localhost:8081/api/v1/user/${email}/${passowrd}`);
  }

  saveUser(user:any){
    const httpHeaders=new HttpHeaders({
      'content-type':'application/json'
    })
    return this.userClient.post(`http://localhost:8081/api/v1/save`,user,{headers:httpHeaders});
  }

  getCart(email:string){
    return this.userClient.get(`http://localhost:8081/api/v1/cart/${email}`);
  }

  addToCart(email:string,product:any){
    const httpHeaders=new HttpHeaders({
      'content-type':'application/json'
    })
    return this.userClient.post(`http://localhost:8081/api/v1/addToCart/${email}`,product,{headers:httpHeaders}); 
  }

  deleteFromCart(email:string,id:number){
    return this.userClient.delete(`http://localhost:8081/api/v1/deleteFromCart/${email}/${id}`);
  }

  getUsers(){
    return this.userClient.get("http://localhost:8081/api/v1/api/v1/users");
  }

}
