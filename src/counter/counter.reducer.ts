import { CounterAction, CounterActionTypes } from './counter.actions';

export const ensureNever = (action: never) => action;

const initialState = 0;

export function counterReducer(state: number = initialState, action: CounterAction): typeof state {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return state + 1;

    case CounterActionTypes.DECREMENT:
      return state - 1;

    case CounterActionTypes.RESET:
      return 0;

    default:
      ensureNever(action);
      return state;
  }
}
