import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { merge } from "rxjs";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatRadioButton } from "@angular/material/radio";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInput,
    ReactiveFormsModule,
    MatIconButton,
    MatIcon,
    MatButton,
    MatRadioButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username?: string;
  password?: string;

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Adicionar lógica de autenticação
  }


  errorMessage = signal('');

  constructor() {
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
