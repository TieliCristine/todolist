import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../../domain/interface/user.interface';
import { AuthCredentials } from '../../domain/interface/auth-credentials.interface';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;
  private _snackBar = inject(MatSnackBar);


  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
  }

  login(credentials: AuthCredentials) {
    console.log('credentials', credentials);
    this.apiService.login(credentials).subscribe({
      next: () => this.router.navigate([ '/dashboard' ]),
      error: (err) => (this.openSnackBar(err.message))
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUser(): User | null {
    if (!this.currentUser) {
      const userJson = localStorage.getItem('user');
      this.currentUser = userJson ? JSON.parse(userJson) : null;
    }
    return this.currentUser;
  }
}
