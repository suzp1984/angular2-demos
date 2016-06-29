import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'status-selector',
    templateUrl: 'app/status-selector.component.html'
})

export class StatusSelectorComponent {
    @Output()
    select = new EventEmitter();

    statuses = ["started", "completed"];

    ngOnInit() {
        this.select.emit(this.statuses[0]);
    }
}
