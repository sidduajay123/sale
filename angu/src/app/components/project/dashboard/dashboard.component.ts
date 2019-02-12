import { Component, OnInit, Input } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username:any;
  allLead : any;
  freshlead : any;
  warmlead : any;
  hotlead : any;
  coldlead : any;
  deadlead : any;
  constructor(
    private Jarwis : JarwisService
  ) { }

  ngOnInit() {

    this.Jarwis.userProfileData().subscribe(
      data => this.response(data)
    );
   
   this.Jarwis.getalllead().subscribe(
      data => this.allLead = data
    )   

   this.Jarwis.getlead().subscribe(
      data => this.freshlead = data
    )   

   this.Jarwis.getwarmlead().subscribe(
      data => this.warmlead = data
    )   

   this.Jarwis.gethotlead().subscribe(
      data => this.hotlead = data
    )  

   this.Jarwis.getcoldlead().subscribe(
      data => this.coldlead = data
    )   

   this.Jarwis.getdeadlead().subscribe(
      data => this.deadlead = data
    )   
  }

  response(data){
    this.username = data.success;
  }
  

  freshmail()
  {
    // console.log('hello')
    this.Jarwis.sendfreshemail().subscribe()

    this.Jarwis.queuework().subscribe()
  }
  reminder()
  {
    // console.log('hello')
    this.Jarwis.sendreminderemail().subscribe()

    this.Jarwis.queuework().subscribe()
  }
 /*  fresh(data)
  {
    this.freshlead = data.success.length
  } */

}
