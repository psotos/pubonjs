// RxJs
import { Observable, Subject } from 'rxjs'; 

import { PubonObject } from './pubonObject';

export enum PubonObjectTypes {
    DOCUMENT = 'DOCUMENT',
    COLLECTION = 'COLLECTION'
}

export class PubonObjectPublisher {
    dataSubject: Subject<PubonObject> = new Subject<PubonObject>();

    constructor(type: PubonObjectTypes, url: string) {

    }

    getListener() : Observable<PubonObject> {
        return this.dataSubject.asObservable();
    }

}