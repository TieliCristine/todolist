import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, Observable } from 'rxjs';
import { User } from "../../domain/interface/user.interface";
import { AuthCredentials } from '../../domain/interface/auth-credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // genérico para requisições GET
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, {
      headers: this.getHeaders(),
    });
  }

  login(credentials: AuthCredentials): Observable<User> {
    console.log(credentials, 'post api.service');
    return this.http.post<User>(`auth/login`, credentials, {
      headers: this.getHeaders(),
    }).pipe(
      first()
    );
  }

  // genérico para requisições PUT
  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data, {
      headers: this.getHeaders(),
    }).pipe(
      first()
    );
  }

  // genérico para requisições DELETE
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, {
      headers: this.getHeaders(),
    }).pipe(
      first()
    );
  }

  // para obter os headers, incluindo o token de autenticação
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    console.log(token + 'token api.service');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    });
  }
}
