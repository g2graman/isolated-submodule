import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CounterComponent } from './counter.component';
import { counterReducer } from './counter.reducer';
import { CounterEffects } from './counter.effects';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  }
];

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(routes),
    StoreModule.forFeature('count', counterReducer),
    EffectsModule.forFeature([CounterEffects])
  ],
  providers: [],
})
export class CounterModule { }
