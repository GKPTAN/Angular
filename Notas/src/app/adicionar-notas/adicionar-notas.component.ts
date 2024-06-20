import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NOTAS } from '../../notas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-notas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: `./adicionar-notas.component.html`,
  styleUrls: ['./adicionar-notas.component.css'],
})

export class AdicionarNotasComponent {
    router = inject(Router);

    adicionarNotaForm = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl(''),
    });

    adicionarNota() {
      let title = this.adicionarNotaForm.value.title ?? '';
      let text = this.adicionarNotaForm.value.text ?? '';
      let router = inject(Router);

      if (this.adicionarNotaForm.valid) {
        let ids = NOTAS.map((a) => a.id);
        let maxId = 0;

        if (ids.length > 0) {
          maxId = Math.max(...ids);
        }

        let novaNota = {
          id: maxId + 1,
          title: title,
          text: text,
        };
        NOTAS.unshift(novaNota);
        this.adicionarNotaForm.reset()
      }

      this.router.navigateByUrl('/');
    }


}
