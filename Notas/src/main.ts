import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppRoutingModule } from './app/app.routes';

const combinedConfig = {
  providers: [provideRouter(routes)], AppRoutingModule, appConfig
};

bootstrapApplication(AppComponent, combinedConfig)
  .catch((err) => console.error(err));
