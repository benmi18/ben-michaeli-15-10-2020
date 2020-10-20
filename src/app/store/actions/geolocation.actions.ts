import { createAction, props } from '@ngrx/store';
// @ts-ignore
import {GeolocationModel} from '@store/models/geolocation.model';

export enum GeolocationActionsType {
  loadGeolocationCity = '[Geolocation] Load Geolocation City',
  loadGeolocationCitySuccess = '[Geolocation] Load Geolocation City Success',
  loadGeolocationCityFailure = '[Geolocation] Load Geolocation City Failure',
}

export const loadGeolocationCity = createAction(
  GeolocationActionsType.loadGeolocationCity,
  props<{latitude: number, longitude: number}>()
);

export const loadGeolocationCitySuccess = createAction(
  GeolocationActionsType.loadGeolocationCitySuccess,
  props<{ data: GeolocationModel }>()
);

export const loadGeolocationCityFailure = createAction(
  GeolocationActionsType.loadGeolocationCityFailure,
  props<{ error: any }>()
);
