import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private http:HttpClient,
  ) { }

  handle(token){
    this.setToken(token);
  }

  setToken(token){
    localStorage.setItem('token',token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }

  checkLogin(){
    const token = this.get();
    if(token !== null)
    {
      this.http.get('http://localhost:81/sale/back/api/checkLogin').subscribe(
        // data => console.log(data)
        data => this.isvalid(data)
      );
      return true;
    }else{
      return false;
    }
  }

  isvalid(data)
  {
    if(data === 'true'){
      return true;
    }else{
      return false;
    }
  }

  loggedIn(){
    return this.checkLogin();
  }
  
}
