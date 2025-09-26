import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { CalculatorComponent } from './shared/components/calculator/calculator.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { ActivityModalComponent } from './shared/components/activity-modal/activity-modal.component';

import { PricingService } from './core/services/pricing.service';

// Angular Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';
import { FAQsComponent } from './faqs/faqs.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'integrations', component: IntegrationsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'faqs', component: FAQsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, CalculatorComponent, SidenavComponent, ActivityModalComponent, HomeComponent, LoginComponent, SignupComponent, DashboardComponent, ProfileComponent, RequestsComponent, FAQsComponent, IntegrationsComponent, PricingComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes), MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatTableModule, MatExpansionModule, MatButtonToggleModule, MatSlideToggleModule, MatMenuModule, MatDividerModule, MatRippleModule],
  providers: [PricingService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }