import {Component, OnInit} from '@angular/core';
import {NgbDatepickerConfig, NgbCalendar, NgbDateStruct, NgbDate} from '@ng-bootstrap/ng-bootstrap';

import {BASKETBALLEVENTS} from '../dummy-data';
import {BasketballEvent} from '../models/event.model';

@Component({
    selector: 'app-attendance',
    templateUrl: './attendance.component.html',
    styleUrls: ['./attendance.component.css'],
    providers: [NgbDatepickerConfig]
})
export class AttendanceComponent implements OnInit {
    // Dummy data
    basketballEvents = BASKETBALLEVENTS;

    eventsOnSelectedDate: BasketballEvent[];

    selectedEvent: BasketballEvent;
    _selectedDate: NgbDate;
    visible: boolean;

    set selectedDate(date: NgbDate) {
        this._selectedDate = date;
        this.buildEventsOnSelectedDate();
    }

    /**
     * This function returns a string which represents which amount of
     * players are 'present'
     */
    get presentPlayers(): string {
        let presentCount = 0;
        for (let player of this.selectedEvent.players) {
            if (player.present === true) {
                presentCount++;
            }
        }

        return presentCount + '/' + this.selectedEvent.players.length;
    }

    constructor(private calendar: NgbCalendar) {
        this.selectedDate = this.calendar.getToday();
        this.selectedEvent = this.basketballEvents[0];
    }

    ngOnInit() {
    }

    /**
     * This function builds an array of selectable basketball training events
     */
    buildEventsOnSelectedDate() {
        this.eventsOnSelectedDate = [];

        // Loop through data
        for (let basketballEvent of this.basketballEvents) {

            const timestampToDate = new Date(basketballEvent.timestamp);
            const eventDate: NgbDateStruct = {
                year: timestampToDate.getFullYear(),
                month: timestampToDate.getMonth() + 1,
                day: timestampToDate.getDate()
            };
            // Check if dates are equal
            if (this._selectedDate.equals(eventDate)) {
                this.eventsOnSelectedDate.push(basketballEvent);
            }
        }

        // Checks if array is empty
        if (this.eventsOnSelectedDate.length > 0) {
            // Default event of new date
            this.selectedEvent = this.eventsOnSelectedDate[0];
        }
    }

    /**
     * This function gets called when a new date is selected from the datepicker
     */
    selectEvent(event: BasketballEvent) {
        this.selectedEvent = event;
    }

    /**
     * This function gets called when a user has made a date selection,
     * it hides the date picker and sets the selected date
     */
    onDateSelection(event: NgbDate) {
        this.visible = !this.visible;
        this.selectedDate = event;
    }

    /**
     * This function compares surname values, used for ordering players alphabetically
     */
    bySurname(a, b) {
        return a.surname > b.surname ? 1 : -1
    }
}
