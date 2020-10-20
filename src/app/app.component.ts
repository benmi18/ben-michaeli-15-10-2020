import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {select, Store} from '@ngrx/store';
import {State} from '@store/state';
import {selectErrorSnackBar} from '@store/selectors/error-snack-bar.selectore';
import {takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {closeErrorSnackBar} from '@store/actions/error-snack-bar.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new Subject<void>();

  constructor(private store: Store<State>, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.handleErrorSnackBar();
  }

  private handleErrorSnackBar = () => {
    this.store.pipe(select(selectErrorSnackBar)).pipe(
      tap(snackBar => {
        if (snackBar.isOpen) {
          this.snackBar.open(snackBar.message || 'Error', 'Close', {
            duration: snackBar.duration,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          }).afterDismissed().pipe(takeUntil(this.onDestroy$)).subscribe(() => this.store.dispatch(closeErrorSnackBar()));
        }
      }),
      takeUntil(this.onDestroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
