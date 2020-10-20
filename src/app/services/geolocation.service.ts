import { Injectable } from '@angular/core';
import {take, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {selectCity} from '@store/selectors/city.selectore';
import {CityModel} from '@store/models/city.model';
import {State} from '@store/state';
import {loadGeolocationCity} from '@store/actions/geolocation.actions';
import {setSelectedCity} from '@store/actions/city.actions';
import {openErrorSnackBar} from '@store/actions/error-snack-bar.actions';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  constructor(private store: Store<State>) { }

  public initUserGeolocation() {
    if (!navigator.geolocation) {
      return;
    } else {
      navigator.geolocation.getCurrentPosition(this.successGeolocation, this.errorGeolocation);
    }
  }

  private successGeolocation = ({ coords: { latitude, longitude } }) => {
    this.store.pipe(select(selectCity))
      .pipe(
        take(1),
        tap((city: CityModel) => {
          if (!city.redirectFromFavorite) {
            this.store.dispatch(loadGeolocationCity({latitude, longitude}));
          } else {
            this.store.dispatch(setSelectedCity({data: city}));
          }
        })
      ).subscribe();
  }

  private errorGeolocation = () => {
    this.store.dispatch(openErrorSnackBar({message: 'Geolocation Blocked Error', duration: 3000}));
    // @ts-ignore
    this.store.dispatch(setSelectedCity({data: {
        Key: '215854',
        LocalizedName: 'Tel Aviv',
        Type: 'City',
        Country: {
          ID: 'IL',
          LocalizedName: 'Israel'
        }
      }}));
  }
}
