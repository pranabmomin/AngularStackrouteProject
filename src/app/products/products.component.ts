import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of, pipe } from 'rxjs';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';


import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[]=[];
  constructor(private productservice:ProductService,private userservice:UserService,private router:Router) { 
    this.productservice.getProducts().subscribe(res => {
      this.products=Array(res);
      this.products=this.products[0];
      // console.log(this.products);
      // console.log(this.products);
    });
  }

  addToCart(product:any){
    if (this.userservice.username){
      this.userservice.addToCart(this.userservice.username,product).subscribe(res=>{
        // console.log(res);
        if (res) {
          alert('Added to Cart');
        }else{
          alert('Already present in Cart!')
        }
      });
    }else{
      alert('Please login first!');
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
  }
}
