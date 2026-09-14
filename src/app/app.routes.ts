import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: Login}, 
    {path: 'home', component: Home, canActivate: [authGuard] },
    {path: 'dashboard', component: Dashboard, canActivate: [authGuard] },

];

