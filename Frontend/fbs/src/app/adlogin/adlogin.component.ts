import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent implements OnInit {

  authenticationRequest:any={

    "username":"",
    "password":"",
  };
  surveyForm!: FormGroup;
  submitted= false;
  response:any;

//*this is for declaring toggle password

  public showPassword: boolean = false;

 constructor(private service:JwtClientService,private  formBuilder: FormBuilder,private router:Router) { }

 onSubmit():void

 {

   //console.log("form is submitted");

   if((this.authenticationRequest.username!=''&& this.authenticationRequest.password!='')&&(this.authenticationRequest.username!=null && this.authenticationRequest.password!=null))

   {
     console.log("we have to submit the form");
     this.service.authenticateClient(this.authenticationRequest)
     .subscribe((data:any)=>

      {
        console.log(data);
 // localStorage.setItem('token',data)

      this.service.loginUser(data)
       if(this.service.isLoggedIn()==true)

       {
      window.location.href="/admin"
       } 

       else

       {
         alert("please enter valid details");

       } 

      },

      (error:any)=>

       {
         console.log(error);

       }
       );
      }
   
   else

   {
     alert("Fileds are empty!!");

   }

  }
 
  ngOnInit(): void {

  }

//*togglepassword method declaration  
public togglePasswordVisibility(): void {
   this.showPassword = !this.showPassword;
 }
}