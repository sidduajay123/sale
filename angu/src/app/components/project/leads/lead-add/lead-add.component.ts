import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';
import * as XLSX from 'xlsx';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lead-add',
  templateUrl: './lead-add.component.html',
  styleUrls: ['./lead-add.component.css']
})
export class LeadAddComponent implements OnInit {

  public form = {
    person_name: null,
    person_company: null,
    person_email: null,
    person_phone: null,
    interseted_product: null,
    person_location: null,
    contacted_date: null,
    person_designation: null,
    contact_source: null,
    remark: null,

  }

  
  success:any;
  formData: any;
  data: any;
  products: any;
  constructor(
    private Jarwis: JarwisService,
    private Notifier : NotifierService,
    private Router : Router
  ) { }

  ngOnInit() {
    this.Jarwis.productlist().subscribe(
      data => this.productlist(data)
    )
  }

  productlist(data){
    this.products = data.success
  }

  onSubmit() {
    console.log(this.form)
    this.Jarwis.addlead(this.form).subscribe(
      data => this.formsuccess(data)
    );
    

  }

  formsuccess(data)
  {
    if(data.success)
    {
      this.Notifier.notify('success','Lead Data added successfully');
      
    }
  }


  handleFileInput(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      /* this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 })); */
      this.data = XLSX.utils.sheet_to_json(ws,{raw:true});
      // this.form2.excel_upload = JSON.stringify(this.data)
      let formData: FormData = new FormData();
      formData.append('file', JSON.stringify(this.data));
      this.Jarwis.excelpost(formData).subscribe(
        data => this.excelresp(data)
      );
    };
    reader.readAsBinaryString(target.files[0]);
  }

  excelresp(data){
    this.Notifier.notify('success','Excel file uploaded successfully');
    this.Router.navigateByUrl('/lead');
    if(data.error){
      this.Notifier.notify('success','Excel file uploaded successfully');
    }else{
      this.Notifier.notify('danger','Data already exists');
    }
  }


}
