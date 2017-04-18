import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ParentService {
    somevar = 0;

    constructor() { }

    getSomevar(){
        return this.somevar;
    }
}
