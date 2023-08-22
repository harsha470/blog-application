import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {


  constructor(private http : HttpClient){} 

  onSubmit(data : NgForm){
    let bodyData = {
      "email" : data.value.email,
      "password" : data.value.password
    }

    this.http.post("http://localhost:3000/login",bodyData)
    .subscribe((resultData : any)=>
    {
      console.log(resultData) ; 
      alert("logged in Successfully") ; 
    })



  }
}
