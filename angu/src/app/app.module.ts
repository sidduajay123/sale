import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { LeadsComponent } from './components/project/leads/leads.component';

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
    LeadsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotifierModule
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
