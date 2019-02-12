import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Is a user logged in?
  authenticated: boolean;
  // The user
  user: any;
  //  udata: any;

  token: any
  datatable: DataTables.Api;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.getAccessToken().then((data) => {
      this.userP(data)
    });
    const table = $('table');
      this.datatable = table.DataTable({});
  }

  userP(data) {
    // window.location.reload();
    if (data) {
      this.authenticated = true;
      this.authService.getMails().then(
        (res) => {this.userdata(res)});
      // console.log(this.user)
    } else {
      this.authenticated = false;
      this.user = {};
    }
  }

  userdata(data)
  {
    // window.location.reload();
    this.user = data
    
  }
  async signIn(): Promise<void> {
    await this.authService.signIn();
    this.user = this.authService.getUser();
    console.log(this.authService.getUser())
  }

}
