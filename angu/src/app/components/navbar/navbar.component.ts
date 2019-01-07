import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Service/token.service';
import { JarwisService } from 'src/app/Service/jarwis.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean;
  constructor(
    private Auth: AuthService,
    private Router: Router,
    private Token : TokenService,
    private Jarwis : JarwisService
  ) { }

  ngOnInit() {
    // console.log(this.loggedIn);
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.Jarwis.logout().subscribe();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.Router.navigateByUrl('login');
  }

}
