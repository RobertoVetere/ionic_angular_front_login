import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
  
  {path: 'home', loadComponent: ()=> import('./main/main.page').then(m => m.MainPage),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'product-list',
    loadComponent: () => import('./product-list/product-list.page').then( m => m.ProductListPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  }
];
