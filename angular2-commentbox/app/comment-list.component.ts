import { Component, OnInit } from '@angular/core';
import { Comment } from './comment';
import { CommentService } from './comment.service';

@Component({
    selector: 'comment-list',
    templateUrl: 'app/comment-list.component.html',
    providers: [CommentService]
})

export class CommentListComponent {
    comments: Comment[];
    
    constructor(public commentService: CommentService) {
    }

    ngOnInit() {
        this.commentService.getComments().then(comments => this.comments = comments);
    }
}
