import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  title: string = 'Bem-vindo ao seu Gerenciador de Tarefas!';
  subtitle: string = 'Aqui você pode organizar suas tarefas de maneira simples e eficiente.';
}
