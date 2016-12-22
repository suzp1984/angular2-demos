import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TodoInputComponent } from './todo-input.component';
import { TodoListComponent } from './todo-list.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, TodoInputComponent, TodoListComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
