import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{

  blogs : Blog[] = [] ; 
  curblog : any ; 
      constructor(private route : ActivatedRoute, private blogService : BlogService) {}
    ngOnInit() : void 
    {
      this.blogs = this.blogService.blogs ; 
        this.route.paramMap.subscribe((param)=>{
          this.curblog = this.blogs.find(blog => blog.id === param.get('id')) ; 
        
        })
      
    }
}