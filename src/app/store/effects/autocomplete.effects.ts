import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
// @ts-ignore
import {WeatherService} from '@services/weather.service';

// @ts-ignore
import { AutocompleteActionsType } from '@store/actions/autocomplete.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY, pipe} from 'rxjs';
// @ts-ignore
import {CityModel} from '@store/models/city.model';


@Injectable()
export class AutocompleteEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  loadAutocompleteResults$ = createEffect(() => this.actions$.pipe(
    ofType(AutocompleteActionsType.loadAutocompleteResults),
    mergeMap(({query}) => this.weatherService.getAutoCompleteResults(query)),
    pipe(
      map((data: Array<CityModel>) => ({type: AutocompleteActionsType.loadAutocompleteResultsSuccess, data})),
      catchError(() => EMPTY)
    )
  ));
}
