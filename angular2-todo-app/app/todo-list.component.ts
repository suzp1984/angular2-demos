import { Component, OnInit, Input } from "@angular/core";
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { SearchPipe } from './search.pipe';
import { StartedPipe } from './started.pipe';
import { TodoItemComponent } from './todo-item.component';

@Component({
    selector: 'todo-list',
    pipes: [SearchPipe, StartedPipe],
    styleUrls: ['app/todo-list.component.css'],
    templateUrl: 'app/todo-list.component.html',
    directives: [TodoItemComponent]
})

export class TodoListComponent {
    @Input()
    term: string;
    
    @Input()
    status: string;
    
    constructor(public todoService: TodoService) {
    }

    ngOnInit() {

    }

    toggle(todo: Todo) {
        this.todoService.toggleTodo(todo);
    }
}
