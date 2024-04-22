import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonRouterOutlet, IonicModule, RouterModule],
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  isLoggedIn(): boolean {
    // Implementa lógica para verificar si el usuario está autenticado
    // Por ejemplo, puedes verificar si existe un token de sesión en el almacenamiento local
    // Devuelve true si el usuario está autenticado, false en caso contrario
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
}
