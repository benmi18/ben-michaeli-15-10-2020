import { Action, createReducer, on } from '@ngrx/store';
// @ts-ignore
import {favoritesInitialState, FavoritesState} from '@store/state/favorites.state';
// @ts-ignore
import {toggleFavorite} from '@store/actions/favorites.actions';

const favoritesReducer = createReducer(
  favoritesInitialState,
  on(toggleFavorite, (state, { data }) => (state.data.find(city => city.Key === data.Key) ?
    {
      ...state,
      data: state.data.filter(city => city.Key !== data.Key),
    } :
    {
      ...state,
      data: [...state.data, data]
    }))
);

export function reducer(state: FavoritesState | undefined, action: Action) {
  return favoritesReducer(state, action);
}

