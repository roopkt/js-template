import { Routes } from '@angular/router';
import { HomeContainerComponent } from './containers/home-container/home-container.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeContainerComponent
  }
];
