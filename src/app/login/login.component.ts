import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private userservice:UserService,private router:Router) {
    
   }

   email= new FormControl('',[Validators.required,Validators.email]);
   password= new FormControl('',Validators.required);

  loginForm = this.formBuilder.group(
    {
      email:this.email,
      password:this.password
    }
  )

  login(){
    // console.log(this.loginForm.value.email);
    
    this.userservice.getUser(this.loginForm.value.email,this.loginForm.value.password).subscribe(res=>{
      // console.log(res);
      
      if (res) {
        localStorage.setItem('username',this.loginForm.value.email);
        alert('Successful LogIn!!')
        location.href='/fontPage';
      }
      else{
        alert('Wrong Credential!!')
        this.loginForm.reset();
      }
    });;
  }
  ngOnInit(): void {
  }

}
