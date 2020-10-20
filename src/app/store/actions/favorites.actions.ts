import { createAction, props } from '@ngrx/store';
// @ts-ignore
import {CityModel} from '@store/models/city.model';

export enum FavoritesActionsType {
  toggleFavorite = '[Favorites] Toggle Favorite'
}

export const toggleFavorite = createAction(
  FavoritesActionsType.toggleFavorite,
  props<{data: CityModel}>()
);
