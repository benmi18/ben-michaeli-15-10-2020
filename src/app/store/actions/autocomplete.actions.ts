import { createAction, props } from '@ngrx/store';
// @ts-ignore
import {CityModel} from '@store/models/city.model';

export enum AutocompleteActionsType {
  loadAutocompleteResults = '[Autocomplete] Load Autocomplete Results',
  loadAutocompleteResultsSuccess = '[Autocomplete] Load Autocomplete Results Success',
  loadAutocompleteResultsFailure = '[Autocomplete] Load Autocomplete Results Failure',
}

export const loadAutocompleteResults = createAction(
  AutocompleteActionsType.loadAutocompleteResults,
  props<{query: string}>()
);

export const loadAutocompleteResultsSuccess = createAction(
  AutocompleteActionsType.loadAutocompleteResultsSuccess,
  props<{ data: Array<CityModel> }>()
);

export const loadAutocompleteResultsFailure = createAction(
  AutocompleteActionsType.loadAutocompleteResultsFailure,
  props<{ error: any }>()
);
