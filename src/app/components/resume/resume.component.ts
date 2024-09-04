import { SharedModule } from '../../shared/shared.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent implements OnInit{

  longText = `
  Hello! Welcome to my WebPage.
  My passion towards Software development have motivated me to
  pursue my career goals in Software field.
  As a Front End developer, I love to explore, learn and implement
  new innovative skills in every project I work on.
  `;

  ngOnInit() {
    //this is needed
    console.log('resume');
  }

}
