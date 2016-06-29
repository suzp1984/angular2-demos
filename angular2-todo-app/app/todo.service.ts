import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

    todos: Todo[] = [
        new Todo("eat"),
        new Todo("sleep"),
        new Todo("code"),
        new Todo("dance", "completed"),
        new Todo("work"),
        new Todo("record", "completed"),
        new Todo("swim", "completed")
    ];
    
    getTodos() {
        return this.todos;
    }

    addTodo(todo:Todo) {
        this.todos = [...this.todos, todo];
    }

    toggleTodo(todo: Todo) {
        todo.toggle();
        
        const i = this.todos.indexOf(todo);
        this.todos = [
            ...this.todos.slice(0, i),
            todo,
                ...this.todos.slice(i + 1)
        ];
    }
    
}
