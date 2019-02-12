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

  getalllead(){
    return this.http.get(`${this.baseurl}gettallLead`)
  }

  /* Fresh Lead API Start */

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

  /* End Fresh Lead */


  /* Start Warm Lead */

  getwarmlead(){
    return this.http.get(`${this.baseurl}warmlead/show`)
  }

  getwarmupdateuser(data){
    return this.http.get(`${this.baseurl}warmlead/index/${data.id}`)
  }

  deletewarmlead(data)
  {
    return this.http.get(`${this.baseurl}warmlead/destroy/${data}`)
  }

  updatewarmlead(data)
  {
    return this.http.post(`${this.baseurl}warmlead/update`,data)
  }

  /* End Warm Lead */

  /* Start Hot Lead */

  gethotlead(){
    return this.http.get(`${this.baseurl}hotlead/show`)
  }

  gethotupdateuser(data){
    return this.http.get(`${this.baseurl}hotlead/index/${data.id}`)
  }

  deletehotlead(data)
  {
    return this.http.get(`${this.baseurl}hotlead/destroy/${data}`)
  }

  updatehotlead(data)
  {
    return this.http.post(`${this.baseurl}hotlead/update`,data)
  }

  /* End Hot Lead */

  /* Start Cold Lead */

  getcoldlead(){
    return this.http.get(`${this.baseurl}coldlead/show`)
  }

  getcoldupdateuser(data){
    return this.http.get(`${this.baseurl}coldlead/index/${data.id}`)
  }

  deletecoldlead(data)
  {
    return this.http.get(`${this.baseurl}coldlead/destroy/${data}`)
  }

  updatecoldlead(data)
  {
    return this.http.post(`${this.baseurl}coldlead/update`,data)
  }

  /* End Cold Lead */
  /* Start Dead Lead */

  getdeadlead(){
    return this.http.get(`${this.baseurl}deadlead/show`)
  }

  getdeadupdateuser(data){
    return this.http.get(`${this.baseurl}deadlead/index/${data.id}`)
  }

  deletedeadlead(data)
  {
    return this.http.get(`${this.baseurl}deadlead/destroy/${data}`)
  }

  updatedeadlead(data)
  {
    return this.http.post(`${this.baseurl}deadlead/update`,data)
  }

  /* End Dead Lead */

  /* Start Queue Worker */

  queuework()
  {
    return this.http.get(`${this.baseurl}queuework`)
  }
  /* End Queue Worker */

  /* Send Fresh Email */
  sendfreshemail()
  {
    return this.http.get(`${this.baseurl}fresh`)
  }
  /* End Send Fresh Email */

  /* Send Reminder Email */
  sendreminderemail()
  {
    return this.http.get(`${this.baseurl}reminder`)
  }
  /* End Send Reminder Email */


  /* Send Email Now */
  sendemailnow(data)
  {
    return this.http.post(`${this.baseurl}sendnow`,data)
  }
  /* End Send Email now */

    /* Contact API Start */

    getcontact(){
      return this.http.get(`${this.baseurl}contact/show`)
    }
  
    addcontact(data){
      return this.http.post(`${this.baseurl}contact/store`,data)
    }
  
    contactexcelpost(data){
      
      return this.http.post(`${this.baseurl}contact/uploadexcel`,data,{headers:{'Accept':'application/json'}})
    }
  
  
    getupdatecontact(data){
      return this.http.get(`${this.baseurl}contact/index/${data.id}`)
    }
  
    deletecontact(data)
    {
      return this.http.get(`${this.baseurl}contact/destroy/${data}`)
    }
  
    updatecontact(data)
    {
      return this.http.post(`${this.baseurl}contact/update`,data)
    }
  
    /* End Fresh contact */

}
