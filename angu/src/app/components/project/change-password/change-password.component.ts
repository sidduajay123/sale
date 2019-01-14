import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';
import { NotifierService } from 'angular-notifier';
import { TokenService } from 'src/app/Service/token.service';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public data = null;
  public form = {
    old_password: null,
    new_password: null,
    confirm_password: null,

  }
  

  constructor(
    private Jarwis: JarwisService,
    private Notifier: NotifierService,
    private Token : TokenService,
    private Auth : AuthService,
    private Router : Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.Jarwis.changePassword(this.form).subscribe(
      data => this.response(data),
      error => console.log(error)

    )
  }

  response(data) {
    this.data = data
    this.Notifier.notify('success','Password Changed successfully');
    this.Jarwis.logout().subscribe();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.Router.navigateByUrl('login');
  }

}
