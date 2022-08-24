import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeComponent } from './test/resume.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NavbarComponent} from "./navbar/navbar.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ModalBodyComponent} from "./modal-body/modal-body.component";
import {ModalButtonComponent} from "./modal-button/modal-button.component";
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ChooseyourdateComponent } from './chooseyourdate/chooseyourdate.component';

const routes: Routes =
  [{path: 'resume', component: ResumeComponent},
    {path: '', component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'date', component: ChooseyourdateComponent},
    {path: '**', component: NotFoundComponent} // this has to be last
  ];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ResumeComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    AboutComponent,
    ModalBodyComponent,
    ModalButtonComponent,
    AccordionPanelComponent,
    ImageCardComponent,
    ChooseyourdateComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
