import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-mail',
  templateUrl: './view-mail.component.html',
  styleUrls: ['./view-mail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewMailComponent implements OnInit {
  maildes: any;

  constructor( 
    private activateroute: ActivatedRoute,
    private authService: AuthService,
    private sanitizer:DomSanitizer
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
    this.maildes = this.sanitizer.bypassSecurityTrustHtml(data.body.content)
    console.log(this.maildes)
  }

}
