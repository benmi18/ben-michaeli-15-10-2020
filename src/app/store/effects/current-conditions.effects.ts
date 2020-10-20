import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
// @ts-ignore
import {WeatherService} from '@services/weather.service';
// @ts-ignore
import {CurrentConditionsActionsType} from '@store/actions/current-conditions.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY, forkJoin, of, pipe} from 'rxjs';
// @ts-ignore
import {CurrentConditionModel} from '@store/models/current-condition.model';



@Injectable()
export class CurrentConditionsEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  loadCurrentConditions$ = createEffect(() => this.actions$.pipe(
    ofType(CurrentConditionsActionsType.loadCurrentConditions),
    mergeMap(({cityKey}) => this.weatherService.getCurrentConditions(cityKey)),
    pipe(
      map((data: Array<CurrentConditionModel>) => ({type: CurrentConditionsActionsType.loadCurrentConditionsSuccess, data})),
      catchError(() => EMPTY)
    )
  ));

  loadFavoriteCurrentConditions$ = createEffect(() => this.actions$.pipe(
    ofType(CurrentConditionsActionsType.loadFavoriteCurrentConditions),
    mergeMap(({cityKey}) => forkJoin([of(cityKey), this.weatherService.getCurrentConditions(cityKey)])),
    pipe(
      map(([cityKey, currentConditions]) => (
        // tslint:disable-next-line:max-line-length
        {type: CurrentConditionsActionsType.loadFavoriteCurrentConditionsSuccess, favoriteCurrentConditions: {cityKey, ...currentConditions[0]}}
      )),
      catchError(() => EMPTY)
    )
  ));
}
