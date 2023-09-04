import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient, private router : Router, private localStorageService : LocalStorageService) { }

  login(data : any){
     return  this.http.post("http://localhost:3000/login",data) ; 
  }

  logout(){
    this.localStorageService.setToken("") ; 
    this.localStorageService.setLoginStatus(false) ; 
  }

  register(data : any){
     return this.http.post("http://localhost:3000/register",data) ; 
    
  }

  getUserDetails(userId : string){
      return this.http.get(`http://localhost:3000/user/${userId}`) ; 
  }

  updateUserDetails(data: any, userId: string){
    return this.http.put(`http://localhost:3000/user/${userId}`,data) ; 
  }
}

