import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {


  constructor(private http : HttpClient, private userService : UserService, private router : Router){} 

  onSubmit(data : NgForm){
    let bodyData = {
      "email" : data.value.email,
      "password" : data.value.password
    }

     this.userService.login(bodyData)



   



  }
}
