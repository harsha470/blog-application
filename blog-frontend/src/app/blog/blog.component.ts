import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  curblog: any   ; 
  blogTitle : string = "" ; 
  blogDesc : string = "" ; 
  isAuthorCurrentUser : boolean = false ; 
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private localStorageService : LocalStorageService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      const id = param.get('id') ; 
      if(id) this.blogService.getASingleBlog(id).subscribe((blog : Blog)=>{
        this.curblog = blog ; 
        this.isAuthorCurrentUser = (this.localStorageService.getUser() === this.curblog.authorId) ; 
     }) ; 
    })
  }
}
