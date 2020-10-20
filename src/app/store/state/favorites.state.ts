import {CityModel} from '@store/models/city.model';

export interface FavoritesState {
  data: Array<CityModel>;
}

export const favoritesInitialState: FavoritesState = {
  data: []
};

