import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/Service/jarwis.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-warm-lead',
  templateUrl: './edit-warm-lead.component.html',
  styleUrls: ['./edit-warm-lead.component.css']
})
export class EditWarmLeadComponent implements OnInit {

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
    interseted_product : new FormControl(),
    person_location : new FormControl(),
    contacted_date : new FormControl(),
    person_designation : new FormControl(),
    contact_source : new FormControl(),
    remark : new FormControl(),
    status : new FormControl(),
  });

  private currentUrl = this.activateroute.snapshot.params;
  
  

  ngOnInit() {

    this.Jarwis.getwarmupdateuser(this.currentUrl).subscribe(
      data => this.setvalue(data)     
    )   
    this.Jarwis.productlist().subscribe(
      data => this.productlist(data)
    )
   
  }

  productlist(data){
    this.products = data.success
  }

  setvalue(data)
  {
    this.editForm.setValue({
      _id:data._id,
      person_name:data.person_name,
      person_company:data.person_company,
      person_email:data.person_email,
      person_phone:data.person_phone,
      interseted_product:data.interseted_product,
      person_location:data.person_location,
      contacted_date:data.contacted_date,
      person_designation:data.person_designation,
      contact_source:data.contact_source,
      remark:data.remark,
      status:data.status
    })
  }

  onSubmit(){
    this.Jarwis.updatewarmlead(this.editForm.value).subscribe(
      data => this.updated(data)
    )
  }

  updated(data)
  {

    if(data.success)
    {
      this.Router.navigateByUrl('/warmlead');
    }
    
  }

}
