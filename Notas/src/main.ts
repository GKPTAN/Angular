import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routes';

const combinedConfig = {
  providers: [...appConfig.providers]
};

bootstrapApplication(AppComponent, combinedConfig)
  .catch((err) => console.error(err));
