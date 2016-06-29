import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
    name: "search"
})

export class SearchPipe implements PipeTransform {
    transform(value: [Todo], term: string) {
        return value.filter((item) => item.title.startsWith(term));
    }
}
