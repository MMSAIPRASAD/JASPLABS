import { Component, OnInit } from '@angular/core';
  import {FormGroup,FormBuilder,Validators} from '@angular/forms';
  import {Router} from '@angular/router';
  import { AccountantService } from 'src/app/accountant.service';
@Component({
  selector: 'app-accountantlogin',
  templateUrl: './accountantlogin.component.html',
  styleUrls: ['./accountantlogin.component.css']
})
export class AccountantloginComponent implements OnInit {

  
  
  
    submitted=false;
  image='assets/image/unnamed.jpg'
  reactive:FormGroup; 
  constructor(private router:Router,
              private service1:AccountantService,
              private fb:FormBuilder) {
  
  }
  
  ngOnInit(): void {
    //this.registerForm=this.fb.group({
    //  username:['ADMIN',Validators.required],
     // password:['admin',Validators.required]
    //})
  
    this.reactive=this.fb.group({
      email:['Accountant@gmail.com',[Validators.required,Validators.email]],
      password:['accountant',[Validators.required,Validators.minLength(6)]],
      
    },
    );
    
    }
   
    
    
    
    
  
  submit(){
    this.submitted=true;
    if (this.reactive.invalid) {
      return;
    }
    var res=this.service1.ValidateAccountant(this.reactive.value["email"],this.reactive.value["password"]);
    if(res)
    {
  this.router.navigate(["dashboard"]);
    }
    else
    {
  alert("UNAUTHORISED");
    }
  }
  get f(){
    return this.reactive.controls;
   }
  //user()/
  //{
  //  var res=this.service1.ValidateUser(this.registerForm.value["username"],this.registerForm.value["password"]);
  //  if(res)
  //  {
  //this.router.navigate(["dashboard"]);
  //  }
   
  //}
  
  
  }
  
  