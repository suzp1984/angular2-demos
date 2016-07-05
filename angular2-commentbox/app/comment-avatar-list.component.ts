import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment';

@Component({
    selector: 'comment-avatar-list',
    styleUrls: ['app/comment-avatar-list.component.css'],
    templateUrl: 'app/comment-avatar-list.component.html',
    providers: [CommentService]
})

export class CommentAvatarListComponent {
    avatars: string[];

    constructor(public commentService: CommentService) {
    }

    ngOnInit() {
        this.commentService.getComments().then(
            comments =>
                this.avatars = comments.map(comment => {return comment.avatarUrl;})
        );
    }
    
}
