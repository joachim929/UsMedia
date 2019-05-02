import {Component, OnInit} from '@angular/core';

// Services
import {CoachService} from '../services/coach.service';

// Models
import {Coach} from '../models/coach.model';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    private coach: Coach;

    get coachFullName(): string {
        return this.coach.firstName + ' ' + this.coach.surname;
    }

    constructor(private coachService: CoachService) {
    }

    ngOnInit() {
        this.coach = this.coachService.getCoach(); // Pretend to make a call to get coach ('User')
    }
}
