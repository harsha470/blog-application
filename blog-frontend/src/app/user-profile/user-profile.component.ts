import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(
    private userService : UserService,
    private router : Router,
    private localStorageService : LocalStorageService
  ){

  }
  curUser! : User ;

  ngOnInit(): void {

    const userId = this.localStorageService.getUser()  ; 
    if(userId) this.userService.getUserDetails(userId).subscribe((result : any)=>{
      this.curUser = result ; 
    })
  }

  isEditMode : boolean = false ; 
  onSubmit(data : any)  {
      

    let bodyData = {
      "firstName" : data.value.firstName,
      "lastName" : data.value.lastName,
      "email" : data.value.email,
      "password" : data.value.password,
    }
    this.userService.updateUserDetails(bodyData,this.curUser._id).subscribe((result)=>{
            alert("user details updated successfully")  ; 
            this.isEditMode = !this.isEditMode ; 
    }) ; 

  }
  toggleEditMode() {
      this.isEditMode = !this.isEditMode ; 
  }

}


