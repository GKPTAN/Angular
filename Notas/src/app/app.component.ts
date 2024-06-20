import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListaDeNotasComponent } from './lista-de-notas/lista-de-notas.component';
import { AdicionarNotasComponent } from './adicionar-notas/adicionar-notas.component';
import { DetalhesDaNotaComponent } from './detalhes-da-nota/detalhes-da-nota.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgFor, ListaDeNotasComponent, AdicionarNotasComponent, RouterModule, DetalhesDaNotaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notas';
}
