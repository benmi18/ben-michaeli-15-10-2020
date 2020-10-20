import { createSelector } from '@ngrx/store';
// @ts-ignore
import { State } from '@store/state';

export const getAutocomplete = (state: State) => state.autocomplete;

export const selectAutocompleteResults = createSelector(
  getAutocomplete,
  autocomplete => autocomplete.data
);
