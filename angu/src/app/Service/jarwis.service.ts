import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  prodata:any;
  public data = null;
  public baseurl = 'http://localhost:81/sale/back/api/';
  constructor(private http:HttpClient) {
    this.userdata;
    this.http.get(`${this.baseurl}userDetails`).subscribe(
      data => this.userData(data)
    );
   }

  public userdata = new BehaviorSubject([]);

  gbdata =this.userdata.asObservable();

  signup(data){
    return this.http.post(`${this.baseurl}userRegister`,data)
  }

  login(data){
    return this.http.post(`${this.baseurl}userLogin`,data)
  }

  changePassword(data){
    return this.http.post(`${this.baseurl}changePassword`,data)
  }

  logout(){
    return this.http.get(`${this.baseurl}logout`)
  }

  user(){
    this.http.get(`${this.baseurl}userDetails`).subscribe(
      data => this.userData(data)
    );
  }

  userProfileData(){
    return this.http.get(`${this.baseurl}userDetails`)
  }

  profilePicUpdate(data){
    return this.http.post(`${this.baseurl}profile`,data)
  }

  userData(data){
    this.userdata.next(data);
  }

}
