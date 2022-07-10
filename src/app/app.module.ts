import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeComponent } from './test/resume.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NavbarComponent} from "./navbar/navbar.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes =
  [{path: 'resume', component: ResumeComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ResumeComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
