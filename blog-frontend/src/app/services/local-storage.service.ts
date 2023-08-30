import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken' ; 

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private isLoggedInSubject = new BehaviorSubject<boolean> (false) ; 

  public loginStatus : Observable<boolean>  = this.isLoggedInSubject.asObservable() ; 

  constructor() {

      this.isLoggedInSubject.next(this.getLoginStatus()) ; 

   }

   setToken(token : string)  {
      localStorage.setItem("token", token) ; 
   }
   getToken() : string {
      const token =  localStorage.getItem('token') ; 
        return token? token : "" ; 
   }

   setLoginStatus(loggedIn : boolean ) {
      localStorage.setItem("logged_in",`${loggedIn}`) ; 

      this.isLoggedInSubject.next(loggedIn) ; 
   }
  getLoginStatus() : boolean {
    return localStorage.getItem('logged_in') === "true"; 
  }

  setUser(userId : string){
    localStorage.setItem("userId", userId) ; 
  }

  getUser() {
    return localStorage.getItem('userId') ; 
  }


}
