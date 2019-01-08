import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/Service/jarwis.service';
import { TokenService } from 'src/app/Service/token.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public error = null;
  public form = {
    email : null,
    password : null
  };
  constructor(
    private jarwis:JarwisService,
    private token:TokenService,
    private Router: Router,
    private Auth : AuthService
    ) { }

  ngOnInit() {   
    
  }

  onSubmit() {
    this.jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    
  }

  handleResponse(data){
    this.token.handle(data.success.token);
    this.Auth.changeAuthStatus(true);
    this.Router.navigateByUrl('/');
  }

  handleError(error){
    this.error = error.error.error;
  }

}
