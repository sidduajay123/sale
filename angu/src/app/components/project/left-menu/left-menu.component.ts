import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  msg : any;
  public data = null;
  public value = null;
  public image = null;
  constructor(
    private Jarwis: JarwisService,
  ) { }

  ngOnInit() {
    this.Jarwis.userProfileData().subscribe(
      data => this.response(data)
    );
  }

  response(data) {
    this.data = data;
    if(!empty(data.success))
    {
      this.image = this.data.success.imgUrl;
    }else{
      this.image = 'assets/images/quickway_user.png'
    }
  }

}