import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../models/player.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],
    animations: [
        // Fade in/out animation
        trigger('fadeAnimation', [
            // Resting state
            state('in', style({opacity: 1})),
            // Fade in on creation
            transition('void => *', [
                style({opacity: 0}),
                animate(800)
            ]),
            // Fade out on destroy
            transition('void => *',
                animate(800, style({opacity: 0})))
        ])
    ]
})
export class PlayerComponent implements OnInit {
    @Input() player: Player;

    constructor() {
    }

    ngOnInit() {
    }

}
