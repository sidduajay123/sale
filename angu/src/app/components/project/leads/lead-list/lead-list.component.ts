import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

 
@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})

export class LeadListComponent implements OnInit {
 
  
  public data = [];
  dataTable: any;
  constructor(
    private Jarwis : JarwisService,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    
    this.Jarwis.getlead().subscribe((data: any[]) => {
      this.data = data;
      // You'll have to wait that changeDetection occurs and projects data into 
      // the HTML template, you can ask Angular to that for you ;-)
      this.chRef.detectChanges();

      // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }  


}
