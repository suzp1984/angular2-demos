import { Component, OnInit } from '@angular/core';
import { Phone } from './phone';
import { PhoneService } from './phone.service';

@Component(
    {
        selector: 'phonecat',
        styleUrls: ['app/phonecat.component.css'],
        templateUrl: 'app/phonecat.component.html',
        providers: [PhoneService]
    }
)

export class PhonecatComponent {
    title = "Angular2 Phonecat";

    phones: Phone[];
    
    constructor(private phoneService: PhoneService) {
    }

    ngOnInit() {
        this.phoneService.getPhones().then(phones => this.phones = phones);
    }
};
