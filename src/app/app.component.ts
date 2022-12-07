import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { autoLoginAction } from './auth/store/actions/login.action';

@Component({
  selector: 'fba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.store.dispatch(autoLoginAction());
  }
}
