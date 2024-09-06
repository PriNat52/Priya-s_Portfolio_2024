import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  description1!: string;
  description2!: string;
  description3!: string;
  description4!: string;

  requirements1 = [`Developed the front end of the application using HTML5, CSS3-SASS, JSON, Angular 8/10.`,
  `Enhanced Angular 8/10 application performance by lazy loading and developed components as an independent module for reusability across the application.`,
  `Used Component based architecture to build components and  UI services.`,
  `Implemented Router-store and Resolver component, and handled routing via dispatched actions.`,
  `Leveraged DOM level event observables via custom directives to manipulate interaction between sibling components.`,
  `Utilized Angular Material wherever deemed necessary to configure in-house widgets styling.`];

  requirements2 = [`Used NPM for installing required node modules and other published Angular NPM modules.`,
  `Worked Extensively with Angular CLI for creating components, Services, Pipes, Directives.
  `,`Developed data visualizations using chart.js and involved in enhancements of the interactive GUI display.
  `,`Implemented Reactive Form from Angular to design complex table views with data validations.
  `];

  requirements3 = [`Worked the back end by using Node Js, Express Js and MongoDB.
  `,`Used Node.js as a proxy to interact with Rest services and interacting with Database.
  `,`Developed Web API using Node.JS and hosted on multiple load balanced API instances.
  `,`As a backend developer, I was responsible for creating RESTFUL Web using Node.js and Express.js
  `,`Implemented Routers in Single Page Application.
  `,`Developed unit tests and end to end test in Mocha
  `,`Used GitHub ticketing system and GIT for version control during the development process.
  `];

  requirements4 = [`Actively involved in the requirement gathering phase by participating the sprint planning and user story grooming sessions and analyzed features in each sprint.`,
    `Collaborated with UX/UI designers to improve user experience across the application and implemented scalable reusable components leveraging best practices with industry standards.`,
    `Enhanced Angular 11,13,16 application for security vulnerability and  improved performance by lazy loading and developed components as an independent module for reusability across the application.`,
    `Developed and improvised end to end UI development focusing on micro frontend architecture and modulization with NX along with API integrations and unit testing coverage with Karma/Jasmine and Jest.`,
    `Collaborated with cross-functional teams including project managers, front end developers and UX/UI designers to gather requirements and ensure seamless integration of micro frontends.`,
    `Collaborated with QA teams to identify and resolve bugs, ensuring smooth and bug free applications releases across different environments.`,
    `Implemented customized and Ngx-paginations with sorting directives on the UI.`,
    `Documented routing structure and component design for all modules along with fixed memory leakage issues with observables.`,
    `Utilized Bootstrap V4 wherever deemed necessary to configure in-house widgets styling and worked with Postman/Bruno to conduct API tests.`];

  showDetails1!: boolean;
  showDetails2!: boolean;
  showDetails3!: boolean;
  showDetails4!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.description1 = `This application was focused for online communities.
    It was built with user-friendly experience to pique the users interests
    in exploring new game trailers with exclusive
    feature cards carrying details about the game.`;

    this.description2 = `This application was focused for service engineers,
    who need to track details about the repaired equipment and the online service
    stations around the area to make it easier for the user.`;

    this.description3 = `This application was focused for performance management.
    It's built modular: API as the Express backend,  database for connecting to the MongoDB Cloud,
    and client for our front-end React application. This library is a simple to use,
    feature rich, and privacy focused note taking application.`;

    this.description4 = `This application was heavily used by small businesses for enrolling 
    new employees into their organization. It was built with user-friendly experience for customers 
    to use the app more efficiently and frequently. The authorization management services were focused 
    on assigning customized features for the users.`;
  }

}
