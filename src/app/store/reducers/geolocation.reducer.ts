import { Action, createReducer, on } from '@ngrx/store';
// @ts-ignore
import {geolocationInitialState, GeolocationState} from '@store/state/geolocation.state';
// @ts-ignore
import {loadGeolocationCitySuccess} from '@store/actions/geolocation.actions';

const geolocationReducer = createReducer(
  geolocationInitialState,
  on(loadGeolocationCitySuccess, (state, { data }) => ({ ...state, ...data}))
);

export function reducer(state: GeolocationState | undefined, action: Action) {
  return geolocationReducer(state, action);
}

