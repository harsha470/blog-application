import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  isLoggedIn : boolean  ;
  newCommentText: string = '';
  comments: Comment[] = [];
  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {
    this.isLoggedIn = this.localStorageService.getLoginStatus();
  }

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.commentService.getAllComments(blogId).subscribe((result: any) => {
        this.comments = result;
      });
    }
  }

  addComment() {
    let data = {
      commentText: this.newCommentText,
      commentDate: new Date().toDateString(),
    };
    const blogId = this.route.snapshot.paramMap.get('id');

    if (blogId) {
      this.commentService.addComment(blogId, data).subscribe((result: any) => {
        alert('comment added successfully');
        console.log(result);
        this.comments.unshift(result);
      });
    }
  }
}
