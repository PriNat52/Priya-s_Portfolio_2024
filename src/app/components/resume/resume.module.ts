import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const route = { path: '', component: ResumeComponent};

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([route])
  ]
})
export class HomeModule { }
