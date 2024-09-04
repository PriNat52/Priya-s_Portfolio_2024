import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'portfolio_2024';

  ngOnInit() {
    //this is needed
    console.log('main app');
  }
}