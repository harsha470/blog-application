import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];
  constructor(
    private blogService: BlogService,
    private route : ActivatedRoute, 
    private router : Router


    ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
        const myblog = (this.router.url.includes('myblog')) ; 
        if(myblog)
        {
          console.log("harsha") ; 
            this.blogService.getAllBlogs(false).subscribe((result : any)=>{
              console.log((result));
              
              this.blogs = result.userBlogs ; 
            })
          }
          else{
            this.blogService.getAllBlogs().subscribe((result: any) => {
            console.log((result));
            this.blogs = result.userBlogs;
          });

        }
    });
  }
}
