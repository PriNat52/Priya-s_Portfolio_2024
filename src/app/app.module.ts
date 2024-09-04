import { NgModule } from "@angular/core";
import { ResumeComponent } from "./components/resume/resume.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routes.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterOutlet } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

@NgModule({
    declarations:[
        AppComponent,
        ResumeComponent,
        AboutMeComponent,
        ExperienceComponent,
        NotFoundComponent,
        FeedbackComponent
    ],
    imports:[
        BrowserModule,
        BrowserAnimationsModule,
        RouterOutlet,
        AppRoutingModule,
        NgbModule,
        SharedModule,
        MatCardModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}