import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imageURl: string;
  fileToUpload: File = null;
  public data = null;
  public base_img = null;
  public form = {
    image : null,
    name :null
  };


  constructor(
    private Jarwis: JarwisService
  ) { }

  ngOnInit() {
    this.Jarwis.user().subscribe(
      data => this.response(data)
    );
  }

  response(data) {
    this.data = data;
    if(this.data.success.image)
    {
      this.imageURl = this.Jarwis.baseurl+'storage/image/'+data.success.image;
    }else{
      this.imageURl = 'assets/images/quickway_user.png'
    }
  }

  onSubmit() {
    this.Jarwis.profilePicUpdate(this.form).subscribe(
      // data => console.log(data)
   );
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    if ((this.fileToUpload.type === 'image/jpeg') || (this.fileToUpload.type === 'image/jpg') || (this.fileToUpload.type === 'image/png')) 
    {
      // Show Image
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageURl = event.target.result;
        this.form.image = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
      

    }

  }

}
