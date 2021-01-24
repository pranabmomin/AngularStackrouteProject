import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any[]=[];
  
  total:number=0;
  length:number=0;
  constructor(private productservice:ProductService,private userservice:UserService,private router:Router) { 
    this.userservice.getCart(this.userservice.username).subscribe(res => {
      this.products=Array(res);
      this.products=this.products[0];
      // console.log(this.products);
      // console.log(res);
      this.total=this.products.reduce((total,p) =>total + p.price,0)
      // console.log(this.total);
      this.length=this.products.length;
    });
    
  }

  deleteFromCart(id:number){
    this.userservice.deleteFromCart(this.userservice.username,id).subscribe(res=>{
      // console.log(res);
      if(res){
        alert("Removed from cart!");
        this.products=this.products.filter(product => product.id !== id);
        this.total=this.products.reduce((total,p) =>total + p.price,0);
        this.length=this.products.length;
      }
    });
  }
  ngOnInit(): void {
  }

}
