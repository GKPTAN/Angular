import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `<h1>{{title}}</h1>`,
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title = "Minhas Notas"
  classes= ['titulo']
  isBlue = false
  mudar() {
    this.isBlue = !this.isBlue
  }
}
