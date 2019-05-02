import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../models/player.model";

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

    /**
     * Used for styling warning triangle
     */
    get balanceStatus(): string {
        let balanceStatus = '';
        if (this.player.balance < 50) {
            balanceStatus = this.player.balance < 0 ? 'var(--warning-color' : 'var(--critical-color)';
        }
        return balanceStatus;
    }

    /**
     * Used for tooltip content
     */
    get balanceWarningInfo(): string {
        return this.player.balance < 0 ? 'Player\'s balance is below zero' : 'Player\'s balance is getting low';
    }

    @Input() player: Player;

    constructor() {
    }

    ngOnInit() {
    }

}
