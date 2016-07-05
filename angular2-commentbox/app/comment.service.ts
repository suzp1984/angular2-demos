import { Comment } from './comment';
import { COMMENTS } from './mock-comments';

import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {
    comments: Comment[] = [];
    
    constructor() {
        this.comments = [...COMMENTS];
    }
    
    getComments(): Promise<Comment[]> {
        return Promise.resolve(this.comments);
    }

    addComment(c : Comment) {
        this.comments = [...this.comments, c];
        console.log(this.comments);
    }

    getCommentsLength(): number {
        return this.comments.length;
    }
}
