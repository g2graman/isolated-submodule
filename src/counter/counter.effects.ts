import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { CounterAction, CounterActionTypes, reset } from './counter.actions';
import { AppState } from './counter.component';

@Injectable()
export class CounterEffects {
  @Effect()
  reset$: Observable<CounterAction> = this.actions$.pipe(
    ofType(CounterActionTypes.INCREMENT),
    withLatestFrom(this.store$),
    filter(([_, storeState]: [any, AppState]) => storeState.count === 10),
    map(reset)
  );

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>
  ) {}
}
