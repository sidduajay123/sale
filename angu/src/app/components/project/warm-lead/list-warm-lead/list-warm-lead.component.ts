import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';

@Component({
  selector: 'app-list-warm-lead',
  templateUrl: './list-warm-lead.component.html',
  styleUrls: ['./list-warm-lead.component.css']
})
export class ListWarmLeadComponent implements OnInit {

  success :any;
  public data = [];
  dataTable: any;
  tData: boolean;
  constructor(
    private Jarwis : JarwisService,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    
    this.Jarwis.getwarmlead().subscribe((data: any) => {
      this.tData = true;
      this.data = data.success;
      // You'll have to wait that changeDetection occurs and projects data into 
      // the HTML template, you can ask Angular to that for you ;-)
      this.chRef.detectChanges();

      // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable({
        "scrollX": true
      });
    })    
  }  

  delete(id: any)
    {
      this.Jarwis.deletewarmlead(id).subscribe(
        data => this.deletesuccess(data)
      )
    }

    deletesuccess(data)
    {
      if(data.success)
      {
        this.tData = false;
        this.ngOnInit();
      }
    }

}
