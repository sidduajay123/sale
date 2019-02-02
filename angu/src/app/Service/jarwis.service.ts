import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Headers} from '@angular/http';
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

  getlead(){
    return this.http.get(`${this.baseurl}lead/show`)
  }

  addlead(data){
    return this.http.post(`${this.baseurl}lead/store`,data)
  }

  excelpost(data){
    
    return this.http.post(`${this.baseurl}lead/uploadexcel`,data,{headers:{'Accept':'application/json'}})
  }

  productlist(){
    return this.http.get(`${this.baseurl}product`)
  }

  getupdateuser(data){
    return this.http.get(`${this.baseurl}lead/index/${data.id}`)
  }

  deletelead(data)
  {
    return this.http.get(`${this.baseurl}lead/destroy/${data}`)
  }

  updatelead(data)
  {
    return this.http.post(`${this.baseurl}lead/update`,data)
  }

}
