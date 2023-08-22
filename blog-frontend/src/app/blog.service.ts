import { Injectable } from '@angular/core';
import { Blog } from './models/blog';
import {HttpClient} from '@angular/common/http'

interface User{
  firstName : string ;
  lastName : string ; 
  email : string ; 
  password : string ; 
}


export class BlogService {
  blogs: Blog[] = [
    {
      id : '1', title: "first blog", desc: "this is first blog", authorId : "harsha" 
    },
    {
      id : '2', title: "second blog", desc: "this is second blog", authorId : "vardhan" 
    },{
      id : '3', title: "third blog", desc: "this is third blog", authorId : "harsha" 
    },{
      id : '4', title: "fourth blog", desc: "this is fourth blog", authorId : "vardhan" 
    }
  ] ; 
  users:User[] =[];



  constructor(){ }
}