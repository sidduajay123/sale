import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http:HttpClient) { }

  ngOnInit() {   
    
  }

  onSubmit() {
    this.http.post('http://localhost:81/sale/back/api/userLogin',this.form).subscribe(
      data => console.log(data),
      error => this.handleErro