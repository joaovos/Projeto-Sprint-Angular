import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  constructor(private auth: Auth) {}

  logout(): void {
    this.auth.logout();
  }
}










