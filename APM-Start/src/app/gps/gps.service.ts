import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  constructor() { }

  getGeoLocation(): Observable<Position> {
    return Observable.create((observer: Observer<Position>) => {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          observer.next(position);
          observer.complete();
        },
        (error: PositionError) => {
          alert('Geolocation service: ' + error.message);
          observer.error(error);
        }
      );
    });
  }

}
