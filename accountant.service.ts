import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountantService {

  constructor() { }
  ValidateAccountant(email,password){
    if(email=="Accountant@gmail.com"&&password=="accountant"){
    return true;
    }
    else
    return false;
    
  }
}
