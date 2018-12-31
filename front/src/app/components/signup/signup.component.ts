import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http:HttpClient) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.http.post('http://localhost:81/sale/back/api/userRegister',this.form).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    
  }

  

}
