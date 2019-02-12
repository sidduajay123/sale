import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Service/jarwis.service';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.css']
})
export class ComposeMailComponent implements OnInit {

  public form = {
    mail_to: null,
    mail_subject: null,
    mail_content: null
  }
  constructor(
    private Jarwis : JarwisService
  ) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.Jarwis.sendemailnow(this.form).subscribe(
      data => console.log(data)
    )
  }
}
