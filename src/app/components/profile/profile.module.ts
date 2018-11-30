import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProfileComponent } from './profile.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [],
    exports: [
        ProfileComponent
    ]
})
export class ProfileModule {
}