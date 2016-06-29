import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "search"
})

export class SearchPipe implements PipeTransform {
    transform(value: string, term: string) {
        return value.filter((item) => item.title.startsWith(term));
    }
}
