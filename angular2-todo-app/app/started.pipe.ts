import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
    name: "started"
})

export class StartedPipe implements PipeTransform {
    transform(value: [Todo], stat: string) {
        
        return value.filter((item) => item.status == stat);
    }
}
