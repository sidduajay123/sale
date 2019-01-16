import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';

import * as $ from 'jquery';
 
@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  
  public data = [];
  dtOptions: DataTables.Settings = {};

  constructor(
    private Jarwis : JarwisService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.Jarwis.getlead().subscribe(
      data => this.response(data)
    )
  }

  response(data){
    this.data = data
  }


}
