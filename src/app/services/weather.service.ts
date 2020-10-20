import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {openErrorSnackBar} from '@store/actions/error-snack-bar.actions';
import {Store} from '@ngrx/store';
import {State} from '@store/state';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  readonly config = {
    BASE_URL: 'https://dataservice.accuweather.com',
    LOCATION_URL: 'locations/v1/cities',
    CURRENT_CONDITION_URL: 'currentconditions/v1',
    FORECASTS_URL: 'forecasts/v1/daily/5day',
    // API_KEY: 'apikey=F65ITMcva7VLGjfdqpDi1gJOQwOMOiXX'
    API_KEY: 'apikey=6EOxAJZQpzrQ7BdioNyhX8XyFS0MxOok'
  };

  constructor(private http: HttpClient, private store: Store<State>) { }

  public getAutoCompleteResults(query: string) {
    return this.http.get(`${this.config.BASE_URL}/${this.config.LOCATION_URL}/autocomplete?${this.config.API_KEY}&q=${query}`)
      .pipe(
        catchError((error) => {
          this.store.dispatch(openErrorSnackBar({message: 'Get AutoComplete Results Error', duration: 3000}));
          return of(error);
        })
      );
  }

  public getCurrentConditions(locationKey: string) {
    console.log('locationKey: ', locationKey)
    return this.http.get(`${this.config.BASE_URL}/${this.config.CURRENT_CONDITION_URL}/${locationKey}?${this.config.API_KEY}`)
      .pipe(
        catchError((error) => {
          this.store.dispatch(openErrorSnackBar({message: 'Get Current Conditions Error', duration: 3000}));
          return of(error);
        })
      );
  }

  public getForecasts(locationKey: string) {
    return this.http.get(`${this.config.BASE_URL}/${this.config.FORECASTS_URL}/${locationKey}?${this.config.API_KEY}`)
      .pipe(
        catchError((error) => {
          this.store.dispatch(openErrorSnackBar({message: 'Get Forecasts Error', duration: 3000}));
          return of(error);
        })
      );
  }

  public getByGeolocation(lat: string, lon: string) {
    return this.http.get(`${this.config.BASE_URL}/${this.config.LOCATION_URL}/geoposition/search?${this.config.API_KEY}&q=${lat},${lon}`)
      .pipe(
        catchError((error) => {
          this.store.dispatch(openErrorSnackBar({message: 'Get By  Geolocation error', duration: 3000}));
          return of(error);
        })
      );
  }
}
