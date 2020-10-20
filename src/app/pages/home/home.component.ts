import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {debounceTime, filter, startWith, switchMap, takeUntil, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import { State } from '@store/state';
import {CityModel} from '@store/models/city.model';
import {loadAutocompleteResults} from '@store/actions/autocomplete.actions';
import {selectAutocompleteResults} from '@store/selectors/autocomplete.selectore';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {setSelectedCity} from '@store/actions/city.actions';
import {GeolocationService} from '@services/geolocation.service';
import {selectCurrentConditions} from '@store/selectors/current-conditons.selectore';
import {selectForecast} from '@store/selectors/forecast.selectore';
import {ForecastModel} from '@store/models/forecast.model';
import {CurrentConditionModel} from '@store/models/current-condition.model';
import {loadCurrentConditions} from '@store/actions/current-conditions.actions';
import {loadForecast} from '@store/actions/forecast.actions';
import {selectCity} from '@store/selectors/city.selectore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new Subject<void>();

  forecast: ForecastModel;
  currentConditions: CurrentConditionModel;
  selectedCity: CityModel;

  myControl = new FormControl();
  filteredOptions: Observable<CityModel[]>;
  constructor(private store: Store<State>, private geolocationService: GeolocationService) { }

  ngOnInit() {
    this.initSelectedCity();
    this.geolocationService.initUserGeolocation();
    this.handleAutocompleteSearch();
  }

  public displayFn(city: CityModel): string {
    return city && city.LocalizedName || '';
  }

  public onCitySelect($event: MatAutocompleteSelectedEvent) {
    this.store.dispatch(setSelectedCity({data: $event.option.value}));
  }

  public onSearchKeyDown($event: KeyboardEvent) {
    this.preventNonEnglishLetters($event);
  }

  private initSelectedCity() {
    this.store.pipe(select(selectCity))
      .pipe(
        switchMap((city: CityModel) => {
          if (city && !!city.Key) {
            this.selectedCity = city;
            this.store.dispatch(loadCurrentConditions({cityKey: this.selectedCity.Key}));
            this.store.dispatch(loadForecast({cityKey: this.selectedCity.Key}));
          }
          return this.store.pipe(select(selectForecast));
        }),
        switchMap((forecast) => {
          this.forecast = forecast;
          return this.store.pipe(select(selectCurrentConditions));
        }),
        tap((currentConditions) => this.currentConditions = currentConditions),
        takeUntil(this.onDestroy$)
      ).subscribe();
  }

  private handleAutocompleteSearch() {
    this.myControl.valueChanges
      .pipe(
        startWith(''),
        filter(Boolean),
        debounceTime(250),
        // on enter key the query will be CityModel object, so we need to verify that the query is a string to prevent unwanted api call
        tap((query: string) => typeof query === 'string' && this.store.dispatch(loadAutocompleteResults({query}))),
        takeUntil(this.onDestroy$)
      ).subscribe();

    this.filteredOptions = this.store.pipe(select(selectAutocompleteResults));
  }

  private preventNonEnglishLetters($event: KeyboardEvent) {
    const englishLettersRegEx = /^[a-zA-Z]+$/;
    // tslint:disable-next-line:no-unused-expression
    !englishLettersRegEx.test($event.key) && $event.preventDefault();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
