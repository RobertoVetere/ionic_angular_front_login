import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RouterLink } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonRow, IonCol, IonList, IonInput, IonLabel, IonItem, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [RouterLink, 
    IonCardContent, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonList, 
    IonCol, IonRow, 
    IonCard, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage {

  email: string = '';
  password: string = '';
  name: string = '';
  userName: string = '';
  registerMode: boolean = false;

  constructor(private authService: AuthService, private registerService: RegisterService) { }

  login() {
    this.authService.login(this.email, this.password);
  }

  register() {
    this.registerService.register(this.name, this.userName, this.email, this.password);
  }

  toggleForm() {
    this.registerMode = !this.registerMode;
  }
}
