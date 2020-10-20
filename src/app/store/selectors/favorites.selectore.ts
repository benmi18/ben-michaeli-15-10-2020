import { createSelector } from '@ngrx/store';
// @ts-ignore
import { State } from '@store/state';

export const getFavorites = (state: State) => state.favorites;

export const selectFavorites = createSelector(
  getFavorites,
  favorites => favorites.data
);
