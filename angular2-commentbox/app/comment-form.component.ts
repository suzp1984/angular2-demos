import { Component } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
    selector: 'comment-form',
    styleUrls: ['app/comment-form.component.css'],
    templateUrl: 'app/comment-form.component.html',
    providers: [CommentService]
})


export class CommentFormComponent {
    constructor(public commentService: CommentService) {
    }
}
