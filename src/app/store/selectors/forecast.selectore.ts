import { createSelector } from '@ngrx/store';
// @ts-ignore
import { State } from '@store/state';

export const getForecast = (state: State) => state.forecast;

export const selectForecast = createSelector(
  getForecast,
  forecast => forecast
);
