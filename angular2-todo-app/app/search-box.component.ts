import { Component, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
    selector: 'search-box',
    templateUrl: 'app/search-box.component.html'
})

export class SearchBoxComponent {
    @Output()
    update = new EventEmitter();

    ngOnInit() {
        this.update.emit('');
    }
}
