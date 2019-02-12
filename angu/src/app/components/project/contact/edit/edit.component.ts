import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/Service/jarwis.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  constructor(
    private Router: Router,
    private activateroute: ActivatedRoute,
    private Jarwis: JarwisService,
    private formBuilder: FormBuilder
  ) { }

  usercontact: any;
  products: any

  editForm = this.formBuilder.group({
    _id : new FormControl(),
    contact_name : new FormControl(),
    contact_company : new FormControl(),
    contact_email : new FormControl(),
    contact_phone : new FormControl(),
  });

  private currentUrl = this.activateroute.snapshot.params;
  
  

  ngOnInit() {

    this.Jarwis.getupdatecontact(this.currentUrl).subscribe(
      data => this.setvalue(data)     
    )   
    
  }

  setvalue(data)
  {
    this.editForm.setValue({
      _id:data._id,
      contact_name:data.contact_name,
      contact_company:data.contact_company,
      contact_email:data.contact_email,
      contact_phone:data.contact_phone
    })
  }

  onSubmit(){
    this.Jarwis.updatecontact(this.editForm.value).subscribe(
      data => this.updated(data)
    )
  }

  updated(data)
  {

    if(data.success)
    {
      this.Router.navigateByUrl('/contact');
    }
    
  }

}
