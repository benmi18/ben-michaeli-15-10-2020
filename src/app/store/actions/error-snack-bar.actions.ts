import {createAction, props} from '@ngrx/store';

export enum ErrorSnackBarActionsType {
  openErrorSnackBar = '[Error Snack Bar] Open Error Snack Bar',
  closeErrorSnackBar = '[Error Snack Bar] Close Error Snack Bar'
}

export const openErrorSnackBar = createAction(
  ErrorSnackBarActionsType.openErrorSnackBar,
  props<{message: string, duration: number}>()
);

export const closeErrorSnackBar = createAction(
  ErrorSnackBarActionsType.closeErrorSnackBar
);
