import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    this.auth.register(this.username, this.password).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
