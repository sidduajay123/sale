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
import { EditLeadComponent } from './components/project/leads/edit-lead/edit-lead.component';
import { EditDeadLeadComponent } from './components/project/dead-lead/edit-dead-lead/edit-dead-lead.component';
import { ListDeadLeadComponent } from './components/project/dead-lead/list-dead-lead/list-dead-lead.component';
import { EditColdLeadComponent } from './components/project/cold-lead/edit-cold-lead/edit-cold-lead.component';
import { ListColdLeadComponent } from './components/project/cold-lead/list-cold-lead/list-cold-lead.component';
import { EditHotLeadComponent } from './components/project/hot-lead/edit-hot-lead/edit-hot-lead.component';
import { ListHotLeadComponent } from './components/project/hot-lead/list-hot-lead/list-hot-lead.component';
import { EditWarmLeadComponent } from './components/project/warm-lead/edit-warm-lead/edit-warm-lead.component';
import { ListWarmLeadComponent } from './components/project/warm-lead/list-warm-lead/list-warm-lead.component';
import { HomeComponent } from './components/project/mail/home/home.component';
import { ViewMailComponent } from './components/project/mail/view-mail/view-mail.component';
import { ListComponent } from './components/project/contact/list/list.component';
import { AddComponent } from './components/project/contact/add/add.component';
import { EditComponent } from './components/project/contact/edit/edit.component';
import { ComposeMailComponent } from './components/project/mail/compose-mail/compose-mail.component';

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

  /* Fresh Lead URL */

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

  {
    path: 'lead/edit/:id',
    component: EditLeadComponent,
    canActivate: [AfterLoginService]
  },

  /* End Fresh Lead URL */

  /* Start Warm Lead URL */

  {
    path: 'warmlead',
    component: ListWarmLeadComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'warmlead/edit/:id',
    component: EditWarmLeadComponent,
    canActivate: [AfterLoginService]
  },

  /* End Warm Lead URL */


  /* Start Hot Lead URL */

  {
    path: 'hotlead',
    component: ListHotLeadComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'hotlead/edit/:id',
    component: EditHotLeadComponent,
    canActivate: [AfterLoginService]
  },

  /* End Hot Lead URL */


  /* Start Cold Lead URL */

  {
    path: 'coldlead',
    component: ListColdLeadComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'coldlead/edit/:id',
    component: EditColdLeadComponent,
    canActivate: [AfterLoginService]
  },

  /* End Cold Lead URL */


  /* Start Dead Lead URL */

  {
    path: 'deadlead',
    component: ListDeadLeadComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'deadlead/edit/:id',
    component: EditDeadLeadComponent,
    canActivate: [AfterLoginService]
  },

  /* End Dead Lead URL */

  /* Outlook Mail  */
  {
    path: 'mail/inbox',
    component: HomeComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'mail/compose',
    component: ComposeMailComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'mail/view/:id',
    component: ViewMailComponent,
    canActivate: [AfterLoginService]
  },

  /* End Outlook Mail  */

  /* Contact Start */

  {
    path: 'contact',
    component: ListComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'contact/add',
    component: AddComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'contact/edit/:id',
    component: EditComponent,
    canActivate: [AfterLoginService]
  },

   /* End Contact Start */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
