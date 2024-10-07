import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ApiService } from "./api.service";
import { User } from "../../domain/models/user.model";
import { AuthCredentials } from "../../domain/models/auth-credentials.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  constructor(private apiService: ApiService) {}

  login(credentials: AuthCredentials): Observable<User> {
    console.log("credentials", credentials);
    return this.apiService.post<User>(`auth/login`, credentials).pipe(
      tap((user) => {
        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user.token!); // Assuming the token is part of the user object
      })
    );
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
