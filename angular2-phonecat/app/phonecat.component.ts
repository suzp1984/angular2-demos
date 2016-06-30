import { Component, OnInit } from '@angular/core';
import { Phone } from './phone';
import { PhoneService } from './phone.service';
import { SearchPipe } from './search.pipe';

@Component(
    {
        selector: 'phonecat',
        styleUrls: ['app/phonecat.component.css'],
        templateUrl: 'app/phonecat.component.html',
        providers: [PhoneService],
        pipes: [SearchPipe]
    }
)

export class PhonecatComponent {
    title = "Angular2 Phonecat";

    phones: [Phone];

    term: string;

    constructor(public phoneService: PhoneService) {
    }

    ngOnInit() {
        this.term = '';
        this.phoneService.getPhones().then(phones => this.phones = phones);
    }

    search(value) {
        console.log(value);
    }
};
