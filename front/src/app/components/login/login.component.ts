import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

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
    private Jarwis:JarwisService,
    private Token:TokenService,
    private Router: Router
    ) { }

  ngOnInit() {   
    
  }

  onSubmit() {
    return this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    
  }

  handleResponse(data){
    this.Token.handle(data.success.token);
    this.Router.navigateByUrl('/dashboard');
  }

  handleError(error){
    this.error = error.error.error;
  }

}
