import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
// @ts-ignore
import {WeatherService} from '@services/weather.service';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {EMPTY, pipe} from 'rxjs';
// @ts-ignore
import {GeolocationActionsType} from '@store/actions/geolocation.actions';
// @ts-ignore
import {GeolocationModel} from '@store/models/geolocation.model';
// @ts-ignore
import {CityActionsType} from '@store/actions/city.actions';


@Injectable()
export class GeolocationEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {
  }

  loadGeolocationCity$ = createEffect(() => this.actions$.pipe(
    ofType(GeolocationActionsType.loadGeolocationCity),
    mergeMap(({latitude, longitude}) => this.weatherService.getByGeolocation(latitude, longitude)),
    pipe(
      switchMap((data: GeolocationModel) => ([
        {type: GeolocationActionsType.loadGeolocationCitySuccess, data},
        {type: CityActionsType.setSelectedCity, data}
      ])),
      catchError(() => EMPTY)
    )
  ));
}
