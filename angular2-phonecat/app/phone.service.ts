import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { PHONES } from './mock-phones';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhoneService {
    getPhones(): Promise<Phone []> {
        return Promise.resolve(PHONES);
    };

    getPhone(id: string) {
        return getPhones().then(phones => phones.filter(phone => phone.id === id)[0]);
    }
    
};
