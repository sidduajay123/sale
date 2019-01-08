import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  public data = null;
  public image = null;
  constructor(
    private Jarwis: JarwisService,
  ) { }

  ngOnInit() {
    this.Jarwis.user().subscribe(
      data => this.response(data)
    );
    this.image = this.Jarwis.baseurl;
  }

  response(data){
    this.data = data;
  }

}
