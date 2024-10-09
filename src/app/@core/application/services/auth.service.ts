import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ApiService } from "./api.service";
import { User } from "../../domain/interface/user.interface";
import { AuthCredentials } from "../../domain/interface/auth-credentials.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  constructor(private apiService: ApiService) {}

  login(credentials: AuthCredentials) {
    console.log("credentials", credentials);
    this.apiService.login(credentials).subscribe({
      // next: () => this.router.navigate(['/dashboard']),
      // error: (err) => (this.openSnackBar(err.message)),
    });
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
