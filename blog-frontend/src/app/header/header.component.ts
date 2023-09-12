import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private localStorageService: LocalStorageService, private userService : UserService, private router : Router) {}

  ngOnInit() {
    this.localStorageService.loginStatus.subscribe({
      next: (value: boolean) => {
        this.isLoggedIn = value;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  onLogout(){
    this.userService.logout() ;
    this.router.navigate(['/home']) ; 

  }
}
