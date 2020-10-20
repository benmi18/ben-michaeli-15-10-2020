import { createSelector } from '@ngrx/store';
// @ts-ignore
import { State } from '@store/state';

export const getCity = (state: State) => state.city;

export const selectCity = createSelector(
  getCity,
  city => city
);
