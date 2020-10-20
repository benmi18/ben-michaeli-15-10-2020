import { Action, createReducer, on } from '@ngrx/store';
// @ts-ignore
import {loadAutocompleteResultsSuccess} from '@store/actions/autocomplete.actions';
// @ts-ignore
import {autocompleteInitialState, AutocompleteState} from '@store/state/autocomplete.state';

const autocompleteReducer = createReducer(
  autocompleteInitialState,
  on(loadAutocompleteResultsSuccess, (state, { data }) => {
    return { ...state, data};
  })
);

export function reducer(state: AutocompleteState | undefined, action: Action) {
  return autocompleteReducer(state, action);
}

