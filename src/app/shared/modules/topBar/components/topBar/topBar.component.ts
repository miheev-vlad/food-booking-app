import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { logoutAction } from 'src/app/auth/store/actions/login.action';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { ConfigService } from 'src/app/shared/services/config.service';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { getEmailName } from 'src/app/shared/utils/handlers/getEmailName.function';
import { shoppingItemsSelector } from 'src/app/shoppingCart/store/selectors';
import { ShoppingItemInterface } from 'src/app/shoppingCart/types/shoppingItem.interface';

@Component({
  selector: 'fba-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  isAdmin = false;
  adminEmailName: string;
  authSub: Subscription;
  shoppingItems$: Observable<ShoppingItemInterface[]>;

  constructor(
    private store: Store<AppStateInterface>,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeSub();
  }

  private initializeValues(): void {
    this.adminEmailName = this.configService.getOption('forbiddenEmail');
    this.shoppingItems$ = this.store.pipe(select(shoppingItemsSelector));
  }

  private initializeSub(): void {
    this.authSub = this.store
      .pipe(select(currentUserSelector))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.isAuthenticated = !!currentUser;
        if (currentUser) {
          this.isAdmin =
            getEmailName(currentUser.email) === this.adminEmailName;
        }
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
