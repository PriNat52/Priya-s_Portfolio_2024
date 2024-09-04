import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const bootstrap = () => bootstrapApplication(AppComponent, config);
// const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

export default bootstrap;
