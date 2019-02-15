import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/project/profile/profile.component';
import { DashboardComponent } from './components/project/dashboard/dashboard.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { JarwisService } from './Service/jarwis.service';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { LeftMenuComponent } from './components/project/left-menu/left-menu.component';
import { FooterComponent } from './components/project/footer/footer.component';
import { ChangePasswordComponent } from './components/project/change-password/change-password.component';
import { NotifierModule } from 'angular-notifier';
import { LeadListComponent } from './components/project/leads/lead-list/lead-list.component';
import { LeadAddComponent } from './components/project/leads/lead-add/lead-add.component';
import { DataTablesModule } from 'angular-datatables';
import { DataTableDirective  } from 'angular-datatables';
import { EditLeadComponent } from './components/project/leads/edit-lead/edit-lead.component';
import { EditWarmLeadComponent } from './components/project/warm-lead/edit-warm-lead/edit-warm-lead.component';
import { ListWarmLeadComponent } from './components/project/warm-lead/list-warm-lead/list-warm-lead.component';
import { EditHotLeadComponent } from './components/project/hot-lead/edit-hot-lead/edit-hot-lead.component';
import { ListHotLeadComponent } from './components/project/hot-lead/list-hot-lead/list-hot-lead.component';
import { EditColdLeadComponent } from './components/project/cold-lead/edit-cold-lead/edit-cold-lead.component';
import { ListColdLeadComponent } from './components/project/cold-lead/list-cold-lead/list-cold-lead.component';
import { EditDeadLeadComponent } from './components/project/dead-lead/edit-dead-lead/edit-dead-lead.component';
import { ListDeadLeadComponent } from './components/project/dead-lead/list-dead-lead/list-dead-lead.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { HomeComponent } from './components/project/mail/home/home.component';
import { AlertComponent } from './components/project/mail/alert/alert.component';
import { MsalModule } from '@azure/msal-angular';
import { OAuthSettings } from '../oauth';
import { ViewMailComponent } from './components/project/mail/view-mail/view-mail.component';
import { AddComponent } from './components/project/contact/add/add.component';
import { ListComponent } from './components/project/contact/list/list.component';
import { EditComponent } from './components/project/contact/edit/edit.component';
import { ComposeMailComponent } from './components/project/mail/compose-mail/compose-mail.component';
import { IntroductionComponent } from './components/project/template/introduction/introduction.component';
import { ReminderComponent } from './components/project/template/reminder/reminder.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ResourceComponent } from './components/project/resource/resource.component';

library.add(faExternalLinkAlt);
library.add(faUserCircle);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    DashboardComponent,
    RequestResetComponent,
    ResponseResetComponent,
    LeftMenuComponent,
    FooterComponent,
    ChangePasswordComponent,
    LeadListComponent,
    LeadAddComponent,
    EditLeadComponent,
    EditWarmLeadComponent,
    ListWarmLeadComponent,
    EditHotLeadComponent,
    ListHotLeadComponent,
    EditColdLeadComponent,
    ListColdLeadComponent,
    EditDeadLeadComponent,
    ListDeadLeadComponent,
    HomeComponent,
    AlertComponent,
    ViewMailComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    ComposeMailComponent,
    IntroductionComponent,
    ReminderComponent,
    ResourceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotifierModule,
    DataTablesModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    CKEditorModule,
    MsalModule.forRoot({
      clientID: OAuthSettings.appId
    }),
  ],
  providers: [
    JarwisService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
