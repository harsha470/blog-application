import { Component } from '@angular/core';
import * as jwt from 'jsonwebtoken';
import { NgForm } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {
  constructor(private blogService : BlogService, private router : Router){} 
  onSubmit(data : NgForm){


      // const decodedToken = jwt.decode(token) as any;
       let  blogData  = {
          "title" : data.value.title,
          "desc" : data.value.desc,
        }

        
        this.blogService.addBlog(blogData).subscribe((result:any)=>{
          alert("blog added Successfully") ;
        this.router.navigate(['/home']) ; 
    
      })

  }
}