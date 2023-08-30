import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private localStorageService: LocalStorageService, private userService : UserService) {}

  ngOnInit() {
    this.localStorageService.loginStatus.subscribe({
      next: (value: boolean) => {
        this.isLoggedIn = value;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        // Handle completion
      },
    });
  }

  onLogout(){
    this.userService.logout() ; 
  }
}
