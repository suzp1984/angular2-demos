import { Component } from "@angular/core";
import { TodoInputComponent } from './todo-input.component';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';
import { StatusSelectorComponent } from './status-selector.component';
import { SearchBoxComponent } from './search-box.component';

@Component(
    {
        selector: "my-app",
        styleUrls: ['app/app.component.css'],
        templateUrl: 'app/app.component.html',
        directives: [TodoInputComponent, TodoListComponent, StatusSelectorComponent, SearchBoxComponent],
        providers: [ TodoService ]
    }
)


export class AppComponent {
    title = "Todo App";
}
