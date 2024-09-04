import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authenticationRequest:any={
    "username":"",
    "password":""
    
   
  };

  surveyForm!: FormGroup;
  submitted= false;

  response:any;

//*this is for declaring toggle password 
  public showPassword: boolean = false;
 
 constructor(private service:JwtClientService,private  formBuilder: FormBuilder,private router:Router) { }


  ngOnInit(): void {
  }

  OnRegister()
  {
     this.service.subscribeClient(this.authenticationRequest)
     .subscribe((data:any)=>{
      console.log(data)
      this.router.navigate(['login'])

    });
  }
    public togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
    }
 

}