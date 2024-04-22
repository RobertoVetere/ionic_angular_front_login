import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService,) { }
  
  register(name: string, username: string, email: string, password: string): void {
    console.log(name + " " + username + " " + email + " " + password + " " )
    const data = {
      name: name,
      username: username,
      email: email,
      password: password,
    };
   
   this.http.post('http://localhost:8080/api/v1/registration/user', data, { responseType: 'text' }).subscribe(
  (response) => {
    if (response === "Usuario creado correctamente") {
      console.log('Registro exitoso:', response);
      this.authService.login(email, password);
      setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
    } else {
      console.error('Registro fallido:', response);
    }
  },
  (error) => {
    console.error('Error al intentar registrarse:', error);
    console.log('Datos enviados:', data);
  }
);
  }

}