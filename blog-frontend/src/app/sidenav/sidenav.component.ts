import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

    userId : string  = "" ;  
    isLoggedIn : boolean = false ; 
    constructor(private localStorageService : LocalStorageService){
      this.isLoggedIn = localStorageService.getLoginStatus()  ;
      const user  = localStorageService.getUser() ; 
     if(user) this.userId = user ;  
    }

    ngOnInit() {
      this.localStorageService.loginStatus.subscribe({
        next: (value: boolean) => {
          this.isLoggedIn = value;
          console.log(this.isLoggedIn) ; 
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          // Handle completion
        },
      });
    }

    
}
