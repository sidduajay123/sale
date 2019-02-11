import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-view-mail',
  templateUrl: './view-mail.component.html',
  styleUrls: ['./view-mail.component.css']
})
export class ViewMailComponent implements OnInit {
  maildes: any;

  constructor( 
    private activateroute: ActivatedRoute,
    private authService: AuthService
    ) { }
  private currentUrl = this.activateroute.snapshot.params;
  data : any;
  ngOnInit() {

    this.authService.getviewMails(this.currentUrl).then(
      (data) => this.viewmail(data)
    )
  }

  viewmail(data)
  {
    this.data = data
    this.maildes = data.body.content
    console.log(this.maildes)
  }

}
