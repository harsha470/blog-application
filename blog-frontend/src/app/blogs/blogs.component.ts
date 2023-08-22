import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent implements OnInit {

 blogs : Blog[] = [] ; 
 constructor(private blogService : BlogService){

 }
  ngOnInit(): void {
    this.blogs = this.blogService.blogs ; 
  }
}