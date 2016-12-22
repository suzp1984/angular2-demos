import { Component } from '@angular/core';

@Component({
    selector: 'todo-input',
    templateUrl: 'app/todo-input.component.html',
    styleUrls: ['app/todo-input.component.css']
})

export class TodoInputComponent {

    add(todo: string): void {
        console.log(todo);
    }
}

