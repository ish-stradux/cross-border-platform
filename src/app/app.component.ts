import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(private auth: AuthService) {
    this.isLoggedIn$ = this.auth.isLoggedIn$;
  }
}