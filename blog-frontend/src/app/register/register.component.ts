import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private blogService : BlogService, private http: HttpClient,private userService : UserService ){

  }
    
  // {firstName : string, lastName : string, email : string, password : string}
    onSubmit(data : NgForm)  {
      

      let bodyData = {
        "firstName" : data.value.firstName,
        "lastName" : data.value.lastName,
        "email" : data.value.email,
        "password" : data.value.password,
      }

      this.userService.register(bodyData) ; 

    
    }
}
