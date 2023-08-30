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
      this.http.post("http://localhost:3000/login",data).subscribe((result:any)=>{
        localStorage.setItem("token", result.token) ; 
        this.localStorageService.setLoginStatus(true) ; 
        this.localStorageService.setUser(result.userId) ; 
        // this.localStorageService.
        this.router.navigate(['/home']) ; 

      })
  }

  logout(){
    this.localStorageService.setToken("") ; 
    this.localStorageService.setLoginStatus(false) ; 
  }

  register(data : any){
    this.http.post("http://localhost:3000/register",data,{responseType : 'text'})
    .subscribe((result : any)=>
    {
      alert("registered Successfully") ; 
      this.router.navigate(['/login']) ; 
      
    })
  }
}

