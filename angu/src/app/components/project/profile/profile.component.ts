import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imageURl : string = "assets/images/quickway_user.png";
  fileToUpload : File = null;
  public data = null;
  constructor(
    private Jarwis : JarwisService
  ) { }

  ngOnInit() {
    this.Jarwis.user().subscribe(
      data => this.response(data)
    );
  }

  response(data){
    this.data = data;
  }

  onSubmit(){

  }

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);

    // Show Image
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageURl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

}
