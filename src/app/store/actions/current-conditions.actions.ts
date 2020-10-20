import { createAction, props } from '@ngrx/store';
import {CurrentConditionModel, FavoriteCurrentConditionModel} from '@store/models/current-condition.model';

export enum CurrentConditionsActionsType {
  loadCurrentConditions = '[Weather] Load Current Conditions',
  loadCurrentConditionsSuccess = '[Weather] Load Current Conditions Success',
  loadCurrentConditionsFailure = '[Weather] Load Current Conditions Failure',
  loadFavoriteCurrentConditions = '[Weather] Load Favorite Current Conditions',
  loadFavoriteCurrentConditionsSuccess = '[Weather] Load Favorite Current Conditions Success',
  loadFavoriteCurrentConditionsFailure = '[Weather] Load Favorite Current Conditions Failure',
}

export const loadCurrentConditions = createAction(
  CurrentConditionsActionsType.loadCurrentConditions,
  props<{cityKey: string}>()
);

export const loadCurrentConditionsSuccess = createAction(
  CurrentConditionsActionsType.loadCurrentConditionsSuccess,
  props<{ data: Array<CurrentConditionModel> }>()
);

export const loadCurrentConditionsFailure = createAction(
  CurrentConditionsActionsType.loadCurrentConditionsFailure,
  props<{ error: any }>()
);

// Favorites actions
export const loadFavoriteCurrentConditions = createAction(
  CurrentConditionsActionsType.loadFavoriteCurrentConditions,
  props<{cityKey: string}>()
);

export const loadFavoriteCurrentConditionsSuccess = createAction(
  CurrentConditionsActionsType.loadFavoriteCurrentConditionsSuccess,
  props<{ favoriteCurrentConditions: FavoriteCurrentConditionModel }>()
);

export const loadFavoriteCurrentConditionsFailure = createAction(
  CurrentConditionsActionsType.loadFavoriteCurrentConditionsFailure,
  props<{ error: any }>()
);
