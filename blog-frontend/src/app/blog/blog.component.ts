import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  isEdit : boolean = false ; 
  curblog: any   ; 
  blogTitle : string = "" ; 
  blogDesc : string = "" ; 
  mode : string ="" ; 
  isAuthorCurrentUser : boolean = false ; 
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private localStorageService : LocalStorageService,
    private router: Router
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
  
  onEdit(){
    this.isEdit = true ; 
  }
  onUpdate(){
    let bodyData = {
      title : this.curblog.title ,
      desc : this.curblog.desc
    }
    this.blogService.updateBlog(bodyData,this.curblog._id).subscribe((result)=>{
      this.isEdit = false ; 
    }
    )
  }

  onDelete(){
    this.blogService.deleteBlog(this.curblog._id).subscribe((result)=>{
      alert("blog deleted successfully") ; 
      this.router.navigate(['/home']) ; 
    })
  }

 
}
