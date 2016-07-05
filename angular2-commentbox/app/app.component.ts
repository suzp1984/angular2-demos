import { Component } from '@angular/core';
import { CommentFormComponent } from './comment-form.component';
import { CommentAvatarListComponent } from './comment-avatar-list.component';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html',
    directives: [CommentFormComponent, CommentAvatarListComponent]
})

export class AppComponent {
    
}
