import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonRouterOutlet, IonicModule, RouterModule, CommonModule],
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  isLoggedIn(): boolean {
    // Verifica si el usuario está autenticado utilizando el servicio de autenticación
    return this.authService.isLoggedIn();
  }

  logout() {
    // Cierra sesión utilizando el servicio de autenticación
    this.authService.logout();
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}
