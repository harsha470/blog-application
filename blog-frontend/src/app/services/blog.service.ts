import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  constructor(private http : HttpClient,private router : Router){ }
  blogs: Blog[] = [
    {
      _id : '1', title: "first blog", desc: "this is first blog", authorId : "harsha" 
    },
    {
      _id : '2', title: "second blog", desc: "this is second blog", authorId : "vardhan" 
    },{
      _id : '3', title: "third blog", desc: "this is third blog", authorId : "harsha" 
    },{
      _id : '4', title: "fourth blog", desc: "this is fourth blog", authorId : "vardhan" 
    }
  ] ; 



  addBlog(data : any){
    const token = localStorage.getItem('token') ; 
    const headers = new HttpHeaders().set("Authorization", `bearer ${token}`) ;   

    return this.http.post("http://localhost:3000/blog",data,{headers})  ;
  }


  getAllBlogs(isRequireUserBlogs: boolean = true){
    const token = localStorage.getItem('token') ; 
    const headers = new HttpHeaders().set("Authorization", `bearer ${token}`) ; 
    return this.http.get(`http://localhost:3000/blog/?all=${isRequireUserBlogs}`,{headers})
  }

  getASingleBlog(blogId : string) : Observable<Blog>{
   return  this.http.get<Blog>(`http://localhost:3000/blog/${blogId}`) ; 
  }

  


}