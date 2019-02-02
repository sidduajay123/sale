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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotifierModule,
    DataTablesModule,
    ReactiveFormsModule,
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
