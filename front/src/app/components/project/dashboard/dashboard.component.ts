import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private Jarwis:JarwisService,
    private Token:TokenService,
    private Router: Router
  ) { }

  ngOnInit() {
    this.Jarwis.user().subscribe(
      data => console.log(data)
    )
  }

  getuser(){
    return this.Jarwis.user().subscribe(
      data => console.log(data)
    )
  }

  handleResponse(){

  }

}
