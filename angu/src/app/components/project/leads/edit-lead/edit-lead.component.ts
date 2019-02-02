import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, UrlSegment } from '@angular/router';
import { JarwisService } from 'src/app/Service/jarwis.service';
import { FormGroup, FormsModule, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-lead',
  templateUrl: './edit-lead.component.html',
  styleUrls: ['./edit-lead.component.css']
})
export class EditLeadComponent implements OnInit {

  constructor(
    private Router: Router,
    private activateroute: ActivatedRoute,
    private Jarwis: JarwisService,
    private formBuilder: FormBuilder
  ) { }

  userLead: any;
  products: any

  editForm = this.formBuilder.group({
    _id : new FormControl(),
    person_name : new FormControl(),
    person_company : new FormControl(),
    person_email : new FormControl(),
    person_phone : new FormControl(),
    // person_product : new FormControl(),
    person_location : new FormControl(),
    contacted_date : new FormControl(),
    person_designation : new FormControl(),
    contact_source : new FormControl(),
    remark : new FormControl(),
  });

  private currentUrl = this.activateroute.snapshot.params;
  
  

  ngOnInit() {

    this.Jarwis.getupdateuser(this.currentUrl).subscribe(
      // data => this.userLead = (data)
      data => this.setvalue(data)     
    )
      // let name = this.userLead.person_name
      // console.log(this.userLead)
    
   
  }

  setvalue(data)
  {
    // console.log(data.person_name)

    this.editForm.setValue({
      _id:data._id,
      person_name:data.person_name,
      person_company:data.person_company,
      person_email:data.person_email,
      person_phone:data.person_phone,
      // person_product:data.person_product,
      person_location:data.person_location,
      contacted_date:data.contacted_date,
      person_designation:data.person_designation,
      contact_source:data.contact_source,
      remark:data.remark
    })
  }
 /*  leaddata(data){
    this.userLead = data
  } */
  onSubmit(){
    // console.log(this.editForm.value)
    this.Jarwis.updatelead(this.editForm.value).subscribe(
      data => this.updated(data)
    )
  }

  updated(data)
  {

    if(data.success)
    {
      this.Router.navigateByUrl('/lead');
    }
    
  }

}
