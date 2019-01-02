import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token){
    this.setToken(token);
  }

  setToken(token){
    localStorage.setItem('token',token);
  }
}
