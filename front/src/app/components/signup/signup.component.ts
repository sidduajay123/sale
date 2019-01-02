import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';

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

  constructor(private Jarwis:JarwisService) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
    
  }

  handleError(error){
    this.error = error.error.error;
  }

}
