import { Component } from '@angular/core';
import { CommentFormComponent } from './comment-form.component';
import { CommentAvatarListComponent } from './comment-avatar-list.component';
import { CommentListComponent } from './comment-list.component';
import { Comment } from './comment';
import { CommentService } from './comment.service';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html',
    directives: [CommentFormComponent, CommentAvatarListComponent, CommentListComponent],
    providers: [CommentService]
})

export class AppComponent {

    comments: Comment[];

    constructor(public commentService: CommentService) {
        commentService.getComments().then(comments => this.comments = comments);
    }
    
    commentSubmit(event) {
        console.log("comment submit: ", event);
        // this.commentService.getComments().then(comments => this.comments = comments);
        // this.comments = this.commentService.comments;
        // this.comments = [...this.comments, event];
        console.log("comments length: ", this.comments.length);
    }
}
