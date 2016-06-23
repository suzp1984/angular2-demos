import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { PHONES } from './mock-phone';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhoneService {
    getPhones(): Promise<Phone []> {
        return Promise.resolve(PHONES);
    };
    
};
