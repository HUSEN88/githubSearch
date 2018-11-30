import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { RepoComponent } from './repo.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
    ],
    declarations: [
       RepoComponent,
       RepoDetailsComponent
    ],
    providers: [],
    exports: [
        RepoComponent
    ]
})
export class RepoModule {
}