import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { environment } from '@environments/environment';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { WeatherCardComponent } from '@components/weather-card/weather-card.component';
import { ForecastsCardComponent } from '@components/forecasts-card/forecasts-card.component';

// Reducers
import * as city from '@store/reducers/city.reducer';
import * as autocomplete from '@store/reducers/autocomplete.reducer';
import * as forecast from '@store/reducers/forecast.reducer';
import * as currentConditions from '@store/reducers/current-conditions.reducer';
import * as favorites from '@store/reducers/favorites.reducer';
import * as geolocation from '@store/reducers/geolocation.reducer';
import * as errorSnackBar from '@store/reducers/error-snack-bar.reducer';

// Effects
import { CurrentConditionsEffects, AutocompleteEffects, ForecastEffects, GeolocationEffects } from '@store/effects';
import {DateToDayStringPipe} from '@services/date-to-day-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    NavBarComponent,
    WeatherCardComponent,
    ForecastsCardComponent,
    DateToDayStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    StoreModule.forRoot({
      city: city.reducer,
      autocomplete: autocomplete.reducer,
      forecast: forecast.reducer,
      currentConditions: currentConditions.reducer,
      favorites: favorites.reducer,
      geolocation: geolocation.reducer,
      errorSnackBar: errorSnackBar.reducer
    }, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([CurrentConditionsEffects, AutocompleteEffects, ForecastEffects, GeolocationEffects]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
