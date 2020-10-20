import { Action, createReducer, on } from '@ngrx/store';
// @ts-ignore
import {currentConditionsInitialState, CurrentConditionsState} from '@store/state/current-conditions.state';
// @ts-ignore
import {
  loadCurrentConditionsSuccess,
  loadFavoriteCurrentConditionsSuccess
} from '@store/actions/current-conditions.actions';

const currentConditionsReducer = createReducer(
  currentConditionsInitialState,
  on(loadCurrentConditionsSuccess, (state, { data }) => ({ ...state, data})),
  on(loadFavoriteCurrentConditionsSuccess, (state, {favoriteCurrentConditions}) => ({
    ...state,
    favoritesData: [...state.favoritesData, favoriteCurrentConditions]
  }))
);

export function reducer(state: CurrentConditionsState | undefined, action: Action) {
  return currentConditionsReducer(state, action);
}

