import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  auth = inject(AuthService)
  router = inject(Router)
  protected title = 'job-application-tracker-app';

  onLogOut() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
