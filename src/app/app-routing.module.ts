import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AttendanceComponent} from "./attendance/attendance.component";

const routes: Routes = [
    {
        path: 'attendance',
        component: AttendanceComponent
    },
    {
        path: '',
        redirectTo: '/attendance',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
