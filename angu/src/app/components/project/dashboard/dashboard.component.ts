import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';
import { Authority } from 'msal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admin: any;
  username: any;
  allLead: any;
  freshlead: any;
  warmlead: any;
  hotlead: any;
  coldlead: any;
  deadlead: any;
  dataTable: any;
  tData: boolean;
  constructor(
    private Jarwis: JarwisService,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.Jarwis.userProfileData().subscribe(
      data => this.response(data)
    );

  }

  response(data) {

    if (data.success.role == 'admin') {
      this.username = data.success;
      this.Jarwis.getadminUser().subscribe((data: any) => {
        this.tData = true;
        this.admin = data;
        // You'll have to wait that changeDetection occurs and projects data into 
        // the HTML template, you can ask Angular to that for you ;-)
        this.chRef.detectChanges();

        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable({
          // "scrollX": true
        });
        $(document).ready(function(){
          $(".content-wrapper").remove();
          $(".d-none").remove();
          $(".navbar-nav i").remove();
          $("body").css({"background":"#e1ecf6"})
          $("footer").removeClass("main-footer")
        });
        
      })

    } else {
      this.username = data.success;
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
  }


  freshmail() {
    // console.log('hello')
    this.Jarwis.sendfreshemail().subscribe()

    this.Jarwis.queuework().subscribe()
  }
  reminder() {
    // console.log('hello')
    this.Jarwis.sendreminderemail().subscribe()

    this.Jarwis.queuework().subscribe()
  }
  /*  fresh(data)
   {
     this.freshlead = data.success.length
   } */

}
