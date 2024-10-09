import { ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatRadioModule } from "@angular/material/radio";
import { Router } from "@angular/router";

import { AuthService } from "../../@core/application/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string;
  hide = signal(true);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.errorMessage = '';
  }

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAsTouched();
      return;
    }
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => (this.errorMessage = 'Invalid login credentials'),
    });
  }


  // submit(): void {
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value).subscribe({
  //       next: () => this.router.navigate(['/dashboard']),
  //       error: (err) => (this.errorMessage = 'Invalid login credentials'),
  //     });
  //   }
  // }
}
