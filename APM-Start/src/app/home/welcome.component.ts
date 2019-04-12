import { Component, OnInit } from '@angular/core';
import { GpsService } from '../gps/gps.service';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';
  public currentLocation: Coordinates;
  errorMessage: string;

  constructor(private gpsService: GpsService) { }

  ngOnInit(): void {
    this.gpsService.getGeoLocation().subscribe(
      location=> {
        this.currentLocation = location.coords;
      },
      error=> this.errorMessage = <any>error
    );
  }
}
