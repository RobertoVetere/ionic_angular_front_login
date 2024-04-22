import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInFlag: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): void {
    const data = {
      email: email,
      password: password
    };

    this.http.post<any>('http://localhost:8080/api/v1/login/user', data).subscribe(
      (response) => {
        if (response && response.name && response.username && response.email) {
          this.isLoggedInFlag = true;
          this.router.navigate(['/home']);
        } else {
          console.error('Inicio de sesión fallido:', response);
        }
      },
      (error) => {
        console.error('Error al intentar iniciar sesión:', error);
      }
    );
  }

  logout(): void {
    this.isLoggedInFlag = false;
  }

  isLoggedIn(): boolean {
    console.log(this.isLoggedInFlag);
    return this.isLoggedInFlag;
  }
}