import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private messagesource = new BehaviorSubject<string>("hello");
  currentmessage = this.messagesource.asObservable();

  public user ;
  constructor(
    private Jarwis:JarwisService,
    private Token:TokenService,
    private Router: Router
  ) { }

  ngOnInit() {
    this.Jarwis.user().subscribe(
      data => this.handleResponse(data),
      data => console.log(data)
    )
  }

  changeMessage(message : string){
    this.messagesource.next(message)
  }

  getuser(){
    return this.Jarwis.user().subscribe(
      data => console.log(data)
    )
  }

  handleResponse(data){
    this.user = data

  }

}
