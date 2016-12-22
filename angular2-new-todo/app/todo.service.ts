import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';
import { TODOES } from './mock-todo';

@Injectable()
export class TodoService {
    getTodoes(): Todo[] {
        return TODOES;
    }
}
