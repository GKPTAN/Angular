import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router'
import { ListaDeNotasComponent } from './app/lista-de-notas/lista-de-notas.component';
import { AdicionarNotasComponent } from './app/adicionar-notas/adicionar-notas.component';
import { DetalhesDaNotaComponent } from './app/detalhes-da-nota/detalhes-da-nota.component';

const routes: Routes = [
  { path: '', component: ListaDeNotasComponent},
  { path: 'new', component: AdicionarNotasComponent},
  { path: 'nota/:id', component: DetalhesDaNotaComponent}
];

const combinedConfig = {
  providers: [provideRouter(routes)], appConfig
};

bootstrapApplication(AppComponent, combinedConfig)
  .catch((err) => console.error(err));
