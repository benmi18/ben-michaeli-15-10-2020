export interface ErrorSnackBarState {
  isOpen: boolean;
  message: string;
  duration: number;
}

export const errorSnackBarInitialState: ErrorSnackBarState = {
  isOpen: false,
  message: '',
  duration: null
};
