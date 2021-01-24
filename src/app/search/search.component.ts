import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private productservice:ProductService,private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  result:any[]=[];
  selectedValue:string='id';
  search(q:string){
    // console.log(this.selectedValue,q);
    if(this.selectedValue=="id"){
      // console.log(+q);
      this.productservice.getById(+q).subscribe(res=>{
        // console.log(res);
        this.result=Array(res);
        // console.log(this.result);
        
      })
    }
    else if(this.selectedValue="category"){
      this.productservice.getByCategory(q).subscribe(res=>{
        //console.log(res);
        this.result=Array(res);
        this.result=this.result[0];
        // console.log(this.result);
        
      })
    }
  }

  addToCart(product:any){
    if (this.userservice.username) {
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

}
