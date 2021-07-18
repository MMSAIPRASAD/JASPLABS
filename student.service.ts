import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getstudent(){
   return this.http.get('http://localhost:3000/students');
  }

  getteacher(){
    return this.http.get('http://localhost:3000/teachers');

  }

  getnonteaching(){
    return this.http.get('http://localhost:3000/nonteacher');

  }

  getstrength(){
    return this.http.get('http://localhost:3000/total');

  }
}
