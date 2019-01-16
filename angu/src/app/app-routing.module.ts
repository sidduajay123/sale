import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/project/profile/profile.component';
import { DashboardComponent } from './components/project/dashboard/dashboard.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './Service/before-login.service';
import { AfterLoginService } from './Service/after-login.service';
import { ChangePasswordComponent } from './components/project/change-password/change-password.component';
import { LeadListComponent } from './components/project/leads/lead-list/lead-list.component';
import { LeadAddComponent } from './components/project/leads/lead-add/lead-add.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: '',
    component: DashboardComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'lead',
    component: LeadListComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'lead/add',
    component: LeadAddComponent,
    canActivate: [AfterLoginService]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
