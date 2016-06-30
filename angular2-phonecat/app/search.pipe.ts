import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from './phone';

@Pipe({
    name: "search"
})

export class SearchPipe implements PipeTransform {
    transform(values: [Phone], term: string) {
        // console.log(values);
        if (values === undefined) {
            return values;
        } else {
            return values.filter((item) => item.name.startsWith(term));
        }
    }
}
