import { createAction, props } from '@ngrx/store';
// @ts-ignore
import {CityModel} from '@store/models/city.model';

export enum CityActionsType {
  setSelectedCity = '[City] Set Selected City'
}

export const setSelectedCity = createAction(
  CityActionsType.setSelectedCity,
  props<{ data: CityModel }>()
);
