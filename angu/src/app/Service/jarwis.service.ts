import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  public data = null;
  private baseurl = 'http://localhost:81/sale/back/api/';
  constructor(private http:HttpClient) { }

  signup(data){
    return this.http.post(`${this.baseurl}userRegister`,data)
  }

  login(data){
    return this.http.post(`${this.baseurl}userLogin`,data)
  }

  logout(){
    return this.http.get(`${this.baseurl}logout`)
  }

  user(){
    return this.http.get(`${this.baseurl}userDetails`)
  }

  userData(){
   return  this.user().subscribe(
      _data => this.data
    );
  }
}
