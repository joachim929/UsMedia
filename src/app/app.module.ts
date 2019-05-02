import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayerComponent} from './player/player.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AvatarComponent} from './avatar/avatar.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { OrderByPipe } from './order-by.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PlayerComponent,
        AttendanceComponent,
        NavigationComponent,
        AvatarComponent,
        OrderByPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
