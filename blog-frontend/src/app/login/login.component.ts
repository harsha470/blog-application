import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  onSubmit(data: NgForm) {
    let bodyData = {
      email: data.value.email,
      password: data.value.password,
    };

    if (data.valid) {
      this.userService.login(bodyData).subscribe((result: any) => {
        localStorage.setItem('token', result.token);
        this.localStorageService.setLoginStatus(true);
        this.localStorageService.setUser(result.userId);
        this.router.navigate(['/home']);
      });
    }
    else {
      alert("Please enter all the required fields") ; 
    }
  }
}
