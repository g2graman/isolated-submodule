import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { decrement, increment, reset } from './counter.actions';
import { NavigationStart, Router } from '@angular/router';

export interface AppState {
  count: number;
}

@Component({
  selector: 'app-my-counter',
  template: `
    <div>
      <button (click)="increment()">Increment</button>
      <div>Current Count: {{ count$ | async }}</div>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset Counter</button>
    </div>
  `,
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
