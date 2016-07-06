import { Component, OnInit, Input } from '@angular/core';
import { Comment } from './comment';
import { CommentService } from './comment.service';
import { CommentRemoveConfirmation } from './comment-remove-confirmation.component';

@Component({
    selector: 'comment-list',
    styleUrls: ['app/comment-list.component.css'],
    templateUrl: 'app/comment-list.component.html',
    directives: [ CommentRemoveConfirmation ]
   // providers: []
})

export class CommentListComponent {

    @Input()
    comments: Comment[];
    
    constructor(public commentService: CommentService) {
        this.comments = [];
    }

    ngOnInit() {
        this.commentService.getComments().then(comments => this.comments = comments);
    }
}
