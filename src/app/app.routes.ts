import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Importa la página Home

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
