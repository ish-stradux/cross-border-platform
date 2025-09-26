import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { MOCK_USER } from '../../../core/mocks/mock-data';

@Component({ selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['header.component.css'], standalone: false })
export class HeaderComponent implements OnInit, OnDestroy {
  isOpen = false;
  animate = false;
  private animationInterval: any;
  isLoggedIn = false;
  userName: string = MOCK_USER.name;
  userEmail: string = MOCK_USER.email;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    // Start the automatic animation cycle immediately
    this.startAutomaticAnimation();
    this.isLoggedIn = this.auth.isLoggedIn;
    this.auth.isLoggedIn$.subscribe(v => this.isLoggedIn = v);
  }

  ngOnDestroy() {
    // Clean up the interval when component is destroyed
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  toggle() { 
    this.isOpen = !this.isOpen; 
  }

  private startAutomaticAnimation() {
    // Automatically toggle between dollar and rupee every 2.5 seconds
    this.animationInterval = setInterval(() => {
      this.animate = !this.animate;
    }, 2500);
  }

  logout() {
    this.auth.logout();
  }
}