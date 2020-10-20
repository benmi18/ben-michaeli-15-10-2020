import { Action, createReducer, on } from '@ngrx/store';
import {errorSnackBarInitialState, ErrorSnackBarState} from '@store/state/error-snack-bar.state';
import {closeErrorSnackBar, openErrorSnackBar} from '@store/actions/error-snack-bar.actions';

const errorSnackBarReducer = createReducer(
  errorSnackBarInitialState,
  on(openErrorSnackBar, (state, {message, duration}) => {
    return { ...state, isOpen: true, message, duration};
  }),
  on(closeErrorSnackBar, (state) => ({...state, message: '', duration: null, isOpen: false}))
);

export function reducer(state: ErrorSnackBarState | undefined, action: Action) {
  return errorSnackBarReducer(state, action);
}

