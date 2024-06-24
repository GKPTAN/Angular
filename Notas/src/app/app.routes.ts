import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaDeNotasComponent } from './lista-de-notas/lista-de-notas.component';
import { AdicionarNotasComponent } from './adicionar-notas/adicionar-notas.component';
import { DetalhesDaNotaComponent } from './detalhes-da-nota/detalhes-da-nota.component';

export const routes: Routes = [
  { path: '', component: ListaDeNotasComponent },
  { path: 'new', component: AdicionarNotasComponent },
  { path: 'nota/:id', component: DetalhesDaNotaComponent },
];

@NgModule ({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {}
