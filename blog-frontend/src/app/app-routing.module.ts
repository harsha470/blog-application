import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  { path: 'home', component: BlogsComponent },
  { path: 'about', component: AboutComponent },
  {path : 'blog/:id', component: BlogComponent},
  {path : 'addblog', component : AddBlogComponent},
  {path : 'myblog', component: BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
