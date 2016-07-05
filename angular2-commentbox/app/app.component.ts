import { Component } from '@angular/core';
import { CommentFormComponent } from './comment-form.component';


@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html',
    directives: [CommentFormComponent]
})

export class AppComponent {
    
}
