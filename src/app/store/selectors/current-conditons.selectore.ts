import { createSelector } from '@ngrx/store';
// @ts-ignore
import { State } from '@store/state';

export const getCurrentConditions = (state: State) => state.currentConditions;

export const selectCurrentConditions = createSelector(
  getCurrentConditions,
  currentConditions => currentConditions.data[0]
);

export const selectFavoritesCurrentConditions = createSelector(
  getCurrentConditions,
  currentConditions => currentConditions.favoritesData
);
