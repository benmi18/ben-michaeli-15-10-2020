import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Page} from '@store/enums/page.enum';
import {State} from '@store/state';
import {select, Store} from '@ngrx/store';
import {CityModel} from '@store/models/city.model';
import {loadFavoriteCurrentConditions} from '@store/actions/current-conditions.actions';
import {selectFavoritesCurrentConditions} from '@store/selectors/current-conditons.selectore';
import {takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {FavoriteCurrentConditionModel} from '@store/models/current-condition.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new Subject<void>();
  public readonly pageEnum = Page;

  @Input() readonly page: Page;
  @Input() readonly date: string;
  @Input() readonly city: CityModel;
  @Input() temperature: number;

  public cityName: string;
  public weatherText: string;

  private favoritesCurrentConditions: Array<FavoriteCurrentConditionModel>;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.initFavoritesData();
    this.initWeatherData();
  }

  private initWeatherData() {
    if (!!this.city) {
      this.cityName = this.city.LocalizedName;
      if (!this.favoritesCurrentConditions.find(f => f.cityKey === this.city.Key)) {
        this.store.dispatch(loadFavoriteCurrentConditions({cityKey: this.city.Key}));
      } else {
        const currentConditions = this.favoritesCurrentConditions.find(f => f.cityKey === this.city.Key);
        this.temperature = currentConditions.Temperature.Imperial.Value;
        this.weatherText = currentConditions.WeatherText;
      }
    }
  }

  private initFavoritesData() {
    this.store.pipe(select(selectFavoritesCurrentConditions))
      .pipe(
        tap(favoritesCurrentConditions => this.favoritesCurrentConditions = favoritesCurrentConditions),
        takeUntil(this.onDestroy$)
      ).subscribe();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
