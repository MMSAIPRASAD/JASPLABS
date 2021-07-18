import { Component, OnInit } from '@angular/core';
  import {FormGroup,FormBuilder,Validators} from '@angular/forms';
  import {Router} from '@angular/router';
  import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  
  
  submitted=false;
  image='assets/image/unnamed.jpg'
  reactive:FormGroup; 
  constructor(private router:Router,
              private service1:AuthService,
              private fb:FormBuilder) {
  
  }
  
  ngOnInit(): void {
    //this.registerForm=this.fb.group({
    //  username:['ADMIN',Validators.required],
     // password:['admin',Validators.required]
    //})
  
    this.reactive=this.fb.group({
      email:['ADMIN@gmail.com',[Validators.required,Validators.email]],
      password:['adminadmin',[Validators.required,Validators.minLength(6)]],
      
    },
    );
    
    }
   
    
    
    
    
  
  submit(){
    this.submitted=true;
    if (this.reactive.invalid) {
      return;
    }
    var res=this.service1.ValidateUser(this.reactive.value["email"],this.reactive.value["password"]);
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
  
  