import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

import { Todo } from './todo';

@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo-list.component.html',
    styleUrls: ['app/todo-list.component.css'],
    providers: [ TodoService ]
})

export class TodoListComponent implements OnInit {

    todoes: Todo[];

    constructor(private todoService: TodoService) {}
    
    ngOnInit() {
        this.todoes = this.todoService.getTodoes();
    }
    
}
