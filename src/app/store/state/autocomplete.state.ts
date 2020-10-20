// @ts-ignore
import {CityModel} from '@store/models/city.model';

export interface AutocompleteState {
  data: Array<CityModel>;
}

export const autocompleteInitialState: AutocompleteState = {
  data: []
};
