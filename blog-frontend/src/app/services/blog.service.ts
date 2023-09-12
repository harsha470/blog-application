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



  addBlog(data : any){
    const token = localStorage.getItem('token') ; 
    const headers = new HttpHeaders().set("Authorization", `bearer ${token}`) ;   

    return this.http.post("http://localhost:3000/blog",data,{headers})  ;
  }


  getUserBlogs(userId : string){
    const token = localStorage.getItem('token') ; 
    const headers = new HttpHeaders().set("Authorization", `bearer ${token}`) ; 
    return this.http.get(`http://localhost:3000/blog/?userId=${userId}`,{headers})
  }
  // getAllBlogs(){
  //    return this.http.get(`http://localhost:3000/blog`) ; 
  // }

  getAllBlogs(userId: string = ''){
    return this.http.get(`http://localhost:3000/blog/?userId=${userId}`) ; 
 }

  // getAllBlogsTemp

  getASingleBlog(blogId : string) : Observable<Blog>{
   return  this.http.get<Blog>(`http://localhost:3000/blog/${blogId}`) ; 
  }


  updateBlog(data : any, blogId : string) {
    const token = localStorage.getItem('token') ; 
    const headers = new HttpHeaders().set("Authorization", `bearer ${token}`) ; 
    return this.http.put(`http://localhost:3000/blog/${blogId}`,data) ; 
  }

  deleteBlog(blogId : string)
  {
    return this.http.delete(`http://localhost:3000/blog/${blogId}`)  ; 
  }
  


}