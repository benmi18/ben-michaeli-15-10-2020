import * as city from './city.state';
import * as autocomplete from './autocomplete.state';
import * as forecast from './forecast.state';
import * as geolocation from './geolocation.state';
import * as currentConditions from './current-conditions.state';
import * as favorites from './favorites.state';
import * as errorSnackBar from './error-snack-bar.state';

export interface State {
  city: city.CityState;
  autocomplete: autocomplete.AutocompleteState;
  forecast: forecast.ForecastState;
  geolocation: geolocation.GeolocationState;
  currentConditions: currentConditions.CurrentConditionsState;
  favorites: favorites.FavoritesState;
  errorSnackBar: errorSnackBar.ErrorSnackBarState;
}
