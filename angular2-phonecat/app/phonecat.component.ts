import { Component, OnInit } from '@angular/core';
import { Phone } from './phone';
import { PhoneService } from './phone.service';
import { SearchPipe } from './search.pipe';
import { OrderByPipe } from './orderby.pipe';

@Component(
    {
        selector: 'phonecat',
        styleUrls: ['app/phonecat.component.css'],
        templateUrl: 'app/phonecat.component.html',
        providers: [PhoneService],
        pipes: [SearchPipe, OrderByPipe]
    }
)

export class PhonecatComponent {
    title = "Angular2 Phonecat";

    phones: [Phone];

    term: string;
    orderProp: string

    constructor(public phoneService: PhoneService) {
        this.term = '';
        this.orderProp = 'name';
    }

    ngOnInit() {

        this.phoneService.getPhones().then(phones => this.phones = phones);
    }

    search(value) {
        console.log(value);
    }
};
