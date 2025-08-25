import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl = 'http://192.168.8.69:5082/auth';
private tokenKey = 'jwtToken';
isLoggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem(this.tokenKey));

  constructor(private http: HttpClient) { }

  register(userName: string, password: string) {
    return this.http.post<void>(`${this.apiUrl}/register`, {userName, password});
  }

  login(userName: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { userName, password })
    .pipe(
      tap(res => {
          localStorage.setItem(this.tokenKey, res.token);
          this.isLoggedIn$.next(true);
      })
    )
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn$.next(false);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  
}
