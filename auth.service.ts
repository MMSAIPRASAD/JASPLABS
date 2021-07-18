import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 constructor() { }
  ValidateUser(email,password){
    if(email=="ADMIN@gmail.com"&&password=="adminadmin"){
    return true;
    }
    else
    return false;
    
  }
}
