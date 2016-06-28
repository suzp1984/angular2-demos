import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { PhoneService } from './phone.service';

@Component({
    selector: 'phone-detail',
    styleUrls: ['app/phone-detail.component.css'],
    templateUrl: 'app/phone-detail.component.html',
    providers: [PhoneService]
})

export class PhoneDetailComponent {
    title = "Angular2 Phone Detail";
    
    constructor(private routeParams: RouteParams,
                private phoneService: PhoneService) {
    }

    ngOnInit() {
        if (this.routeParams.get('id') != null) {
            let id = this.routeParams.get('id');

            // get id from phone.service
        }
    }
};
