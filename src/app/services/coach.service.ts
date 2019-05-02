import {Injectable} from '@angular/core';

// Dummy Data
import {COACH} from '../dummy-data';

@Injectable({
    providedIn: 'root'
})
export class CoachService {
    dummyCoach = COACH;

    constructor() {
    }

    getCoach() {
        return this.dummyCoach;
    }
}
