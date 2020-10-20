import { Action, createReducer, on } from '@ngrx/store';
// @ts-ignore
import {cityInitialState, CityState} from '@store/state/city.state';
// @ts-ignore
import {setSelectedCity} from '@store/actions/city.actions';

const cityReducer = createReducer(
  cityInitialState,
  on(setSelectedCity, (state, { data }) => ({ ...state, ...data}))
);

export function reducer(state: CityState | undefined, action: Action) {
  return cityReducer(state, action);
}

