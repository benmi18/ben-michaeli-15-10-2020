import { Component, OnInit } from '@angular/core';
import {Page} from '@store/enums/page.enum';
import {select, Store} from '@ngrx/store';
import {State} from '@store/state';
import {Observable} from 'rxjs';
import {CityModel} from '@store/models/city.model';
import {selectFavorites} from '@store/selectors/favorites.selectore';
import {setSelectedCity} from '@store/actions/city.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public readonly pageEnum = Page;
  public favorites$: Observable<Array<CityModel>>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.initFavorites();
  }

  private initFavorites() {
    this.favorites$ = this.store.pipe(select(selectFavorites));
  }

  onFavoriteCardClick(favorite: CityModel) {
    this.store.dispatch(setSelectedCity({data: {...favorite, redirectFromFavorite: true}}));
  }
}
