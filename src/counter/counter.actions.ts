export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET'
}

export interface IncrementAction { type: CounterActionTypes.INCREMENT; }
export interface DecrementAction { type: CounterActionTypes.DECREMENT; }
export interface ResetAction { type: CounterActionTypes.RESET; }

export type CounterAction = IncrementAction | DecrementAction | ResetAction;

export const increment = (): IncrementAction => ({ type: CounterActionTypes.INCREMENT });
export const decrement = (): DecrementAction => ({ type: CounterActionTypes.DECREMENT });
export const reset = (): ResetAction => ({ type: CounterActionTypes.RESET });
