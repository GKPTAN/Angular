import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NOTAS} from '../../notas';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-de-notas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-de-notas.component.html',
  styleUrl: './lista-de-notas.component.css'
})
export class ListaDeNotasComponent {
  notas = NOTAS;

  show(title: string) {
    alert(title)
  }
}
