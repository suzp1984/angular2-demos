import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from './phone';

@Pipe({
    name: "orderBy"
})

export class OrderByPipe implements PipeTransform {
    transform(values: [Phone], term: string) {
        console.log(term);
        if (values === undefined) {
            return values;
        } else {
            values.sort((a: Phone, b: Phone) => {
                if (term == 'age') {
                    if (a.age > b.age) {
                        return 1;
                    } else if (a.age < b.age) {
                        return -1;
                    } 
                } else if (term == 'name') {
                    if (a.id.charAt(0) > b.id.charAt(0)) {
                        return 1;
                    } else if (a.id.charAt(0) < b.id.charAt(0)) {
                        return -1;
                    }
                } else {
                    return 0
                }

                return 0;
            });
            
            return values;
        }
    }
}
