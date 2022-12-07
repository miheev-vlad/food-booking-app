import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { logoutAction } from 'src/app/auth/store/actions/login.action';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'fba-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private authSub: Subscription;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initializeSub();
  }

  private initializeSub(): void {
    this.authSub = this.store
      .pipe(select(currentUserSelector))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.isAuthenticated = !!currentUser;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeSub();
  }

  private unsubscribeSub(): void {
    this.authSub.unsubscribe();
  }

  onLogout() {
    this.store.dispatch(logoutAction());
  }
}
