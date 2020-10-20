import { createSelector } from '@ngrx/store';
// @ts-ignore
import { State } from '@store/state';

export const getErrorSnackBar = (state: State) => state.errorSnackBar;

export const selectErrorSnackBar = createSelector(
  getErrorSnackBar,
  errorSnackBar => errorSnackBar
);
