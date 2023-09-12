import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http : HttpClient,
    private router : Router
  ) { }

  getAllComments (blogId : string)   {
    const token = localStorage.getItem('token') ; 
    const headers = new HttpHeaders().set("Authorization", `bearer ${token}`) ;   

    return this.http.get<Comment[]>(`http://localhost:3000/comment/${blogId}`,{headers})  ;
  }

  addComment(blogId : string,data : {"commentText": string, "commentDate" : string}) {
      const token = localStorage.getItem('token') ; 
      const headers = new HttpHeaders().set("Authorization",`bearer ${token}`) ; 

      return this.http.post<Comment>(`http://localhost:3000/comment/${blogId}`,data,{headers}) ; 
  }

}
