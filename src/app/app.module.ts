import { NgModule } from "@angular/core";
import { ResumeComponent } from "./components/resume/resume.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routes.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterOutlet } from "@angular/router";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations:[
        AppComponent,
        ResumeComponent
    ],
    imports:[
        BrowserModule,
        BrowserAnimationsModule,
        RouterOutlet,
        AppRoutingModule,
        NgbModule,
        SharedModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}