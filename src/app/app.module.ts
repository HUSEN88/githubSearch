import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProfileService} from './services/profile.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './components/profile/profile.module';
import { RepoModule } from './components/repo/repo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    ProfileModule,
    RepoModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent],

})
export class AppModule { }
