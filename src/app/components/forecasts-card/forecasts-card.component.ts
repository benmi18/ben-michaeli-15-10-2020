import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Page} from '@store/enums/page.enum';
import {ForecastModel} from '@store/models/forecast.model';
import {CurrentConditionModel} from '@store/models/current-condition.model';
import {CityModel} from '@store/models/city.model';
import {select, Store} from '@ngrx/store';
import {State} from '@store/state';
import {toggleFavorite} from '@store/actions/favorites.actions';
import {Subject} from 'rxjs';
import {selectFavorites} from '@store/selectors/favorites.selectore';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-forecasts-card',
  templateUrl: './forecasts-card.component.html',
  styleUrls: ['./forecasts-card.component.scss']
})
export class ForecastsCardComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new Subject<void>();
  public readonly pageEnum = Page;

  @Input() forecast: ForecastModel;
  @Input() currentConditions: CurrentConditionModel;
  @Input() selectedCity: CityModel;

  private favorites: Array<CityModel>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.initFavorites();
  }

  toggleFavorite() {
    this.store.dispatch(toggleFavorite({data: this.selectedCity}));
  }

  public isCityInFavorites(city: CityModel): boolean {
    return !!this.favorites.find(f => f.Key === city.Key);
  }

  private initFavorites() {
    this.store.pipe(select(selectFavorites))
      .pipe(
        tap((favorites: Array<CityModel>) => this.favorites = favorites),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
