import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:any;
  constructor(private userservice:UserService,private router:Router) {
    this.username=this.userservice.username;
   }

  ngOnInit(): void {
  }

  logout(){
    console.log("logout");
    localStorage.removeItem('username');
    location.href='/fontPage';
  }

}
