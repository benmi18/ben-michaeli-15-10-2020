import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import {mergeMap, takeUntil, tap} from 'rxjs/operators';
import {iif, of, Subject} from 'rxjs';
import {Page} from '@store/enums/page.enum';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new Subject<void>();
  public readonly page = Page;

  public currentPage: Page;
  constructor(private router: Router) { }

  ngOnInit() {
      this.getCurrentPageFromRouter();
  }

  private getCurrentPageFromRouter() {
    this.router.events.pipe(
      mergeMap(e => iif(() => e instanceof RouterEvent, of(e))),
      tap((e: RouterEvent) => this.currentPage = (e.url.replace('/', '') || Page.HOME) as Page),
      takeUntil(this.onDestroy$)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
