import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  about!: string;
  me!: string;
  team!: string;
  array=["Angular 2+", "HTML5", "CSS", "Sass", "AJAX", "JSON", "Angular Material", "Bootstrap", "Javascript", "TypeScript", "Node Js", "Express Js"];
  constructor() { }

  ngOnInit(): void {
    this.about = 'Around 5 years of experience in the software development life cycle in developing and designing web pages, user interfaces for web/desktop using HTML, CSS, Javascript, TypeScript and Angular Framework.';
    this.me = 'Good understanding and hands-on experience of databases like MongoDB, Oracle and SQL Server.' +
    ' Profound knowledge in configuration management systems like GitHub and experience working with GitHub, JIRA ticketing systems.';
    this.team='Excellent interpersonal abilities, communication skills, time management and team skills with an intention to work hard to meet project deadlines.';
  }

}
