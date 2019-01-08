import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  public data = null;
  public baseurl = 'http://localhost:81/sale/back/';
  constructor(private http:HttpClient) { }

  signup(data){
    return this.http.post(`${this.baseurl}api/userRegister`,data)
  }

  login(data){
    return this.http.post(`${this.baseurl}api/userLogin`,data)
  }

  logout(){
    return this.http.get(`${this.baseurl}api/logout`)
  }

  user(){
    return this.http.get(`${this.baseurl}api/userDetails`)
  }

  profilePicUpdate(data){
    return this.http.post(`${this.baseurl}api/profile`,data)
  }

  userData(){
   return  this.user().subscribe(
      _data => this.data
    );
  }
}
