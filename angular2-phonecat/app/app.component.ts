import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PhonecatComponent } from './phonecat.component';
import { PhoneDetailComponent } from './phone-detail.component';

@Component(
    {
        selector: 'my-app',
        styleUrls: ['app/app.component.css'],
        templateUrl: 'app/app.component.html',
        directives: [ROUTER_DIRECTIVES],
        providers: [ROUTER_PROVIDERS]
    }
)

@RouteConfig(
    [
        {
            path: '/phonecat',
            name: 'Phonecat',
            useAsDefault: true,
            component: PhonecatComponent
        },
        {
            path: '/phone/:id',
            name: 'PhoneDetail',
            component: PhoneDetailComponent
        }
    ]
)

export class AppComponent {
    title = "Angular2 Phonecat";
};
