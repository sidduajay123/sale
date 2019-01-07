import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public error = [];
  public form = {
    name : null,
    email : null,
    password : null,
    c_password : null

  };

  constructor(
    private jarwish:JarwisService,
    private token:TokenService,
    private Router: Router    
    ) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.jarwish.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    
  }

  handleResponse(data){
    // console.log(data.success.token);
    this.token.handle(data.success.token);
    this.Router.navigateByUrl('dashboard');
  }

  handleError(error){
    this.error = error.error.error;
  }

}
