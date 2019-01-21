import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-add',
  templateUrl: './lead-add.component.html',
  styleUrls: ['./lead-add.component.css']
})
export class LeadAddComponent implements OnInit {

  fileToUpload: File = null;
  public form = {
    person_name : null,
    person_company : null,
    person_email : null,
    person_phone : null,
    person_product : null,
    person_location : null,
    contacted_date : null,

  }

  public form2 ={
    exel_upload : null
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form);
  }

  exelsubmit()
  {
    console.log(this.form2);
  }

  handleFileInput(file: FileList)
  {
    this.fileToUpload = file.item(0);
    console.log(this.fileToUpload);
  }

}
