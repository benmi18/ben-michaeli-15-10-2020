import { createSelector } from '@ngrx/store';
// @ts-ignore
import { State } from '@store/state';

export const getGeolocation = (state: State) => state.geolocation;

export const selectGeolocation = createSelector(
  getGeolocation,
  geolocation => geolocation
);
