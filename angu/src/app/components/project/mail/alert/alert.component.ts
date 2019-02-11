import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/Service/alert.service';
import { Alert } from 'src/app/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private alertsService: AlertService) { }

  ngOnInit() {
  }

  close(alert: Alert) {
    this.alertsService.remove(alert);
  }

}
