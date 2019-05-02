import {Player} from './player.model';

export class BasketballEvent {
    location: string; // Expand to separate object?
    players: Player[];
    timestamp: number;
}