import { Component, inject } from '@angular/core';
import { NOTAS } from '../../notas';
import { Router, RouterModule, ActivatedRoute, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-da-nota',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: `./detalhes-da-nota.component.html`,
  styleUrl: './detalhes-da-nota.component.css'
})
export class DetalhesDaNotaComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  nota = NOTAS.find((i) => i.id === this.id);

  router = inject(Router);

  deletarNota() {
    if (this.nota) {
      let delNota = NOTAS.indexOf(this.nota, 0);
      NOTAS.splice(delNota, 1);
    }
    this.router.navigateByUrl('');
  }
}
