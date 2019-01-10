import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public data:null;
  constructor(
    private Jarwis : JarwisService
  ) { }

  ngOnInit() {
    //  console.log(this.Jarwis.userdata);
    this.Jarwis.userProfileData().subscribe(
      data => this.response(data)
    );
  }

  response(data){
    this.data = data;
  }

}
