import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { CommentService } from './comment.service';
import { Comment } from './comment';

@Component({
    selector: 'comment-form',
    styleUrls: ['app/comment-form.component.css'],
    templateUrl: 'app/comment-form.component.html',
    providers: [CommentService]
})


export class CommentFormComponent {
    
    author : string = "";
    body : string = "";
    model : Comment;
    
    constructor(public commentService: CommentService) {
    }

    onSubmit() {
        console.log(this.author);
        console.log(this.body);
        this.model = new Comment(this.commentService.getCommentsLength() + 1, this.author, this.body, "assets/images/avatars/avatar-default.png");
        this.commentService.addComment(this.model);
        this.author = "";
        this.body = "";
    }
}
