import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
// @ts-ignore
import {WeatherService} from '@services/weather.service';
// @ts-ignore
import {ForecastActionsType} from '@store/actions/forecast.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY, pipe} from 'rxjs';
// @ts-ignore
import {ForecastModel} from '@store/models/forecast.model';


@Injectable()
export class ForecastEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  loadForecast$ = createEffect(() => this.actions$.pipe(
    ofType(ForecastActionsType.loadForecast),
    mergeMap(({cityKey}) => this.weatherService.getForecasts(cityKey)),
    pipe(
      map((data: ForecastModel) => ({type: ForecastActionsType.loadForecastSuccess, data})),
      catchError(() => EMPTY)
    )
  ));
}
