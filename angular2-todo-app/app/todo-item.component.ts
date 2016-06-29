import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'todo-item',
    styleUrls: ['app/todo-item.component.css'],
    templateUrl: 'app/todo-item.component.html'
})

export class TodoItemComponent {
    @Input()
    todo: Todo;
    
    @Output()
    toggle = new EventEmitter();
}
