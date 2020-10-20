import { Action, createReducer, on } from '@ngrx/store';
// @ts-ignore
import {forecastInitialState, ForecastState} from '@store/state/forecast.state';
// @ts-ignore
import {loadForecastSuccess} from '@store/actions/forecast.actions';

const forecastReducer = createReducer(
  forecastInitialState,
  on(loadForecastSuccess, (state, { data }) => ({ ...state, ...data}))
);

export function reducer(state: ForecastState | undefined, action: Action) {
  return forecastReducer(state, action);
}

