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
    // console.log(this.Jarwish.userData());
    this.Jarwis.user().subscribe(
      data => this.response(data)
    );
  }

  response(data){
    this.data = data;
  }

}
