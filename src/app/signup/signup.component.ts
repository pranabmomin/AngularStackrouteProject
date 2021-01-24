import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  email=new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',Validators.required);

  registerForm = this.formBuilder.group(
    {
      email:this.email,
      password:this.password
    }
  )

  register(){
    // console.log(this.registerForm.value);
    
    this.userservice.saveUser(this.registerForm.value).subscribe(res=>{
      console.log(res);
      if (res) {
        alert("User Registered! Please Login now.");
        this.router.navigate(['login']);
      }else{
        alert("User Already Present!");
        this.registerForm.reset();
      }
    });
  }

}
