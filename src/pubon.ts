import { Observable, Subscription } from 'rxjs';

import  HttpCaller from './httpCaller';
import { PubonObjectTypes, PubonObjectPublisher } from './pubonObjectPublisher';

export class Pubon {
    constructor() {

    }

    subscribeToPublisher(type: PubonObjectTypes, url: string): Observable {
        const pop = new PubonObjectPublisher(type, url);

        return pop; 
    }
}