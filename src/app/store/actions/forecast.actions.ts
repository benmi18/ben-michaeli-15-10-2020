import { createAction, props } from '@ngrx/store';
// @ts-ignore
import {ForecastModel} from '@store/models/forecast.model';

export enum ForecastActionsType {
  loadForecast = '[Forecast] Load Forecast',
  loadForecastSuccess = '[Forecast] Load Forecast Success',
  loadForecastFailure = '[Forecast] Load Forecast Failure',
}

export const loadForecast = createAction(
  ForecastActionsType.loadForecast,
  props<{cityKey: string}>()
);

export const loadForecastSuccess = createAction(
  ForecastActionsType.loadForecastSuccess,
  props<{ data: ForecastModel }>()
);

export const loadForecastFailure = createAction(
  ForecastActionsType.loadForecastFailure,
  props<{ error: any }>()
);
