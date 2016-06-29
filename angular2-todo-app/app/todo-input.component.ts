import { Component, Input } from "@angular/core";
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component(
    {
        selector: "todo-input",
        styleUrls: ['app/todo-input.component.css'],
        templateUrl: 'app/todo-input.component.html'
    }
)


export class TodoInputComponent {

    @Input()
    todoModel: Todo = new Todo();
    
    constructor(private todoServise: TodoService) {
    }

    onClick() {
        this.todoServise.addTodo(this.todoModel);

        console.log(this.todoServise.todos);
        this.todoModel = new Todo();
    }
}
